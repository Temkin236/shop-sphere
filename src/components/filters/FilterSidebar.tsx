import React from 'react';
import { X, Filter } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { categories } from '../../data/mockData';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ isOpen, onClose }) => {
  const { filters, setFilters, resetFilters } = useStore();

  const handlePriceRangeChange = (value: number, index: number) => {
    const newRange: [number, number] = [...filters.priceRange];
    newRange[index] = value;
    setFilters({ priceRange: newRange });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-80 bg-white shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 lg:hidden">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="p-4 space-y-6">
            {/* Reset Filters */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900 hidden lg:flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </h3>
              <button
                onClick={resetFilters}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
              >
                Reset All
              </button>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Category</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category.id}
                      checked={filters.category === category.id}
                      onChange={(e) => setFilters({ category: e.target.value })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700 flex-1">
                      {category.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({category.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Price Range</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Min Price</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), 0)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-sm text-gray-700 mt-1">
                    ${filters.priceRange[0]}
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Max Price</label>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceRangeChange(parseInt(e.target.value), 1)}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="text-sm text-gray-700 mt-1">
                    ${filters.priceRange[1]}
                  </div>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Minimum Rating</h4>
              <div className="space-y-2">
                {[4, 3, 2, 1, 0].map((rating) => (
                  <label key={rating} className="flex items-center">
                    <input
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={filters.rating === rating}
                      onChange={(e) => setFilters({ rating: parseInt(e.target.value) })}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-sm text-gray-700 flex items-center">
                      {rating === 0 ? 'All Ratings' : (
                        <>
                          {rating}+ 
                          <span className="ml-1 text-yellow-400">★</span>
                        </>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Availability</h4>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters({ inStock: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-3 text-sm text-gray-700">
                  In Stock Only
                </span>
              </label>
            </div>

            {/* Sort By */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Sort By</h4>
              <select
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={(e) => {
                  const [sortBy, sortOrder] = e.target.value.split('-');
                  setFilters({ 
                    sortBy: sortBy as any, 
                    sortOrder: sortOrder as 'asc' | 'desc' 
                  });
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="rating-desc">Rating (High to Low)</option>
                <option value="newest-desc">Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
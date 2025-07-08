import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import { FilterSidebar } from '../components/filters/FilterSidebar';
import { ProductGrid } from '../components/products/ProductGrid';

export const ProductsPage: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div id="products-section" className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Discover our complete collection of premium products</p>
        </div>

        <div className="flex gap-8">
          {/* Filter Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FilterSidebar isOpen={true} onClose={() => {}} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>

            {/* Products Grid */}
            <ProductGrid />
          </div>
        </div>

        {/* Mobile Filter Sidebar */}
        <FilterSidebar 
          isOpen={isFilterOpen} 
          onClose={() => setIsFilterOpen(false)} 
        />
      </div>
    </div>
  );
};
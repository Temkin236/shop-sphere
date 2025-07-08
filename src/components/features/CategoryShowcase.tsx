import React from 'react';
import { ArrowRight, Smartphone, Shirt, Home, Sparkles, Coffee } from 'lucide-react';
import { useStore } from '../../store/useStore';

const categoryImages = {
  electronics: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
  clothing: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
  home: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  beauty: 'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
  food: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const categoryIcons = {
  electronics: Smartphone,
  clothing: Shirt,
  home: Home,
  beauty: Sparkles,
  food: Coffee,
};

export const CategoryShowcase: React.FC = () => {
  const { setFilters } = useStore();

  const handleCategoryClick = (categoryId: string) => {
    setFilters({ category: categoryId });
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      description: 'Latest tech & gadgets',
      image: categoryImages.electronics,
      gradient: 'from-blue-500 to-purple-600',
      count: '15K+ Products'
    },
    {
      id: 'clothing',
      name: 'Fashion',
      description: 'Trendy styles & brands',
      image: categoryImages.clothing,
      gradient: 'from-pink-500 to-rose-600',
      count: '25K+ Products'
    },
    {
      id: 'home',
      name: 'Home & Living',
      description: 'Beautiful home essentials',
      image: categoryImages.home,
      gradient: 'from-green-500 to-teal-600',
      count: '12K+ Products'
    },
    {
      id: 'beauty',
      name: 'Beauty & Care',
      description: 'Premium skincare & cosmetics',
      image: categoryImages.beauty,
      gradient: 'from-purple-500 to-pink-600',
      count: '8K+ Products'
    },
    {
      id: 'food',
      name: 'Food & Beverage',
      description: 'Gourmet food & drinks',
      image: categoryImages.food,
      gradient: 'from-orange-500 to-red-600',
      count: '5K+ Products'
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Shop by
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Category
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collections and discover exactly what you're looking for
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 mb-20">
          {categories.map((category, index) => {
            const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons];
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-4 hover:rotate-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm rounded-2xl p-3 group-hover:bg-white/30 transition-all duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>

                  {/* Product Count */}
                  <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 group-hover:bg-white/30 transition-all duration-300">
                    <span className="text-white text-xs font-bold">{category.count}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200 mb-4 opacity-90">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm font-bold group-hover:text-yellow-300 transition-colors duration-300">
                    Shop Now
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Shipping</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Free shipping worldwide on orders over $50. Fast and reliable delivery to your doorstep.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Guarantee</h3>
            <p className="text-gray-600 text-lg leading-relaxed">30-day money-back guarantee on all products. Your satisfaction is our top priority.</p>
          </div>

          <div className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
            <p className="text-gray-600 text-lg leading-relaxed">Round-the-clock customer service. We're here to help whenever you need assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
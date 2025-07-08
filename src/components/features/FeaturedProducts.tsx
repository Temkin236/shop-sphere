import React from 'react';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';
import { ProductCard } from '../products/ProductCard';
import { mockProducts } from '../../data/mockData';

export const FeaturedProducts: React.FC = () => {
  // Get featured products (highest rated and in stock)
  const featuredProducts = mockProducts
    .filter(product => product.inStock && product.rating >= 4.6)
    .slice(0, 8);

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 font-semibold mb-6">
            <TrendingUp className="h-4 w-4 mr-2" />
            Trending Now
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured
            <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium products that our customers love most
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            onClick={() => {
              const productsSection = document.getElementById('products-section');
              if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            View All Products
            <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 lg:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              50K+
            </div>
            <div className="text-gray-600 font-medium">Products Available</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              100K+
            </div>
            <div className="text-gray-600 font-medium">Happy Customers</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-600 font-medium">Top Brands</div>
          </div>
          
          <div className="text-center">
            <div className="flex items-center justify-center text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
              4.9
              <Star className="h-8 w-8 text-yellow-400 fill-current ml-2" />
            </div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};
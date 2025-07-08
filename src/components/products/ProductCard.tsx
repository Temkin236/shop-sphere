import React from 'react';
import { Star, ShoppingCart, Heart, Eye, Zap } from 'lucide-react';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setSelectedProduct, toggleProductModal } = useStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleViewProduct = () => {
    setSelectedProduct(product);
    toggleProductModal();
  };

  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {discountPercentage > 0 && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              -{discountPercentage}%
            </div>
          )}
          {product.rating >= 4.8 && (
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
              <Zap className="h-3 w-3 mr-1" />
              Bestseller
            </div>
          )}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold">
            Out of Stock
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button
              onClick={handleViewProduct}
              className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-xl hover:shadow-2xl transform hover:scale-110"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-xl hover:shadow-2xl transform hover:scale-110">
              <Heart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Brand */}
        <p className="text-xs text-purple-600 uppercase tracking-wider font-bold mb-2">
          {product.brand}
        </p>

        {/* Name */}
        <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 text-lg group-hover:text-purple-600 transition-colors duration-300 leading-tight">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 font-medium">
            {product.rating}
          </span>
          <span className="text-xs text-gray-400">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-3 mb-6">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-2xl font-bold transition-all duration-300 transform ${
            product.inStock
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl hover:scale-105'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-5 w-5" />
          <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
        </button>
      </div>

      {/* Floating Price Tag */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        ${product.price.toLocaleString()}
      </div>
    </div>
  );
};
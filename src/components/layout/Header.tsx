import React from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Bell } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const Header: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    toggleCart,
    toggleAuthModal,
    toggleMobileMenu,
    isMobileMenuOpen,
    getCartItemCount,
    user,
    logout
  } = useStore();

  const cartItemCount = getCartItemCount();

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 px-4">
        <p className="text-sm font-medium">
          🎉 Free shipping on orders over $50 | Use code: FREESHIP50
        </p>
      </div>

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  ShopSphere
                </h1>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-8 ml-8">
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Categories
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  Deals
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200">
                  About
                </a>
              </nav>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  placeholder="Search for products, brands, and more..."
                />
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Wishlist - Desktop */}
              <button className="hidden lg:flex p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200">
                <Heart className="h-6 w-6" />
              </button>

              {/* Notifications - Desktop */}
              <button className="hidden lg:flex p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                  3
                </span>
              </button>

              {/* User Menu */}
              <div className="relative">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <div className="hidden sm:block text-right">
                      <p className="text-sm font-medium text-gray-900">Hello, {user.name}</p>
                      <p className="text-xs text-gray-500">Welcome back!</p>
                    </div>
                    <button
                      onClick={logout}
                      className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg"
                    >
                      <User className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={toggleAuthModal}
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all duration-200"
                  >
                    <User className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Cart */}
              <button
                onClick={toggleCart}
                className="relative flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all duration-200"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-600 hover:bg-purple-50 hover:text-purple-600 rounded-xl transition-all duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-3 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent focus:bg-white transition-all duration-200"
                placeholder="Search products..."
              />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-medium">
                Home
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-medium">
                Categories
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-medium">
                Deals
              </a>
              <a href="#" className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200 font-medium">
                About
              </a>
              <div className="border-t border-gray-200 pt-4">
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200">
                  <Heart className="h-5 w-5 mr-3" />
                  Wishlist
                </a>
                <a href="#" className="flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-200">
                  <Bell className="h-5 w-5 mr-3" />
                  Notifications
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
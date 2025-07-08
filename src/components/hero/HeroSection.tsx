import React from 'react';
import { ArrowRight, ShoppingBag, Star, Users, Truck, Shield, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%239C92AC&quot; fill-opacity=&quot;0.05&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;1&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8 lg:space-y-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
              <Star className="h-4 w-4 mr-2 text-yellow-400 fill-current" />
              Trusted by 100,000+ customers worldwide
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                Shop the
                <span className="block bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Future
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-light">
                  of Commerce
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                Discover premium products from world-class brands. Experience shopping reimagined with cutting-edge technology and unmatched service.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Start Shopping
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">50K+</div>
                <div className="text-gray-400 text-sm lg:text-base">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">100K+</div>
                <div className="text-gray-400 text-sm lg:text-base">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">4.9★</div>
                <div className="text-gray-400 text-sm lg:text-base">Rating</div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center space-x-2 text-gray-300">
                <Truck className="h-5 w-5 text-green-400" />
                <span className="text-sm lg:text-base">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="text-sm lg:text-base">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="text-sm lg:text-base">Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className="relative lg:h-[600px]">
            {/* Main Featured Product */}
            <div className="absolute top-0 right-0 lg:right-10 w-64 lg:w-80 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="iPhone 15 Pro"
                  className="w-full h-48 lg:h-56 object-cover rounded-2xl mb-4"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  -8%
                </div>
              </div>
              <h3 className="text-white font-bold text-lg lg:text-xl mb-2">iPhone 15 Pro Max</h3>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-white">$1,199</span>
                  <span className="text-gray-400 line-through ml-2">$1,299</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm ml-1">4.9</span>
                </div>
              </div>
            </div>

            {/* Secondary Products */}
            <div className="absolute top-32 lg:top-40 left-0 w-56 lg:w-64 bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:-rotate-1">
              <img
                src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sony Headphones"
                className="w-full h-32 lg:h-40 object-cover rounded-xl mb-3"
              />
              <h3 className="text-white font-semibold text-base lg:text-lg">Sony WH-1000XM5</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-white">$399</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-sm ml-1">4.7</span>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 lg:bottom-10 right-4 lg:right-20 w-48 lg:w-56 bg-white/10 backdrop-blur-lg rounded-3xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-2 hover:rotate-2">
              <img
                src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Nike Shoes"
                className="w-full h-28 lg:h-32 object-cover rounded-xl mb-3"
              />
              <h3 className="text-white font-semibold text-sm lg:text-base">Air Jordan 1 Retro</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-lg font-bold text-white">$170</span>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-white text-sm ml-1">4.6</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
              Free Shipping!
            </div>
            
            <div className="absolute bottom-20 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
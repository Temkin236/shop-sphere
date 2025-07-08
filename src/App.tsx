import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { FeaturedProducts } from './components/features/FeaturedProducts';
import { CategoryShowcase } from './components/features/CategoryShowcase';
import { ProductsPage } from './pages/ProductsPage';
import { CartSidebar } from './components/cart/CartSidebar';
import { ProductModal } from './components/modals/ProductModal';
import { AuthModal } from './components/modals/AuthModal';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CategoryShowcase />
        <ProductsPage />
      </main>

      <Footer />

      {/* Modals and Sidebars */}
      <CartSidebar />
      <ProductModal />
      <AuthModal />
    </div>
  );
}

export default App;
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product, CartItem, User, FilterState } from '../types';

interface StoreState {
  // Cart state
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  getCartTotal: () => number;
  getCartItemCount: () => number;

  // User state
  user: User | null;
  isAuthModalOpen: boolean;
  login: (user: User) => void;
  logout: () => void;
  toggleAuthModal: () => void;

  // Product state
  selectedProduct: Product | null;
  isProductModalOpen: boolean;
  setSelectedProduct: (product: Product | null) => void;
  toggleProductModal: () => void;

  // Filter state
  filters: FilterState;
  searchQuery: string;
  setFilters: (filters: Partial<FilterState>) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;

  // UI state
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const initialFilters: FilterState = {
  category: 'all',
  priceRange: [0, 1000],
  rating: 0,
  inStock: false,
  sortBy: 'name',
  sortOrder: 'asc',
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // Cart state
      cartItems: [],
      isCartOpen: false,
      addToCart: (product, quantity = 1) => {
        const { cartItems } = get();
        const existingItem = cartItems.find(item => item.product.id === product.id);
        
        if (existingItem) {
          set({
            cartItems: cartItems.map(item =>
              item.product.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            cartItems: [...cartItems, { product, quantity }],
          });
        }
      },
      removeFromCart: (productId) => {
        set({
          cartItems: get().cartItems.filter(item => item.product.id !== productId),
        });
      },
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        
        set({
          cartItems: get().cartItems.map(item =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        });
      },
      clearCart: () => set({ cartItems: [] }),
      toggleCart: () => set({ isCartOpen: !get().isCartOpen }),
      getCartTotal: () => {
        return get().cartItems.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        );
      },
      getCartItemCount: () => {
        return get().cartItems.reduce((count, item) => count + item.quantity, 0);
      },

      // User state
      user: null,
      isAuthModalOpen: false,
      login: (user) => set({ user, isAuthModalOpen: false }),
      logout: () => set({ user: null }),
      toggleAuthModal: () => set({ isAuthModalOpen: !get().isAuthModalOpen }),

      // Product state
      selectedProduct: null,
      isProductModalOpen: false,
      setSelectedProduct: (product) => set({ selectedProduct: product }),
      toggleProductModal: () => set({ isProductModalOpen: !get().isProductModalOpen }),

      // Filter state
      filters: initialFilters,
      searchQuery: '',
      setFilters: (newFilters) => set({ filters: { ...get().filters, ...newFilters } }),
      setSearchQuery: (query) => set({ searchQuery: query }),
      resetFilters: () => set({ filters: initialFilters, searchQuery: '' }),

      // UI state
      isMobileMenuOpen: false,
      toggleMobileMenu: () => set({ isMobileMenuOpen: !get().isMobileMenuOpen }),
    }),
    {
      name: 'shopsphere-store',
      partialize: (state) => ({
        cartItems: state.cartItems,
        user: state.user,
      }),
    }
  )
);
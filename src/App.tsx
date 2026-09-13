import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, TabType, CartItem, FilterOptions } from './types';
import { TopAppBar, BottomNavBar, FloatingFilterFab } from './components/Navigation';
import { HomeLookbook } from './components/HomeLookbook';
import { ShopCatalog } from './components/ShopCatalog';
import { ProductDetail } from './components/ProductDetail';
import { WishlistView } from './components/WishlistView';
import { ProfileView } from './components/ProfileView';
import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { FilterDrawer } from './components/FilterDrawer';
import { SizeGuideModal } from './components/SizeGuideModal';
import { MenuDrawer } from './components/MenuDrawer';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  // Navigation & View State
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Drawers & Modals State
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  // Notification Banner
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 2800);
  };

  // Initial Wishlist populated with the 4 exact products from Screen 1
  const [wishlistIds, setWishlistIds] = useState<Set<string>>(
    new Set(['sculpted-silk-gown', 'archive-clutch', 'structured-blazer', 'lumiere-trench'])
  );

  // Cart State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      productId: 'fluid-silk-slip-dress',
      name: 'Fluid Silk Slip Dress',
      price: 890,
      formattedPrice: '$890.00',
      size: 'S',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBPeOLVpYX8AArLWueEhfJVXNpbQaz7kstoCrEOxqvSOtHitciOf7rh0XTkmGBfng81LbBwyNI8nN6Uwjeigmj54y6GXi7lVrideJOLvJooqBZC8YT6oOzO5KfxGa0IlW3mL_sKfrR-lvZwvaiDEJDWDVNxvm-i3u4sTWnARr31MgbskTWV580j6jkuSF4sfoVgHt2w7pyK3gBg5mOwinrDZYriuNtOI3J3N-1_Gnk2qZ3v07OWrSdrGFvceJeL6SPVjAIau24uRzw',
      quantity: 1,
    },
  ]);

  // Filters State
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'ALL',
    size: 'ALL',
    color: 'MONO',
    fabric: 'ALL',
  });

  // Toggle wishlist item
  const handleToggleWishlist = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) {
        next.delete(product.id);
        showToast(`Removed "${product.name}" from Wishlist`);
      } else {
        next.add(product.id);
        showToast(`Added "${product.name}" to Wishlist`);
      }
      return next;
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    setWishlistIds((prev) => {
      const next = new Set(prev);
      next.delete(productId);
      return next;
    });
    if (prod) {
      showToast(`Removed "${prod.name}" from Wishlist`);
    }
  };

  // Add to Bag
  const handleAddToCart = (product: Product, size: string = 'S') => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.productId === product.id && item.size === size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
            productId: product.id,
            name: product.name,
            price: product.price,
            formattedPrice: product.formattedPrice,
            size: size,
            image: product.heroImage,
            quantity: 1,
          },
        ];
      }
    });
    showToast(`Added "${product.name}" (${size}) to Curated Bag`);
  };

  // Move from Wishlist to Bag
  const handleMoveToBag = (product: Product) => {
    handleAddToCart(product, product.sizes[0] || 'S');
    handleRemoveFromWishlist(product.id);
    setIsBagOpen(true);
  };

  const handleUpdateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveCartItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setIsBagOpen(false);
    setCheckoutComplete(true);
    setCartItems([]);
  };

  // Filter products for Shop catalog
  const filteredProducts = PRODUCTS.filter((product) => {
    if (filters.category !== 'ALL' && product.category !== filters.category) {
      return false;
    }
    if (filters.color !== 'ALL' && product.color !== filters.color) {
      return false;
    }
    if (filters.fabric !== 'ALL' && product.fabric !== filters.fabric) {
      return false;
    }
    if (filters.size !== 'ALL' && !product.sizes.includes(filters.size)) {
      return false;
    }
    return true;
  });

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.has(p.id));
  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Default featured product
  const featuredProduct = PRODUCTS.find((p) => p.id === 'fluid-silk-slip-dress') || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-[#1b1b1b] flex flex-col font-body selection:bg-black selection:text-white">
      {/* Top Fixed App Bar */}
      <TopAppBar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenCart={() => setIsBagOpen(true)}
        cartCount={totalCartCount}
        onLogoClick={() => {
          setActiveProduct(null);
          setCurrentTab('home');
        }}
        currentTab={activeProduct ? 'shop' : currentTab}
        onNavigateTab={(tab) => {
          setActiveProduct(null);
          setCurrentTab(tab);
        }}
        wishlistCount={wishlistIds.size}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeProduct ? (
          <ProductDetail
            product={activeProduct}
            onBack={() => setActiveProduct(null)}
            isWishlisted={wishlistIds.has(activeProduct.id)}
            onToggleWishlist={handleToggleWishlist}
            onAddToCart={handleAddToCart}
            onSelectProduct={(p) => setActiveProduct(p)}
            onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          />
        ) : currentTab === 'home' ? (
          <HomeLookbook
            onNavigateToShop={(cat) => {
              if (cat) {
                setFilters((prev) => ({ ...prev, category: cat }));
              }
              setCurrentTab('shop');
            }}
            onSelectProduct={(p) => setActiveProduct(p)}
            featuredProduct={featuredProduct}
          />
        ) : currentTab === 'shop' ? (
          <ShopCatalog
            products={filteredProducts}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
            onSelectProduct={(p) => setActiveProduct(p)}
            filters={filters}
            onUpdateFilters={(f) => setFilters((prev) => ({ ...prev, ...f }))}
            onOpenFullFilter={() => setIsFilterOpen(true)}
          />
        ) : currentTab === 'wishlist' ? (
          <WishlistView
            wishlistProducts={wishlistProducts}
            onRemoveFromWishlist={handleRemoveFromWishlist}
            onMoveToBag={handleMoveToBag}
            onSelectProduct={(p) => setActiveProduct(p)}
            onExploreCollections={() => {
              setActiveProduct(null);
              setCurrentTab('shop');
            }}
          />
        ) : (
          <ProfileView />
        )}
      </main>

      {/* Floating Discrete Editorial Switcher (Instant preview between the 4 screens) */}
      <div
        id="editorial-screen-switcher"
        className="fixed bottom-22 md:bottom-24 left-6 z-30 bg-white/95 backdrop-blur-md border border-black/10 shadow-lg px-2.5 py-2 flex items-center space-x-1.5 transition-all"
      >
        <span className="font-label text-[9px] uppercase tracking-[0.2em] text-[#777777] hidden sm:inline mr-1">
          Views:
        </span>
        <button
          id="switcher-btn-lookbook"
          onClick={() => {
            setActiveProduct(null);
            setCurrentTab('home');
          }}
          className={`px-2.5 py-1 font-label text-[10px] uppercase tracking-wider transition-colors ${
            currentTab === 'home' && !activeProduct
              ? 'bg-black text-white font-semibold'
              : 'text-[#474747] hover:text-black'
          }`}
        >
          1. Lookbook
        </button>
        <button
          id="switcher-btn-shop"
          onClick={() => {
            setActiveProduct(null);
            setCurrentTab('shop');
          }}
          className={`px-2.5 py-1 font-label text-[10px] uppercase tracking-wider transition-colors ${
            currentTab === 'shop' && !activeProduct
              ? 'bg-black text-white font-semibold'
              : 'text-[#474747] hover:text-black'
          }`}
        >
          2. Shop
        </button>
        <button
          id="switcher-btn-detail"
          onClick={() => {
            setActiveProduct(featuredProduct);
          }}
          className={`px-2.5 py-1 font-label text-[10px] uppercase tracking-wider transition-colors ${
            activeProduct?.id === 'fluid-silk-slip-dress'
              ? 'bg-black text-white font-semibold'
              : 'text-[#474747] hover:text-black'
          }`}
        >
          3. Detail
        </button>
        <button
          id="switcher-btn-wishlist"
          onClick={() => {
            setActiveProduct(null);
            setCurrentTab('wishlist');
          }}
          className={`px-2.5 py-1 font-label text-[10px] uppercase tracking-wider transition-colors ${
            currentTab === 'wishlist' && !activeProduct
              ? 'bg-black text-white font-semibold'
              : 'text-[#474747] hover:text-black'
          }`}
        >
          4. Wishlist ({wishlistIds.size})
        </button>
      </div>

      {/* Floating Filter Button (always visible on Shop and Wishlist views) */}
      {!activeProduct && (currentTab === 'shop' || currentTab === 'wishlist' || currentTab === 'home') && (
        <FloatingFilterFab onClick={() => setIsFilterOpen(true)} />
      )}

      {/* Fixed Bottom Navigation Bar */}
      <BottomNavBar
        currentTab={activeProduct ? 'shop' : currentTab}
        onTabChange={(tab) => {
          setActiveProduct(null);
          setCurrentTab(tab);
        }}
        wishlistCount={wishlistIds.size}
      />

      {/* Slide-out Drawers & Modals */}
      <ShoppingBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckout}
      />

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onApplyFilters={(f) => setFilters(f)}
        onResetFilters={() =>
          setFilters({ category: 'ALL', size: 'ALL', color: 'ALL', fabric: 'ALL' })
        }
      />

      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />

      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={(tab, cat) => {
          setActiveProduct(null);
          if (cat) {
            setFilters((prev) => ({ ...prev, category: cat }));
          }
          setCurrentTab(tab);
        }}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          id="toast-notification"
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-6 py-3.5 shadow-2xl flex items-center space-x-3 text-xs font-label uppercase tracking-widest border border-white/10 animate-fade-in"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 text-white/60 hover:text-white">
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Checkout Success Modal */}
      {checkoutComplete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white max-w-md w-full p-8 md:p-10 border border-black/10 shadow-2xl text-center space-y-6 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-black mx-auto stroke-[1.2]" />
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#777777] font-semibold">
                Acquisition Confirmed
              </p>
              <h3 className="font-headline text-3xl font-light mt-1">Merci, Madame</h3>
            </div>
            <p className="font-body text-xs text-[#474747] leading-relaxed">
              Your bespoke curated order № LUM-9481 has been received by our atelier. White-glove
              insured packaging with hand-stitched archival dust covers is currently underway.
            </p>
            <div className="border-t border-b border-black/[0.08] py-3 text-[11px] font-mono text-[#777777]">
              Tracking code dispatched to client records
            </div>
            <button
              onClick={() => setCheckoutComplete(false)}
              className="w-full bg-black text-white py-4 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Return to Lookbook
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Menu, ShoppingBag, Home, Store, Heart, User, SlidersHorizontal } from 'lucide-react';
import { TabType } from '../types';

interface NavigationProps {
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  onOpenFilter: () => void;
  showFab?: boolean;
}

export const TopAppBar: React.FC<{
  onOpenMenu: () => void;
  onOpenCart: () => void;
  cartCount: number;
  onLogoClick: () => void;
  currentTab?: TabType;
  onNavigateTab?: (tab: TabType) => void;
  wishlistCount?: number;
}> = ({ onOpenMenu, onOpenCart, cartCount, onLogoClick, currentTab, onNavigateTab, wishlistCount = 0 }) => {
  return (
    <nav
      id="top-app-bar"
      className="fixed top-0 left-0 right-0 z-40 h-16 md:h-20 glass-nav border-b border-black/[0.05] transition-all duration-300"
    >
      <div className="max-w-screen-xl mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button
            id="nav-menu-button"
            onClick={onOpenMenu}
            aria-label="Open Navigation Menu"
            className="p-2 -ml-2 text-[#1b1b1b] hover:opacity-60 transition-opacity focus:outline-none"
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Desktop Web Nav Links */}
          {onNavigateTab && (
            <div className="hidden lg:flex items-center space-x-8">
              <button
                id="desktop-nav-home"
                onClick={() => onNavigateTab('home')}
                className={`font-label text-xs uppercase tracking-[0.2em] transition-colors ${
                  currentTab === 'home'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'text-[#777777] hover:text-black'
                }`}
              >
                Lookbook
              </button>
              <button
                id="desktop-nav-shop"
                onClick={() => onNavigateTab('shop')}
                className={`font-label text-xs uppercase tracking-[0.2em] transition-colors ${
                  currentTab === 'shop'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'text-[#777777] hover:text-black'
                }`}
              >
                Collection 004
              </button>
              <button
                id="desktop-nav-wishlist"
                onClick={() => onNavigateTab('wishlist')}
                className={`font-label text-xs uppercase tracking-[0.2em] transition-colors relative ${
                  currentTab === 'wishlist'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'text-[#777777] hover:text-black'
                }`}
              >
                <span>Wishlist</span>
                {wishlistCount > 0 && (
                  <span className="ml-1.5 font-mono text-[10px] text-[#777777]">
                    ({wishlistCount})
                  </span>
                )}
              </button>
              <button
                id="desktop-nav-profile"
                onClick={() => onNavigateTab('profile')}
                className={`font-label text-xs uppercase tracking-[0.2em] transition-colors ${
                  currentTab === 'profile'
                    ? 'text-black font-semibold border-b border-black pb-0.5'
                    : 'text-[#777777] hover:text-black'
                }`}
              >
                Private Salon
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center text-center">
          <button
            id="nav-brand-logo"
            onClick={onLogoClick}
            className="font-headline text-xl md:text-2xl tracking-[0.28em] font-bold text-[#000000] hover:opacity-80 transition-opacity uppercase"
          >
            LUMIERE
          </button>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          {onNavigateTab && (
            <button
              id="header-wishlist-quick"
              onClick={() => onNavigateTab('wishlist')}
              aria-label="View Wishlist"
              className="hidden sm:flex items-center p-2 text-[#1b1b1b] hover:opacity-60 transition-opacity"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlistCount > 0 && (
                <span className="ml-1 text-xs font-mono">{wishlistCount}</span>
              )}
            </button>
          )}

          <button
            id="nav-cart-button"
            onClick={onOpenCart}
            aria-label="Open Shopping Bag"
            className="p-2 -mr-2 relative text-[#1b1b1b] hover:opacity-60 transition-opacity focus:outline-none"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span
                id="cart-badge-count"
                className="absolute top-1 right-0 w-4 h-4 bg-black text-white text-[9px] font-mono flex items-center justify-center rounded-full"
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export const BottomNavBar: React.FC<{
  currentTab: TabType;
  onTabChange: (tab: TabType) => void;
  wishlistCount: number;
}> = ({ currentTab, onTabChange, wishlistCount }) => {
  return (
    <nav
      id="bottom-nav-bar"
      className="fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-black/[0.06] h-18 md:h-20 transition-all duration-300"
    >
      <div className="max-w-md mx-auto h-full px-6 flex items-center justify-between">
        <button
          id="nav-tab-home"
          onClick={() => onTabChange('home')}
          className={`flex flex-col items-center justify-center py-2 flex-1 transition-all ${
            currentTab === 'home'
              ? 'text-[#000000] border-t-2 border-black -mt-[2px]'
              : 'text-[#777777] hover:text-[#000000] opacity-70 hover:opacity-100'
          }`}
        >
          <Home className={`w-5 h-5 ${currentTab === 'home' ? 'stroke-[2]' : 'stroke-[1.3]'}`} />
          <span className="font-label text-[10px] mt-1 tracking-wider uppercase font-medium">Home</span>
        </button>

        <button
          id="nav-tab-shop"
          onClick={() => onTabChange('shop')}
          className={`flex flex-col items-center justify-center py-2 flex-1 transition-all ${
            currentTab === 'shop'
              ? 'text-[#000000] border-t-2 border-black -mt-[2px]'
              : 'text-[#777777] hover:text-[#000000] opacity-70 hover:opacity-100'
          }`}
        >
          <Store className={`w-5 h-5 ${currentTab === 'shop' ? 'stroke-[2]' : 'stroke-[1.3]'}`} />
          <span className="font-label text-[10px] mt-1 tracking-wider uppercase font-medium">Shop</span>
        </button>

        <button
          id="nav-tab-wishlist"
          onClick={() => onTabChange('wishlist')}
          className={`flex flex-col items-center justify-center py-2 flex-1 relative transition-all ${
            currentTab === 'wishlist'
              ? 'text-[#000000] border-t-2 border-black -mt-[2px]'
              : 'text-[#777777] hover:text-[#000000] opacity-70 hover:opacity-100'
          }`}
        >
          <div className="relative">
            <Heart
              className={`w-5 h-5 ${
                currentTab === 'wishlist' ? 'fill-black stroke-black stroke-[2]' : 'stroke-[1.3]'
              }`}
            />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-2.5 w-3.5 h-3.5 bg-black text-white text-[8px] font-mono flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </div>
          <span className="font-label text-[10px] mt-1 tracking-wider uppercase font-medium">Wishlist</span>
        </button>

        <button
          id="nav-tab-profile"
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center justify-center py-2 flex-1 transition-all ${
            currentTab === 'profile'
              ? 'text-[#000000] border-t-2 border-black -mt-[2px]'
              : 'text-[#777777] hover:text-[#000000] opacity-70 hover:opacity-100'
          }`}
        >
          <User className={`w-5 h-5 ${currentTab === 'profile' ? 'stroke-[2]' : 'stroke-[1.3]'}`} />
          <span className="font-label text-[10px] mt-1 tracking-wider uppercase font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
};

export const FloatingFilterFab: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <div id="filter-fab-container" className="fixed bottom-22 md:bottom-24 right-6 z-30">
      <button
        id="filter-fab-button"
        onClick={onClick}
        aria-label="Filter Collection"
        className="w-13 h-13 md:w-14 md:h-14 bg-black text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 group"
      >
        <SlidersHorizontal className="w-5 h-5 stroke-[1.5] group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  );
};

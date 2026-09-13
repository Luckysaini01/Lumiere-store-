import React from 'react';
import { X, ArrowRight, Compass, Sparkles, MapPin, Mail, Phone } from 'lucide-react';
import { TabType } from '../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: TabType, category?: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  const links = [
    { label: 'The Winter Anthology', tab: 'home' as TabType },
    { label: 'Collection 004 / L’Essence', tab: 'shop' as TabType },
    { label: 'Dresses & Gowns', tab: 'shop' as TabType, category: 'dresses' },
    { label: 'Architectural Outerwear', tab: 'shop' as TabType, category: 'outerwear' },
    { label: 'Tailoring & Separates', tab: 'shop' as TabType, category: 'tailoring' },
    { label: 'Artisanal Accessories', tab: 'shop' as TabType, category: 'accessories' },
    { label: 'Curated Wishlist', tab: 'wishlist' as TabType },
    { label: 'Private Client Salon', tab: 'profile' as TabType },
  ];

  return (
    <div id="menu-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div
          id="menu-drawer-panel"
          className="w-screen max-w-md bg-[#f9f9f9] shadow-2xl flex flex-col justify-between border-r border-black/[0.08] animate-slide-in-left"
        >
          <div className="p-8 border-b border-black/[0.08] flex items-center justify-between">
            <h2 className="font-headline text-2xl tracking-[0.25em] font-bold text-black uppercase">
              LUMIERE
            </h2>
            <button
              id="close-menu-drawer-button"
              onClick={onClose}
              className="p-2 -mr-2 text-black hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            <p className="font-label text-[10px] uppercase tracking-[0.3em] text-[#777777] font-semibold">
              Index / Navigation
            </p>
            <nav className="space-y-4">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    onNavigate(link.tab, link.category);
                    onClose();
                  }}
                  className="w-full text-left flex items-center justify-between py-2 group text-black hover:opacity-70 transition-opacity"
                >
                  <span className="font-headline text-xl md:text-2xl font-light">{link.label}</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5] text-neutral-400 transform group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </nav>

            <div className="pt-8 border-t border-black/[0.08] space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#777777] font-semibold font-label">
                <MapPin className="w-3.5 h-3.5 text-black" />
                <span>Global Boutiques</span>
              </div>
              <p className="font-body text-xs text-[#474747] leading-relaxed">
                Via Montenapoleone 8, Milan <br />
                Rue Saint-Honoré 242, Paris <br />
                Ginza 6-Chōme, Tokyo
              </p>
            </div>
          </div>

          <div className="p-8 bg-white border-t border-black/[0.08] space-y-2">
            <p className="font-label text-[10px] uppercase tracking-widest text-[#777777]">
              Client Concierge
            </p>
            <p className="font-body text-xs text-black">concierge@lumiere-couture.com</p>
            <p className="font-mono text-xs text-[#777777]">+39 02 8847 900</p>
          </div>
        </div>
      </div>
    </div>
  );
};

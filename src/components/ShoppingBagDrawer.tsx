import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface ShoppingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export const ShoppingBagDrawer: React.FC<ShoppingBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div id="shopping-bag-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden">
      {/* Dim Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          id="shopping-bag-drawer-panel"
          className="w-screen max-w-md bg-[#f9f9f9] shadow-2xl flex flex-col justify-between border-l border-black/[0.08] animate-slide-in-right"
        >
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-black/[0.08] flex items-center justify-between">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold">
                Curated Selection
              </p>
              <h2 className="font-headline text-2xl md:text-3xl font-light text-black">
                Shopping Bag
              </h2>
            </div>
            <button
              id="close-bag-drawer-button"
              onClick={onClose}
              className="p-2 -mr-2 text-black hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Bag Items List */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <p className="font-headline text-xl italic text-neutral-600">
                  Your bag holds no pieces yet.
                </p>
                <p className="font-body text-xs text-[#777777] max-w-xs">
                  Discover curated silhouettes from Collection 004 or explore our runway archives.
                </p>
                <button
                  id="empty-bag-continue-button"
                  onClick={onClose}
                  className="mt-4 bg-black text-white px-8 py-3.5 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  Continue Browsing
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  id={`bag-item-${item.id}`}
                  className="flex gap-4 pb-6 border-b border-black/[0.06] group"
                >
                  <div className="w-22 h-26 flex-shrink-0 bg-[#eeeeee] overflow-hidden shadow-2xs">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-headline text-base font-normal text-black line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          id={`bag-remove-${item.id}`}
                          onClick={() => onRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="text-[#777777] hover:text-black transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="font-label text-[11px] uppercase tracking-wider text-[#777777] mt-0.5">
                        Size: <span className="font-semibold text-black">{item.size}</span>
                      </p>
                      <p className="font-body text-sm font-light text-black mt-1">
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center space-x-3 pt-2">
                      <button
                        id={`bag-decrease-${item.id}`}
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 border border-black/20 flex items-center justify-center text-xs hover:border-black transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs w-4 text-center">{item.quantity}</span>
                      <button
                        id={`bag-increase-${item.id}`}
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 border border-black/20 flex items-center justify-center text-xs hover:border-black transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 md:p-8 bg-white border-t border-black/[0.08] space-y-4">
              <div className="space-y-2 text-xs font-label">
                <div className="flex justify-between text-[#777777]">
                  <span>Subtotal</span>
                  <span className="text-black font-medium">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#777777]">
                  <span>Express White-Glove Delivery</span>
                  <span className="text-black uppercase tracking-wider font-medium">Complimentary</span>
                </div>
                <div className="flex justify-between text-base font-light text-black pt-3 border-t border-black/[0.06]">
                  <span className="font-headline text-lg">Total</span>
                  <span className="font-bold">${subtotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                id="checkout-button"
                onClick={onCheckout}
                className="w-full bg-black text-white py-5 px-6 font-label text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-2 hover:bg-neutral-800 transition-colors shadow-md active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </button>

              <div className="flex items-center justify-center space-x-1.5 text-[10px] text-[#777777] uppercase tracking-wider pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-black" />
                <span>Encrypted & Insured Concierge Dispatch</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

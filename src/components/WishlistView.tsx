import React from 'react';
import { X, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistViewProps {
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onMoveToBag: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onExploreCollections: () => void;
}

export const WishlistView: React.FC<WishlistViewProps> = ({
  wishlistProducts,
  onRemoveFromWishlist,
  onMoveToBag,
  onSelectProduct,
  onExploreCollections,
}) => {
  if (wishlistProducts.length === 0) {
    return (
      <main className="pt-32 pb-36 px-6 max-w-screen-xl mx-auto text-center animate-fade-in">
        <header className="mb-12">
          <p className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-[#777777] mb-4 font-medium">
            Curated Selection
          </p>
          <h2 className="font-headline text-5xl md:text-6xl italic leading-tight text-[#1b1b1b]">
            Wishlist
          </h2>
        </header>

        <div className="max-w-md mx-auto py-16 px-8 bg-white/70 border border-black/[0.06] shadow-xs space-y-6">
          <p className="font-headline text-xl italic text-[#474747]">
            Your personal sanctuary is currently unreserved.
          </p>
          <p className="font-body text-xs text-[#777777] leading-relaxed">
            Browse through our current anthology to preserve exclusive runway silhouettes, tailored
            separates, and artisanal leather pieces.
          </p>
          <button
            id="empty-wishlist-explore-button"
            onClick={onExploreCollections}
            className="bg-black text-white px-8 py-4 font-label text-xs uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors shadow-sm"
          >
            Explore Collections
          </button>
        </div>
      </main>
    );
  }

  // Get first 4 products for the authentic asymmetric layout
  const item1 = wishlistProducts[0];
  const item2 = wishlistProducts[1];
  const item3 = wishlistProducts[2];
  const item4 = wishlistProducts[3];
  const remainingItems = wishlistProducts.slice(4);

  return (
    <main id="wishlist-view" className="pt-24 pb-36 px-6 max-w-screen-xl mx-auto animate-fade-in">
      {/* Header Section */}
      <header className="mb-16 md:mb-20">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.2em] text-[#777777] mb-4 font-medium">
          Curated Selection
        </p>
        <h2 className="font-headline text-5xl md:text-6xl italic leading-tight text-[#1b1b1b]">
          Wishlist
        </h2>
      </header>

      {/* Wishlist Grid: Asymmetric Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
        {/* Product Item 1: Large Offset */}
        {item1 && (
          <div id={`wishlist-card-${item1.id}`} className="md:col-span-7 group">
            <div className="relative overflow-hidden bg-[#eeeeee] aspect-square mb-8 shadow-xs">
              <img
                src={item1.heroImage}
                alt={item1.name}
                onClick={() => onSelectProduct(item1)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 cursor-pointer"
              />
              <button
                id={`wishlist-remove-${item1.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromWishlist(item1.id);
                }}
                aria-label="Remove item"
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
              >
                <X className="w-4 h-4 text-black stroke-[1.5]" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div
                className="space-y-1 cursor-pointer"
                onClick={() => onSelectProduct(item1)}
              >
                <h3 className="font-headline text-2xl md:text-3xl font-light text-[#1b1b1b] group-hover:opacity-75 transition-opacity">
                  {item1.name}
                </h3>
                <p className="font-label text-sm uppercase tracking-widest text-[#777777]">
                  {item1.subtitle || item1.tag || "Autumn / Winter '24"}
                </p>
                <p className="text-lg mt-4 font-light text-[#1b1b1b]">{item1.formattedPrice}</p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-5 w-full sm:w-auto">
                <button
                  id={`wishlist-move-${item1.id}`}
                  onClick={() => onMoveToBag(item1)}
                  className="w-full sm:w-auto bg-black text-white px-8 py-4 font-label text-sm uppercase tracking-widest transition-colors hover:bg-neutral-800 shadow-sm"
                >
                  Move to Bag
                </button>
                <button
                  id={`wishlist-remove-btn-${item1.id}`}
                  onClick={() => onRemoveFromWishlist(item1.id)}
                  className="editorial-underline font-label text-[0.6875rem] uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Item 2: Smaller, Offset Right */}
        {item2 && (
          <div
            id={`wishlist-card-${item2.id}`}
            className="md:col-start-9 md:col-span-4 md:mt-12 group"
          >
            <div className="relative overflow-hidden bg-[#eeeeee] aspect-square mb-8 shadow-xs">
              <img
                src={item2.heroImage}
                alt={item2.name}
                onClick={() => onSelectProduct(item2)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 cursor-pointer"
              />
              <button
                id={`wishlist-remove-${item2.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromWishlist(item2.id);
                }}
                aria-label="Remove item"
                className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
              >
                <X className="w-4 h-4 text-black stroke-[1.5]" />
              </button>
            </div>
            <div className="space-y-4">
              <div
                className="cursor-pointer"
                onClick={() => onSelectProduct(item2)}
              >
                <h3 className="font-headline text-xl font-light text-[#1b1b1b] group-hover:opacity-75 transition-opacity">
                  {item2.name}
                </h3>
                <p className="text-md font-light text-[#474747] mt-1">{item2.formattedPrice}</p>
              </div>
              <button
                id={`wishlist-move-${item2.id}`}
                onClick={() => onMoveToBag(item2)}
                className="w-full border-b border-black/[0.2] py-4 text-left flex justify-between items-center group/btn hover:border-black transition-colors"
              >
                <span className="font-label text-sm uppercase tracking-widest text-black">
                  Move to Bag
                </span>
                <ArrowRight className="w-4 h-4 stroke-[1.5] transform group-hover/btn:translate-x-2 transition-transform text-black" />
              </button>
            </div>
          </div>
        )}

        {/* Product Item 3: Wide/Thin Layout */}
        {item3 && (
          <div
            id={`wishlist-card-${item3.id}`}
            className="md:col-span-5 md:mt-[-8rem] group"
          >
            <div className="relative overflow-hidden bg-[#eeeeee] aspect-[4/5] mb-8 shadow-xs">
              <img
                src={item3.heroImage}
                alt={item3.name}
                onClick={() => onSelectProduct(item3)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 cursor-pointer"
              />
              <button
                id={`wishlist-remove-${item3.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromWishlist(item3.id);
                }}
                aria-label="Remove item"
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
              >
                <X className="w-4 h-4 text-black stroke-[1.5]" />
              </button>
            </div>
            <div className="space-y-2">
              <div
                className="cursor-pointer"
                onClick={() => onSelectProduct(item3)}
              >
                <h3 className="font-headline text-2xl font-light text-[#1b1b1b] group-hover:opacity-75 transition-opacity">
                  {item3.name}
                </h3>
                <p className="text-lg font-light text-[#474747] mt-1">{item3.formattedPrice}</p>
              </div>
              <div className="pt-4 flex items-center gap-8">
                <button
                  id={`wishlist-add-${item3.id}`}
                  onClick={() => onMoveToBag(item3)}
                  className="editorial-underline font-label text-sm uppercase tracking-widest text-black hover:opacity-70 transition-opacity"
                >
                  Add to Bag
                </button>
                <button
                  id={`wishlist-remove-btn-${item3.id}`}
                  onClick={() => onRemoveFromWishlist(item3.id)}
                  className="text-[#777777] hover:text-black transition-colors font-label text-sm uppercase tracking-widest"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Item 4: High Contrast Module */}
        {item4 && (
          <div
            id={`wishlist-card-${item4.id}`}
            className="md:col-start-7 md:col-span-6 group"
          >
            <div className="relative overflow-hidden bg-[#eeeeee] aspect-square mb-8 shadow-xs">
              <img
                src={item4.heroImage}
                alt={item4.name}
                onClick={() => onSelectProduct(item4)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 cursor-pointer"
              />
              <button
                id={`wishlist-remove-${item4.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromWishlist(item4.id);
                }}
                aria-label="Remove item"
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
              >
                <X className="w-4 h-4 text-black stroke-[1.5]" />
              </button>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end border-t border-black/[0.08] pt-8 gap-6">
              <div
                className="cursor-pointer"
                onClick={() => onSelectProduct(item4)}
              >
                <h3 className="font-headline text-3xl font-light text-[#1b1b1b] group-hover:opacity-75 transition-opacity">
                  {item4.name}
                </h3>
                <p className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-[#777777] mt-2 font-medium">
                  {item4.tag || 'Limited Edition'}
                </p>
              </div>
              <div className="w-full sm:w-auto text-left sm:text-right">
                <p className="text-2xl font-light mb-4 text-[#1b1b1b]">{item4.formattedPrice}</p>
                <button
                  id={`wishlist-move-${item4.id}`}
                  onClick={() => onMoveToBag(item4)}
                  className="w-full sm:w-auto bg-black text-white px-10 py-5 font-label text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Move to Bag
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Any extra saved items */}
        {remainingItems.map((item) => (
          <div
            key={item.id}
            id={`wishlist-card-${item.id}`}
            className="md:col-span-6 group"
          >
            <div className="relative overflow-hidden bg-[#eeeeee] aspect-[4/5] mb-8 shadow-xs">
              <img
                src={item.heroImage}
                alt={item.name}
                onClick={() => onSelectProduct(item)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 cursor-pointer"
              />
              <button
                id={`wishlist-remove-${item.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemoveFromWishlist(item.id);
                }}
                aria-label="Remove item"
                className="absolute top-6 right-6 p-3 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
              >
                <X className="w-4 h-4 text-black stroke-[1.5]" />
              </button>
            </div>
            <div className="flex justify-between items-start border-t border-black/[0.08] pt-6">
              <div
                className="space-y-1 cursor-pointer"
                onClick={() => onSelectProduct(item)}
              >
                <h3 className="font-headline text-2xl font-light text-[#1b1b1b]">{item.name}</h3>
                <p className="text-lg font-light text-[#474747]">{item.formattedPrice}</p>
              </div>
              <button
                id={`wishlist-move-${item.id}`}
                onClick={() => onMoveToBag(item)}
                className="bg-black text-white px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Move to Bag
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination / Footer Context */}
      <div className="mt-32 border-t border-black/[0.08] pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="font-label text-xs uppercase tracking-[0.3em] text-[#777777]">
          Viewing {wishlistProducts.length} of 12 items
        </p>
        <button
          id="load-more-saved-button"
          onClick={onExploreCollections}
          className="editorial-underline font-label text-sm uppercase tracking-widest py-2 text-black hover:opacity-75 transition-opacity"
        >
          Load More Saved Items
        </button>
      </div>
    </main>
  );
};

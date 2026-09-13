import React from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { Product, FilterOptions } from '../types';

interface ShopCatalogProps {
  products: Product[];
  wishlistIds: Set<string>;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
  filters: FilterOptions;
  onUpdateFilters: (filters: Partial<FilterOptions>) => void;
  onOpenFullFilter: () => void;
}

export const ShopCatalog: React.FC<ShopCatalogProps> = ({
  products,
  wishlistIds,
  onToggleWishlist,
  onSelectProduct,
  filters,
  onUpdateFilters,
  onOpenFullFilter,
}) => {
  return (
    <div id="shop-catalog-view" className="w-full pt-24 pb-36 max-w-screen-xl mx-auto px-6 animate-fade-in">
      {/* Editorial Header */}
      <section className="mb-16 md:mb-20">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.25rem] text-[#777777] mb-4 font-semibold">
          Collection 004 / L'Essence
        </p>
        <h2 className="font-headline text-5xl md:text-7xl max-w-2xl leading-[1.08] font-light text-[#1b1b1b]">
          Quiet Elegance in Monochrome.
        </h2>
      </section>

      {/* Asymmetrical Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 md:gap-y-28 md:gap-x-12">
        {products.map((item, idx) => {
          const isFavorited = wishlistIds.has(item.id);

          // Asymmetric column spans and margins mirroring the lookbook
          let colSpanClass = 'md:col-span-6';
          let mtClass = '';
          let aspectClass = 'aspect-[4/5]';

          if (idx === 0) {
            colSpanClass = 'md:col-span-7';
            aspectClass = 'aspect-[4/5]';
          } else if (idx === 1) {
            colSpanClass = 'md:col-span-5';
            mtClass = 'md:mt-32';
            aspectClass = 'aspect-square';
          } else if (idx === 2) {
            colSpanClass = 'md:col-span-4';
            aspectClass = 'aspect-[2/3]';
          } else if (idx === 3) {
            colSpanClass = 'md:col-span-8';
            mtClass = 'md:mt-16';
            aspectClass = 'aspect-[16/9]';
          } else if (idx === 4) {
            colSpanClass = 'md:col-span-5';
            aspectClass = 'aspect-square';
          } else if (idx === 5) {
            colSpanClass = 'md:col-span-7';
            aspectClass = 'aspect-[4/3]';
          }

          return (
            <div
              key={item.id}
              id={`shop-product-${item.id}`}
              className={`${colSpanClass} ${mtClass} group cursor-pointer`}
              onClick={() => onSelectProduct(item)}
            >
              <div className={`relative bg-[#ffffff] overflow-hidden shadow-xs ${aspectClass}`}>
                <img
                  src={item.heroImage}
                  alt={item.name}
                  className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-104 group-hover:grayscale-0"
                />
                <button
                  id={`wishlist-toggle-${item.id}`}
                  onClick={(e) => onToggleWishlist(item, e)}
                  aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
                  className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isFavorited ? 'fill-black stroke-black' : 'stroke-neutral-800'
                    }`}
                  />
                </button>
              </div>

              <div className="mt-8 flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-headline text-2xl font-light text-[#1b1b1b] group-hover:opacity-75 transition-opacity">
                    {item.name}
                  </h3>
                  <p className="font-label text-xs uppercase tracking-widest text-[#777777]">
                    {item.subtitle}
                  </p>
                </div>
                <span className="font-body text-lg font-light text-[#1b1b1b]">
                  {item.formattedPrice}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination / Load More */}
      <div className="mt-36 mb-24 flex flex-col items-center">
        <button
          id="discover-more-button"
          onClick={onOpenFullFilter}
          className="px-12 py-5 bg-black text-white font-label text-xs uppercase tracking-[0.3em] transition-all duration-300 hover:bg-neutral-800 active:scale-95 shadow-lg"
        >
          Discover More
        </button>
      </div>

      {/* Sticky Sleek Filter Menu Bar */}
      <div
        id="sticky-filter-bar"
        className="fixed bottom-18 md:bottom-20 left-0 w-full z-30 bg-[#f9f9f9]/95 backdrop-blur-xl border-t border-black/[0.08] px-6 py-4 flex items-center justify-between overflow-x-auto hide-scrollbar"
      >
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-6 md:space-x-10">
            {/* Size Dropdown Quick Toggle */}
            <div className="relative group">
              <button
                onClick={onOpenFullFilter}
                className="flex items-center space-x-2 text-left focus:outline-none"
              >
                <span className="font-label text-[0.6rem] uppercase tracking-widest text-[#777777]">
                  Size:
                </span>
                <span className="font-label text-xs font-semibold text-black uppercase">
                  {filters.size}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-600" />
              </button>
            </div>

            {/* Color Filter */}
            <div className="relative group">
              <button
                onClick={onOpenFullFilter}
                className="flex items-center space-x-2 text-left focus:outline-none"
              >
                <span className="font-label text-[0.6rem] uppercase tracking-widest text-[#777777]">
                  Color:
                </span>
                <span className="w-2.5 h-2.5 bg-black inline-block rounded-xs"></span>
                <span className="font-label text-xs font-semibold text-black uppercase">
                  {filters.color}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-600" />
              </button>
            </div>

            {/* Fabric Filter */}
            <div className="relative group">
              <button
                onClick={onOpenFullFilter}
                className="flex items-center space-x-2 text-left focus:outline-none"
              >
                <span className="font-label text-[0.6rem] uppercase tracking-widest text-[#777777]">
                  Fabric:
                </span>
                <span className="font-label text-xs font-semibold text-black uppercase">
                  {filters.fabric}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-600" />
              </button>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <p className="font-label text-[0.6875rem] uppercase tracking-[0.2rem] text-black font-semibold">
              {products.length} Items Found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

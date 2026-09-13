import React, { useState } from 'react';
import { Heart, ChevronDown, ArrowLeft, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenSizeGuide: () => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onSelectProduct,
  onOpenSizeGuide,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || product.sizes[0] || 'S');
  const [addedAnimation, setAddedAnimation] = useState<boolean>(false);

  // Suggested complete the look items
  const completeLookItems = PRODUCTS.filter((p) =>
    ['strappy-heel', 'vault-clutch', 'helix-earrings'].includes(p.id)
  );

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div id="product-detail-view" className="w-full pt-20 pb-36 max-w-7xl mx-auto px-6 animate-fade-in">
      {/* Back button and breadcrumbs */}
      <div className="py-6 flex items-center justify-between border-b border-black/[0.05] mb-12">
        <button
          id="back-to-catalog-button"
          onClick={onBack}
          className="flex items-center space-x-2 text-xs uppercase tracking-widest font-label text-neutral-600 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
          <span>Return to Collection</span>
        </button>

        <span className="font-label text-[10px] uppercase tracking-[0.25em] text-[#777777]">
          {product.tag || 'Curated Editorial'}
        </span>
      </div>

      {/* Editorial Layout: Product Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        {/* Product Gallery: Asymmetric Grid */}
        <div className="lg:col-span-7 space-y-12">
          {/* Main Hero Shot */}
          <div className="relative aspect-[3/4] overflow-hidden bg-[#eeeeee] shadow-sm">
            <img
              src={product.heroImage}
              alt={product.name}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* 2-Column Asymmetric Sub-gallery */}
          {product.gallery && product.gallery.length >= 2 && (
            <div className="grid grid-cols-2 gap-8">
              <div className="aspect-[4/5] overflow-hidden bg-[#eeeeee] shadow-xs">
                <img
                  src={product.gallery[0]}
                  alt={`${product.name} detail texture`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-[4/5] overflow-hidden bg-[#eeeeee] mt-12 shadow-xs">
                <img
                  src={product.gallery[1]}
                  alt={`${product.name} styling back`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          )}

          {/* Wide Landscape Editorial Scene */}
          {product.gallery && product.gallery.length >= 3 && (
            <div className="aspect-[16/9] overflow-hidden bg-[#eeeeee] shadow-xs">
              <img
                src={product.gallery[2]}
                alt={`${product.name} lifestyle`}
                className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          )}
        </div>

        {/* Product Information (Sticky on Desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 self-start flex flex-col space-y-10">
          <div>
            <div className="flex justify-between items-start mb-4">
              <p className="font-label text-xs tracking-[0.2em] text-[#777777] uppercase font-medium">
                {product.tag || 'Collection № 04'}
              </p>
              <button
                id="detail-wishlist-toggle"
                onClick={() => onToggleWishlist(product)}
                aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                className="p-2 -mr-2 text-[#1b1b1b] hover:opacity-60 transition-opacity"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    isWishlisted ? 'fill-black stroke-black' : 'stroke-neutral-800'
                  }`}
                />
              </button>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-light text-[#1b1b1b]">
              {product.name}
            </h2>
            <p className="font-label text-2xl tracking-tight text-[#474747] font-light">
              {product.formattedPrice}
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-body text-sm leading-relaxed text-[#474747] max-w-md font-light">
              {product.description}
            </p>

            <div className="pt-2 flex flex-col space-y-1">
              <div className="flex justify-between items-center py-3.5 border-b border-black/[0.08]">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#777777]">
                  Material
                </span>
                <span className="font-body text-sm italic text-black">{product.material}</span>
              </div>
              <div className="flex justify-between items-center py-3.5 border-b border-black/[0.08]">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[#777777]">
                  Origin
                </span>
                <span className="font-body text-sm text-black">{product.origin}</span>
              </div>
            </div>
          </div>

          {/* Size Selector */}
          <div className="space-y-4">
            <div className="flex justify-between items-end">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] text-[#1b1b1b] font-semibold">
                Select Size
              </label>
              <button
                id="size-guide-button"
                onClick={onOpenSizeGuide}
                className="font-label text-[10px] underline underline-offset-4 uppercase tracking-[0.15em] text-[#777777] hover:text-black transition-colors"
              >
                Size Guide
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  id={`size-btn-${size}`}
                  onClick={() => setSelectedSize(size)}
                  className={`py-4 text-xs font-label uppercase transition-all duration-200 border ${
                    selectedSize === size
                      ? 'bg-black text-white border-black shadow-sm font-semibold'
                      : 'bg-white text-black border-black/15 hover:border-black/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-3 pt-2">
            <button
              id="add-to-bag-cta"
              onClick={handleAdd}
              className={`w-full py-5 px-8 font-label text-xs uppercase tracking-[0.25em] transition-all duration-300 flex items-center justify-center space-x-2 ${
                addedAnimation
                  ? 'bg-neutral-800 text-white'
                  : 'bg-black text-white hover:bg-neutral-800 active:scale-98 shadow-md'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4 stroke-[2]" />
                  <span>Added to Curated Bag</span>
                </>
              ) : (
                <span>Add to Bag</span>
              )}
            </button>
            <p className="text-center font-label text-[10px] text-[#777777] tracking-wider pt-1">
              Free express shipping on all curated orders.
            </p>
          </div>

          {/* Accordion Details */}
          <div className="pt-8 space-y-4 border-t border-black/[0.08]">
            <details className="group cursor-pointer">
              <summary className="list-none flex justify-between items-center py-3 text-left focus:outline-none">
                <span className="font-label text-[11px] uppercase tracking-[0.2em] font-medium text-[#1b1b1b]">
                  Sustainability
                </span>
                <ChevronDown className="w-4 h-4 text-neutral-500 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="pb-4 font-body text-xs text-[#474747] leading-relaxed font-light">
                Our silk is OEKO-TEX® certified, ensuring no harmful chemicals are used in the
                production process. We partner with family-owned mills in Lake Como who adhere to
                strictly regenerative environmental standards.
              </div>
            </details>

            <details className="group cursor-pointer">
              <summary className="list-none flex justify-between items-center py-3 border-t border-black/[0.08] text-left focus:outline-none">
                <span className="font-label text-[11px] uppercase tracking-[0.2em] font-medium text-[#1b1b1b]">
                  Care Instructions
                </span>
                <ChevronDown className="w-4 h-4 text-neutral-500 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="pb-4 font-body text-xs text-[#474747] leading-relaxed font-light">
                Dry clean only. Store on a padded hanger to maintain the bias-cut structure. Do not
                steam at high temperatures; utilize gentle horizontal misting only.
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Editorial Section: Complete the Look */}
      <section className="mt-36 pt-16 border-t border-black/[0.08]">
        <h3 className="font-headline text-3xl md:text-4xl mb-16 text-center font-light text-[#1b1b1b]">
          Complete the Look
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {completeLookItems.map((item, idx) => (
            <div
              key={item.id}
              id={`complete-look-item-${item.id}`}
              onClick={() => onSelectProduct(item)}
              className={`space-y-4 group cursor-pointer ${idx === 1 ? 'md:mt-0 mt-8' : ''}`}
            >
              <div className="aspect-[3/4] overflow-hidden bg-[#eeeeee] shadow-xs">
                <img
                  src={item.heroImage}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                />
              </div>
              <div className="space-y-1">
                <h4 className="font-label text-[11px] uppercase tracking-wider text-black font-medium group-hover:opacity-75 transition-opacity">
                  {item.name}
                </h4>
                <p className="font-body text-sm text-[#777777] font-light">{item.formattedPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

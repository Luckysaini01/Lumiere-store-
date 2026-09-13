import React from 'react';
import { CATEGORY_CAROUSEL } from '../data/products';
import { Product } from '../types';

interface HomeLookbookProps {
  onNavigateToShop: (category?: string) => void;
  onSelectProduct: (product: Product) => void;
  featuredProduct: Product;
}

export const HomeLookbook: React.FC<HomeLookbookProps> = ({
  onNavigateToShop,
  onSelectProduct,
  featuredProduct,
}) => {
  return (
    <div id="home-lookbook-view" className="w-full pb-32 animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-black">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhsDE-a4ChHKniOaaSNcJGPUiAdooTqSGn6fs5OmpH-pIThHIJWCHdhMMsW3NDq6O1MsCGlsibX93KZfnQmsKII5u1P6V1rGrn0cbJWU3bzLFDYaEkDTzK61-AtJhX0daktTP2p3VEEGsNsGI1jL0GTXj_Oo6g_Ic5V7Z8dPfTtmn8mbTQ60ezZUmB5bWeNAhKioDnbb2BOvxuHdMPIbymFzKG1Ll1gUbRL1p5QS03fyMngE3KuDmTpGXK9wbwSXQ9ieLQzbKN4vg"
          alt="Seasonal Editorial Collection"
          className="w-full h-full object-cover object-center opacity-95 transition-transform duration-1000 ease-out hover:scale-102"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center px-6">
          <p className="font-label text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/80 mb-4">
            Curated Editorial 2026
          </p>
          <h2 className="font-headline text-5xl md:text-7xl text-white mb-8 leading-tight max-w-2xl font-light">
            The Winter <br /> Anthology
          </h2>
          <button
            id="hero-shop-button"
            onClick={() => onNavigateToShop()}
            className="bg-white text-black px-10 py-5 text-xs md:text-sm tracking-[0.25em] font-label font-medium uppercase hover:bg-neutral-200 transition-all duration-300 active:scale-95 shadow-2xl"
          >
            SHOP THE LOOK
          </button>
        </div>
      </section>

      {/* Category Carousel */}
      <section className="mt-20 px-6 max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-2xl md:text-3xl font-light">Collections</h3>
          <button
            id="carousel-view-all-button"
            onClick={() => onNavigateToShop()}
            className="font-label text-xs tracking-widest border-b border-black pb-1 hover:opacity-60 transition-opacity uppercase font-medium"
          >
            VIEW ALL
          </button>
        </div>

        <div className="flex overflow-x-auto hide-scrollbar gap-10 md:gap-14 pb-4 scroll-smooth">
          {CATEGORY_CAROUSEL.map((cat, idx) => (
            <button
              key={cat.name}
              id={`collection-category-${cat.category}`}
              onClick={() => onNavigateToShop(cat.category)}
              className="flex flex-col items-center flex-shrink-0 group focus:outline-none text-left"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-black/10 p-1 mb-4 group-hover:border-black/50 transition-colors duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="font-label text-xs tracking-widest uppercase text-neutral-800 group-hover:text-black">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Editorial Grid */}
      <section className="mt-28 px-6 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-12">
        <div className="md:col-span-12 mb-2">
          <p className="font-label text-[10px] md:text-xs tracking-[0.4em] text-[#777777] uppercase font-semibold">
            Issue No. 04 — Essentialism
          </p>
        </div>

        {/* Column 1: Monolith Coat */}
        <div className="md:col-span-7 pr-0 md:pr-4 group">
          <div
            onClick={() => onSelectProduct(featuredProduct)}
            className="bg-[#ffffff] h-[380px] md:h-[480px] w-full overflow-hidden cursor-pointer shadow-sm relative"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjT8Yi2sesfMugzSPwC2ObE0tGGPcdSRc-qH5uSTeIwN9n7fN-C9Kww-kbi0cAEK0Swc2vufkOyFs800ecT0kAQcD5_r_7W-076YQZ-Cp6fMb9So3fOpUkq_Sc1445QxNR6oCn6V6yf5ZOorFaQjDvXeCIiQxuzWFVYilA-ge7QA2b1-M7eARcfDTGnngddVpTQPuG-STk8NvmpQi57GNLAgNAnZkFrgX8UOzS9ljZOKlOFbI264Jf7yf-jXE2fTDNjN5Hpi4t98k"
              alt="The Monolith Coat"
              className="w-full h-full object-cover grayscale group-hover:scale-103 group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>
          <div className="mt-6 space-y-2">
            <h4
              onClick={() => onSelectProduct(featuredProduct)}
              className="font-headline text-2xl hover:opacity-75 cursor-pointer font-light transition-opacity"
            >
              The Monolith Coat
            </h4>
            <p className="font-body text-sm text-[#474747] leading-relaxed max-w-lg font-light">
              Structural integrity meets raw silk. A study in architectural volume for the modern nomad.
            </p>
          </div>
        </div>

        {/* Column 2: Minimalist Leaf / Detail */}
        <div className="md:col-span-4 md:col-start-9 pt-0 md:pt-20">
          <div className="bg-[#ffffff] h-[280px] md:h-[340px] w-full overflow-hidden shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3qwjL2PuB2ZO_9Bh-m0J3PSRBVhmxsw-Xlhfzb57zurw9NZbsHXwrpaDtxPzij28CCUTaF7j2hIj-tScbOY9oSZRoKo47Go6clWeidbYUf7Tu5g3_lCd-mKioWqdZ2oUkiSVX1RZTxl9WKj-AJqmIWwLTCv9n5g_Ypzr10XitLOwAu-ugwJ_pZvrQqkamydJitPn5ZHbPRNOKCroUI9jsguKBrrnpZoebRRhjHpM7NY3MLTRDORDmEyZO-SG9I-YaHcsr-zga17c"
              alt="Minimalist botanical form"
              className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              id="discover-editorial-link"
              onClick={() => onNavigateToShop()}
              className="font-label text-[10px] tracking-[0.25em] text-black border-b border-black pb-1 hover:opacity-60 transition-opacity uppercase font-semibold"
            >
              DISCOVER
            </button>
            <span className="font-label text-[10px] uppercase tracking-widest text-[#777777]">
              Milan • Paris
            </span>
          </div>
        </div>
      </section>

      {/* Quote / Brand Statement */}
      <section className="my-36 px-6 md:px-12 text-center max-w-screen-md mx-auto">
        <p className="font-headline italic text-2xl md:text-3xl leading-relaxed text-[#1b1b1b]/80">
          &ldquo;Fashion is the most powerful art we have. It is how we present our souls to the world.&rdquo;
        </p>
        <div className="h-16 w-px bg-black/20 mx-auto mt-12"></div>
      </section>
    </div>
  );
};

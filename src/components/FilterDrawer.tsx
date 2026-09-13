import React from 'react';
import { X, Check } from 'lucide-react';
import { FilterOptions } from '../types';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterOptions;
  onApplyFilters: (newFilters: FilterOptions) => void;
  onResetFilters: () => void;
}

export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  filters,
  onApplyFilters,
  onResetFilters,
}) => {
  const [localFilters, setLocalFilters] = React.useState<FilterOptions>(filters);

  React.useEffect(() => {
    setLocalFilters(filters);
  }, [filters, isOpen]);

  if (!isOpen) return null;

  const categories = [
    { label: 'All Collections', value: 'ALL' },
    { label: 'Dresses', value: 'dresses' },
    { label: 'Outerwear', value: 'outerwear' },
    { label: 'Tailoring', value: 'tailoring' },
    { label: 'Separates', value: 'separates' },
    { label: 'Footwear', value: 'footwear' },
    { label: 'Accessories', value: 'accessories' },
  ];

  const sizes = ['ALL', 'XS', 'S', 'M', 'L'];
  const colors = [
    { label: 'Monochrome', value: 'MONO', colorClass: 'bg-neutral-800' },
    { label: 'Oat Ecru', value: 'OAT', colorClass: 'bg-[#d8cfc4]' },
    { label: 'Noir Deep', value: 'NOIR', colorClass: 'bg-black' },
  ];
  const fabrics = ['ALL', 'WOOL', 'SILK', 'CANVAS', 'LEATHER', 'COTTON'];

  const handleApply = () => {
    onApplyFilters(localFilters);
    onClose();
  };

  const handleReset = () => {
    onResetFilters();
    onClose();
  };

  return (
    <div id="filter-drawer-backdrop" className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-8">
        <div
          id="filter-drawer-panel"
          className="w-screen max-w-sm bg-[#f9f9f9] shadow-2xl flex flex-col justify-between border-l border-black/[0.08]"
        >
          {/* Header */}
          <div className="p-6 border-b border-black/[0.08] flex items-center justify-between">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold">
                Curation Index
              </p>
              <h2 className="font-headline text-2xl font-light text-black">Filter Archive</h2>
            </div>
            <button
              id="close-filter-drawer-button"
              onClick={onClose}
              className="p-2 -mr-2 text-black hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Categories */}
            <div className="space-y-3">
              <label className="font-label text-xs uppercase tracking-widest text-black font-semibold">
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    id={`filter-cat-${cat.value}`}
                    onClick={() => setLocalFilters({ ...localFilters, category: cat.value })}
                    className={`py-2 px-3.5 text-xs font-label uppercase tracking-wider transition-all border ${
                      localFilters.category === cat.value
                        ? 'bg-black text-white border-black shadow-xs font-semibold'
                        : 'bg-white text-black border-black/10 hover:border-black/40'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="space-y-3">
              <label className="font-label text-xs uppercase tracking-widest text-black font-semibold">
                Size
              </label>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    id={`filter-size-${s}`}
                    onClick={() => setLocalFilters({ ...localFilters, size: s })}
                    className={`py-2.5 text-xs font-label uppercase transition-all border text-center ${
                      localFilters.size === s
                        ? 'bg-black text-white border-black font-semibold'
                        : 'bg-white text-black border-black/10 hover:border-black/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette */}
            <div className="space-y-3">
              <label className="font-label text-xs uppercase tracking-widest text-black font-semibold">
                Palette
              </label>
              <div className="space-y-2">
                {colors.map((c) => (
                  <button
                    key={c.value}
                    id={`filter-color-${c.value}`}
                    onClick={() => setLocalFilters({ ...localFilters, color: c.value })}
                    className={`w-full flex items-center justify-between p-3 border transition-all ${
                      localFilters.color === c.value
                        ? 'border-black bg-white shadow-2xs'
                        : 'border-black/10 bg-white/60 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className={`w-3.5 h-3.5 rounded-full ${c.colorClass} border border-black/10`} />
                      <span className="font-label text-xs uppercase tracking-wider text-black">
                        {c.label}
                      </span>
                    </div>
                    {localFilters.color === c.value && <Check className="w-4 h-4 text-black" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric */}
            <div className="space-y-3">
              <label className="font-label text-xs uppercase tracking-widest text-black font-semibold">
                Material & Fabric
              </label>
              <div className="flex flex-wrap gap-2">
                {fabrics.map((f) => (
                  <button
                    key={f}
                    id={`filter-fabric-${f}`}
                    onClick={() => setLocalFilters({ ...localFilters, fabric: f })}
                    className={`py-2 px-3 text-xs font-label uppercase tracking-wider transition-all border ${
                      localFilters.fabric === f
                        ? 'bg-black text-white border-black font-semibold'
                        : 'bg-white text-black border-black/10 hover:border-black/40'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-white border-t border-black/[0.08] flex gap-3">
            <button
              id="reset-filters-btn"
              onClick={handleReset}
              className="flex-1 py-4 text-center font-label text-xs uppercase tracking-widest border border-black/20 hover:border-black transition-colors text-black"
            >
              Reset
            </button>
            <button
              id="apply-filters-btn"
              onClick={handleApply}
              className="flex-1 py-4 text-center font-label text-xs uppercase tracking-widest bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

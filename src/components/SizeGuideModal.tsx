import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'cm' | 'in'>('cm');

  if (!isOpen) return null;

  const measurements = [
    { size: 'XS', bustCm: '80 - 84', waistCm: '60 - 64', hipCm: '86 - 90', it: '38', fr: '34', us: '0 - 2' },
    { size: 'S', bustCm: '84 - 88', waistCm: '64 - 68', hipCm: '90 - 94', it: '40', fr: '36', us: '4' },
    { size: 'M', bustCm: '88 - 92', waistCm: '68 - 72', hipCm: '94 - 98', it: '42', fr: '38', us: '6' },
    { size: 'L', bustCm: '92 - 98', waistCm: '72 - 78', hipCm: '98 - 104', it: '44', fr: '40', us: '8 - 10' },
  ];

  return (
    <div id="size-guide-modal-backdrop" className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center">
        <div
          id="size-guide-modal-content"
          className="w-full max-w-xl transform overflow-hidden bg-[#f9f9f9] p-6 md:p-8 text-left align-middle shadow-2xl border border-black/[0.08] transition-all relative"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold">
                Atelier Measurements
              </p>
              <h3 className="font-headline text-2xl font-light text-black">Garment Size Guide</h3>
            </div>
            <button
              id="close-size-guide-button"
              onClick={onClose}
              className="p-1.5 text-black hover:opacity-60 transition-opacity"
            >
              <X className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          <p className="font-body text-xs text-[#474747] mb-6 leading-relaxed">
            Our atelier cuts silhouettes to exacting tailoring standards. All pieces are modeled
            on a 178cm / 5'10" frame. For relaxed pieces like the Archival Trench or Void Trousers,
            we recommend ordering your standard size for the intended drape.
          </p>

          <div className="flex justify-end mb-4">
            <div className="inline-flex border border-black/15 bg-white p-0.5">
              <button
                onClick={() => setUnit('cm')}
                className={`px-3 py-1 font-label text-[10px] uppercase tracking-wider transition-colors ${
                  unit === 'cm' ? 'bg-black text-white font-semibold' : 'text-[#777777]'
                }`}
              >
                Centimeters
              </button>
              <button
                onClick={() => setUnit('in')}
                className={`px-3 py-1 font-label text-[10px] uppercase tracking-wider transition-colors ${
                  unit === 'in' ? 'bg-black text-white font-semibold' : 'text-[#777777]'
                }`}
              >
                Inches
              </button>
            </div>
          </div>

          <div className="overflow-x-auto border border-black/[0.08] bg-white">
            <table className="w-full text-left text-xs font-label">
              <thead className="bg-[#f3f3f3] text-black border-b border-black/[0.08] uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="py-3 px-4">Size</th>
                  <th className="py-3 px-4">Bust ({unit})</th>
                  <th className="py-3 px-4">Waist ({unit})</th>
                  <th className="py-3 px-4">Hips ({unit})</th>
                  <th className="py-3 px-4">IT / FR</th>
                  <th className="py-3 px-4">US</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06]">
                {measurements.map((row) => (
                  <tr key={row.size} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-black">{row.size}</td>
                    <td className="py-3 px-4 text-[#474747]">
                      {unit === 'cm' ? row.bustCm : '31.5 - 33'}
                    </td>
                    <td className="py-3 px-4 text-[#474747]">
                      {unit === 'cm' ? row.waistCm : '23.5 - 25'}
                    </td>
                    <td className="py-3 px-4 text-[#474747]">
                      {unit === 'cm' ? row.hipCm : '34 - 35.5'}
                    </td>
                    <td className="py-3 px-4 text-[#777777]">
                      {row.it} / {row.fr}
                    </td>
                    <td className="py-3 px-4 text-[#777777]">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              id="confirm-size-guide-button"
              onClick={onClose}
              className="bg-black text-white px-6 py-3 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

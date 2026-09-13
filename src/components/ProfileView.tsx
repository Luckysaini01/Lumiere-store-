import React, { useState } from 'react';
import { ShieldCheck, Calendar, Clock, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const [appointmentRequested, setAppointmentRequested] = useState(false);

  return (
    <main id="profile-view" className="pt-24 pb-36 px-6 max-w-screen-xl mx-auto animate-fade-in">
      <header className="mb-16">
        <p className="font-label text-[0.6875rem] uppercase tracking-[0.25em] text-[#777777] mb-4 font-semibold">
          Private Client Services
        </p>
        <h2 className="font-headline text-5xl md:text-6xl font-light text-black">
          Salon & Concierge
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Member Card & Details */}
        <div className="lg:col-span-7 space-y-10">
          <div className="bg-black text-white p-8 md:p-10 shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-label text-[10px] tracking-[0.3em] uppercase text-white/60 mb-2">
                  Lumière Membership
                </p>
                <h3 className="font-headline text-3xl font-light tracking-wide text-white">
                  L'Élite Privée
                </h3>
              </div>
              <span className="font-mono text-xs border border-white/20 px-3 py-1 text-white/80">
                № 089-VIP
              </span>
            </div>

            <div className="mt-12 flex justify-between items-end border-t border-white/10 pt-6">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-white/60">
                  Cardholder
                </p>
                <p className="font-headline text-lg text-white">Elena Rostova</p>
              </div>
              <div className="text-right">
                <p className="font-label text-[10px] uppercase tracking-widest text-white/60">
                  Dedicated Stylist
                </p>
                <p className="font-body text-sm text-white">Claire D'Aubigny, Milan</p>
              </div>
            </div>
          </div>

          {/* Curated Client Preferences */}
          <div className="bg-white p-8 border border-black/[0.08] shadow-2xs space-y-6">
            <h4 className="font-headline text-2xl font-light text-black">Fittings & Silhouette Notes</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-xs font-label">
              <div className="border-b border-black/[0.08] pb-3">
                <span className="text-[#777777] uppercase tracking-widest block mb-1">Couture Size</span>
                <span className="text-black font-semibold text-sm">38 IT / Small</span>
              </div>
              <div className="border-b border-black/[0.08] pb-3">
                <span className="text-[#777777] uppercase tracking-widest block mb-1">Favored Palette</span>
                <span className="text-black font-semibold text-sm">Monochrome & Ecru</span>
              </div>
              <div className="border-b border-black/[0.08] pb-3">
                <span className="text-[#777777] uppercase tracking-widest block mb-1">Textile Affinity</span>
                <span className="text-black font-semibold text-sm">Raw Silk, Virgin Wool</span>
              </div>
              <div className="border-b border-black/[0.08] pb-3">
                <span className="text-[#777777] uppercase tracking-widest block mb-1">Preferred Atelier</span>
                <span className="text-black font-semibold text-sm">Via Montenapoleone</span>
              </div>
              <div className="border-b border-black/[0.08] pb-3">
                <span className="text-[#777777] uppercase tracking-widest block mb-1">Dispatch Tier</span>
                <span className="text-black font-semibold text-sm">Same-Day White Glove</span>
              </div>
              <div className="border-b border-black/[0.08] pb-3">
                <span className="text-[#777777] uppercase tracking-widest block mb-1">Garment Archival</span>
                <span className="text-black font-semibold text-sm">Insured Vault Storage</span>
              </div>
            </div>
          </div>

          {/* Recent Curated Acquisitions */}
          <div className="space-y-4">
            <h4 className="font-headline text-2xl font-light text-black">Recent Orders</h4>
            <div className="bg-white border border-black/[0.08] p-6 flex justify-between items-center">
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-[#777777]">
                  Order № LUM-9402 • Delivered
                </p>
                <h5 className="font-headline text-lg mt-1">Sculpted Silk Gown — Noir (S)</h5>
                <p className="font-body text-xs text-[#777777] mt-0.5">$2,450.00 • Milan White Glove</p>
              </div>
              <span className="font-label text-xs uppercase tracking-widest border border-black px-3 py-1.5 text-black">
                Receipt
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Book Atelier Consultation */}
        <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-black/[0.08] shadow-2xs self-start space-y-6">
          <div>
            <p className="font-label text-[10px] uppercase tracking-[0.25em] text-[#777777] font-semibold">
              Private Salon Appointment
            </p>
            <h4 className="font-headline text-2xl font-light text-black mt-1">
              Reserve Fitting Session
            </h4>
          </div>

          <p className="font-body text-xs text-[#474747] leading-relaxed">
            Reserve a 90-minute private showroom appointment with your designated atelier stylist.
            Includes champagne service, bespoke garment alterations, and private preview of
            Collection 005 prototypes.
          </p>

          {appointmentRequested ? (
            <div className="p-6 bg-[#f3f3f3] border border-black/10 text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-black mx-auto stroke-[1.5]" />
              <h5 className="font-headline text-lg">Appointment Requested</h5>
              <p className="font-body text-xs text-[#474747]">
                Your stylist Claire D'Aubigny will confirm timing via private wire within 2 hours.
              </p>
              <button
                onClick={() => setAppointmentRequested(false)}
                className="font-label text-[10px] uppercase tracking-widest underline mt-2 text-black"
              >
                Modify Booking
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAppointmentRequested(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-[#777777] mb-1">
                  Preferred Boutique
                </label>
                <select className="w-full bg-[#f9f9f9] border border-black/15 p-3 text-xs font-label uppercase focus:outline-none focus:border-black">
                  <option>Via Montenapoleone — Milan</option>
                  <option>Rue Saint-Honoré — Paris</option>
                  <option>Madison Avenue — New York</option>
                  <option>Ginza — Tokyo</option>
                </select>
              </div>

              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-[#777777] mb-1">
                  Requested Date
                </label>
                <input
                  type="date"
                  defaultValue="2026-09-18"
                  className="w-full bg-[#f9f9f9] border border-black/15 p-3 text-xs font-label focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-[#777777] mb-1">
                  Styling Objectives / Pieces of Interest
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Draped silk gown trial, tailoring fitting for Archival Trench..."
                  className="w-full bg-[#f9f9f9] border border-black/15 p-3 text-xs font-body focus:outline-none focus:border-black resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                id="request-appointment-button"
                className="w-full bg-black text-white py-4 font-label text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-sm"
              >
                Request Private Fitting
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-black/[0.08] text-[11px] text-[#777777] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Strict privacy and confidentiality guaranteed.</span>
          </div>
        </div>
      </div>
    </main>
  );
};

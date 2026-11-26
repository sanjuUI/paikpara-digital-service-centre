import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Compass, Car } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            FIND OUR SHOP
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            আমাদের ঠিকানা
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            পাইকপাড়া ও মুন্সীরহাটের কেন্দ্রস্থলে সহজেই পৌঁছান
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address Details & Directions Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                <MapPin className="w-4 h-4 text-orange-600" />
                <span>মেইন শপ অ্যাড্রেস</span>
              </div>

              {/* Area headline */}
              <h3 className="text-2xl font-extrabold text-[#0B1B3D]">
                {BUSINESS_CONFIG.locationShortBn}
              </h3>
              <p className="text-sm font-semibold text-slate-500">
                {BUSINESS_CONFIG.locationShortEn}
              </p>

              {/* Full Address */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {BUSINESS_CONFIG.fullAddress}
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  {BUSINESS_CONFIG.fullAddressBn}
                </p>
              </div>

              {/* Landmark Callout */}
              <div className="mt-4 flex items-start gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-900 uppercase">ল্যান্ডমার্ক</span>
                  <p className="text-sm font-bold text-[#0B1B3D] mt-0.5">
                    {BUSINESS_CONFIG.landmarkBn}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {BUSINESS_CONFIG.landmarkEn}
                  </p>
                </div>
              </div>

              {/* Action Buttons: 📍 Google Maps & 🚗 Get Directions (Using centralized URL) */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1B3D] hover:bg-blue-900 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
                >
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span>📍 Google Maps</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-sm transition-all active:scale-98"
                >
                  <Car className="w-4 h-4 text-white" />
                  <span>🚗 Get Directions</span>
                </a>
              </div>

              {/* Copy Address Button */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ঠিকানা কপি করুন সহজে নেভিগেশনের জন্য:</span>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 font-medium transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Arrival Guide */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs h-[360px] sm:h-[420px] relative">
              <iframe
                title="Paikpara Digital Service Centre Map Location"
                src="https://maps.google.com/maps?q=Munshirhat+Road+Ballabhbati+Paikpara+Howrah+West+Bengal+711410&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>

              {/* Floating map info badge */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-lg border border-slate-200 shadow-md text-xs pointer-events-none max-w-xs">
                <p className="font-bold text-[#0B1B3D] truncate">{BUSINESS_CONFIG.businessName}</p>
                <p className="text-[11px] text-slate-600">{BUSINESS_CONFIG.landmarkBn}</p>
              </div>
            </div>

            {/* Practical Arrival Guide */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>মুন্সীরহাট বাস স্ট্যান্ড অথবা রেল স্টেশন থেকে টোটো বা অটোতে সহজে পৌঁছানো যায়।</span>
              <a
                href={BUSINESS_CONFIG.telPrimaryUrl}
                className="font-bold text-orange-600 hover:text-orange-700 whitespace-nowrap ml-2"
              >
                রাস্তা না চিনলে ফোন করুন →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

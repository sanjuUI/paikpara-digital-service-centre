import React from 'react';
import { Phone, MessageCircle, Navigation, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

interface QuickActionButtonsProps {
  onOpenHoursModal: () => void;
}

export const QuickActionButtons: React.FC<QuickActionButtonsProps> = ({ onOpenHoursModal }) => {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Action 1: Call Now */}
        <a
          href={BUSINESS_CONFIG.telPrimaryUrl}
          className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-blue-600 transition-all text-center active:scale-98"
        >
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-2 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <Phone className="w-6 h-6" />
          </div>
          <span className="text-xs text-slate-500 font-medium">সরাসরি কল</span>
          <span className="text-base sm:text-lg font-bold text-[#0B1B3D] group-hover:text-blue-700 transition-colors">
            Call Now
          </span>
          <span className="text-xs text-slate-600 font-semibold mt-0.5 tabular-nums">
            {BUSINESS_CONFIG.primaryPhone}
          </span>
        </a>

        {/* Action 2: WhatsApp */}
        <a
          href={BUSINESS_CONFIG.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-emerald-500 transition-all text-center active:scale-98"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
            <MessageCircle className="w-6 h-6 fill-current" />
          </div>
          <span className="text-xs text-slate-500 font-medium">মেসেজ পাঠান</span>
          <span className="text-base sm:text-lg font-bold text-[#0B1B3D] group-hover:text-emerald-600 transition-colors">
            WhatsApp
          </span>
          <span className="text-xs text-slate-600 font-semibold mt-0.5">
            অনলাইন সহায়তা
          </span>
        </a>

        {/* Action 3: Get Directions (Using centralized Google Maps URL) */}
        <a
          href={BUSINESS_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-orange-500 transition-all text-center active:scale-98"
        >
          <div className="w-12 h-12 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-2 group-hover:bg-orange-600 group-hover:text-white transition-colors">
            <Navigation className="w-6 h-6" />
          </div>
          <span className="text-xs text-slate-500 font-medium">লোকেশন ও ম্যাপ</span>
          <span className="text-base sm:text-lg font-bold text-[#0B1B3D] group-hover:text-orange-600 transition-colors">
            Get Directions
          </span>
          <span className="text-xs text-slate-600 font-semibold mt-0.5 truncate max-w-full px-1">
            মুন্সীরহাট রোড, পাইকপাড়া
          </span>
        </a>

        {/* Action 4: Opening Hours */}
        <button
          type="button"
          onClick={onOpenHoursModal}
          className="group flex flex-col items-center justify-center p-4 sm:p-5 bg-white rounded-xl border border-slate-200 shadow-md hover:shadow-lg hover:border-amber-500 transition-all text-center active:scale-98 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-2 group-hover:bg-amber-500 group-hover:text-white transition-colors">
            <Clock className="w-6 h-6" />
          </div>
          <span className="text-xs text-slate-500 font-medium">{BUSINESS_CONFIG.businessHours.labelBn}</span>
          <span className="text-base sm:text-lg font-bold text-[#0B1B3D] group-hover:text-amber-600 transition-colors">
            {BUSINESS_CONFIG.businessHours.labelEn}
          </span>
          <span className="text-xs text-slate-600 font-semibold mt-0.5">
            সময়সূচী দেখুন
          </span>
        </button>
      </div>
    </section>
  );
};

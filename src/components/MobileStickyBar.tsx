import React from 'react';
import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl pb-[env(safe-area-inset-bottom,0.5rem)]">
      <div className="grid grid-cols-3 gap-2">
        {/* Call button */}
        <a
          href={BUSINESS_CONFIG.telPrimaryUrl}
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#0B1B3D] text-white font-bold text-xs shadow-xs active:scale-95 transition-all text-center min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-orange-400 shrink-0" />
          <span className="truncate">📞 Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={BUSINESS_CONFIG.whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-xs active:scale-95 transition-all text-center min-h-[44px]"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="truncate">💬 WhatsApp</span>
        </a>

        {/* Directions button (Using centralized Google Maps URL) */}
        <a
          href={BUSINESS_CONFIG.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-orange-600 text-white font-bold text-xs shadow-xs active:scale-95 transition-all text-center min-h-[44px]"
        >
          <Navigation className="w-4 h-4 text-white shrink-0" />
          <span className="truncate">📍 Directions</span>
        </a>
      </div>
    </div>
  );
};

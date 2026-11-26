import React from 'react';
import { Phone, MessageCircle, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1B3D] text-white pt-16 pb-24 md:pb-16 border-t border-blue-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-lg shadow-sm">
                PD
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white leading-none">
                  PAIKPARA DIGITAL SERVICE CENTRE
                </h3>
                <p className="text-xs font-semibold text-orange-400 mt-1">
                  পাইকপাড়া ডিজিটাল সার্ভিস সেন্টার
                </p>
              </div>
            </div>

            <p className="text-base font-bold text-amber-300">
              “{BUSINESS_CONFIG.taglineBn}”
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              জেরক্স, প্রিন্ট, স্ক্যান, ফটো, অনলাইন আবেদন, আধার ও প্যান সেবা, দূরপাল্লার ট্রেনের টিকিট এবং আপনার প্রতিষ্ঠানের জন্য আধুনিক Website Development পরিষেবা।
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>মালিক ও পরিচালক: <strong>{BUSINESS_CONFIG.ownerName}</strong></span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
              প্রয়োজনীয় লিঙ্ক (Links)
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-white transition-colors">হোম (Home)</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">আমাদের পরিষেবা (Services)</a>
              </li>
              <li>
                <a href="#online-services" className="hover:text-white transition-colors">অনলাইন পোর্টাল কাজ (Online Services)</a>
              </li>
              <li>
                <a href="#web-dev" className="hover:text-white transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">আমাদের সম্পর্কে (About)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">যোগাযোগ (Contact)</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">
              ঠিকানা ও ফোন
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Location: {BUSINESS_CONFIG.locationShortBn}</p>
                  <p className="text-slate-400 mt-0.5">{BUSINESS_CONFIG.fullAddress}</p>
                  <p className="text-amber-300 font-medium mt-0.5">{BUSINESS_CONFIG.landmarkBn}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span>
                  Phone: <a href={BUSINESS_CONFIG.telPrimaryUrl} className="font-bold text-white hover:text-amber-300 tabular-nums">{BUSINESS_CONFIG.primaryPhone}</a>
                  {' / '}
                  <a href={BUSINESS_CONFIG.telSecondaryUrl} className="font-semibold text-slate-200 hover:text-white tabular-nums">{BUSINESS_CONFIG.secondaryPhone}</a>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp: <a href={BUSINESS_CONFIG.whatsAppUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-300 hover:text-emerald-200 tabular-nums">{BUSINESS_CONFIG.whatsAppNumber}</a>
                </span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>উপরে স্ক্রোল করুন</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 Paikpara Digital Service Centre. All Rights Reserved.</p>
          <p className="text-slate-500">
            Design & Technology powered for Local Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

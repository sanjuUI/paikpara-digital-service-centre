import React from 'react';
import { MessageCircle, Phone, MapPin, CheckCircle2, ShieldCheck, Printer, FileText, CreditCard, Laptop } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle background geometric accents */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-orange-200/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Clear Customer-First Hierarchy: Business Name -> Services -> WhatsApp/Call -> Location */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* 1. Location & Identity Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-700">
              <span className="inline-flex items-center gap-1.5 font-bold text-[#0B1B3D]">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                <span>{BUSINESS_CONFIG.locationShortBn}</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>{BUSINESS_CONFIG.landmarkBn}</span>
              </span>
            </div>

            {/* 1. Business Name & Tagline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1B3D] tracking-tight leading-tight">
                {BUSINESS_CONFIG.businessNameBn}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-orange-600">
                “{BUSINESS_CONFIG.taglineBn}”
              </p>
            </div>

            {/* 2. Main Services Focus */}
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100/90 text-slate-800 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#0B1B3D] mb-1 text-xs uppercase tracking-wider text-blue-900">
                প্রধান ডিজিটাল পরিষেবা সমূহ:
              </p>
              <p className="text-slate-700 font-normal">
                {BUSINESS_CONFIG.heroSupportingBn}
              </p>
            </div>

            {/* Verified Owner & Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>নির্ভরযোগ্য ও দ্রুত সেবা</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>সহায়ক ডিজিটাল কেন্দ্র</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                <span>পরিচালক: <strong className="font-semibold text-slate-900">{BUSINESS_CONFIG.ownerName}</strong></span>
              </div>
            </div>

            {/* 3. Direct Contact CTAs: WhatsApp & Call Now */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BUSINESS_CONFIG.getWhatsAppMessageUrl('নমস্কার Sanju Da, আমি পাইকপাড়া ডিজিটাল সার্ভিস সেন্টারে একটি পরিষেবার বিষয়ে জানতে চাই।')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>WhatsApp করুন</span>
              </a>

              <a
                href={BUSINESS_CONFIG.telPrimaryUrl}
                className="inline-flex items-center justify-center gap-2 bg-[#0B1B3D] hover:bg-[#162a56] text-white px-6 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-md transition-all active:scale-98"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>কল করুন ({BUSINESS_CONFIG.primaryPhone})</span>
              </a>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-slate-700 hover:text-orange-600 font-semibold text-sm transition-colors"
              >
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>📍 লোকেশন দেখুন</span>
              </a>
            </div>

            {/* 4. Location Context Confirmation */}
            <p className="text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>ঠিকানা: {BUSINESS_CONFIG.fullAddress}</span>
            </p>
          </div>

          {/* Right Column: Visual Service Banner Showcase in Signature Brand Colors */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-br from-[#0B1B3D] via-[#102A6B] to-[#0A1633] p-6 text-white shadow-xl border border-blue-900/60 overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Header Badge in Brand Colors */}
              <div className="relative flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-600 flex items-center justify-center text-white font-black text-sm">
                    PD
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-tight text-white">PAIKPARA</h3>
                    <p className="text-[10px] font-semibold text-amber-300">DIGITAL SERVICE CENTRE</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-medium text-slate-300 block">মুন্সীরহাট রোড</span>
                  <span className="text-[10px] text-orange-400 font-bold">হাওড়া - ৭১১৪১০</span>
                </div>
              </div>

              {/* Main Visual Content Grid */}
              <div className="relative py-5 space-y-3">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center shrink-0 shadow-sm">
                    <Printer className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-orange-300 font-semibold uppercase tracking-wider">হাই-স্পিড প্রিন্ট ও কপি</p>
                    <h4 className="text-sm font-bold text-white truncate">Xerox, Print, Scan ও কালার ফটো</h4>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-blue-200 font-semibold uppercase tracking-wider">অনলাইন পোর্টাল সুবিধা</p>
                    <h4 className="text-sm font-bold text-white truncate">চাকরি, স্কলারশিপ ও কলেজ ফর্ম পূরণ</h4>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center shrink-0 shadow-sm">
                    <CreditCard className="w-5 h-5 text-slate-950" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-amber-200 font-semibold uppercase tracking-wider">আইডি ও টিকিট বুকিং</p>
                    <h4 className="text-sm font-bold text-white truncate">Aadhaar, PAN Card ও ট্রেন টিকিট</h4>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                    <Laptop className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-indigo-200 font-semibold uppercase tracking-wider">আধুনিক টেক সার্ভিস</p>
                    <h4 className="text-sm font-bold text-white truncate">Website Development & Digital Services</h4>
                  </div>
                </div>
              </div>

              {/* Banner Footer Card */}
              <div className="relative pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-300">
                  মালিক: <strong className="text-white font-semibold">{BUSINESS_CONFIG.ownerName}</strong>
                </span>
                <a
                  href={BUSINESS_CONFIG.telPrimaryUrl}
                  className="font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  <span>📞 {BUSINESS_CONFIG.primaryPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

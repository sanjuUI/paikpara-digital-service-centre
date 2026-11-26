import React from 'react';
import { MapPin, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Authentic profile card of Sanju Mondal & Paikpara Digital Service Centre */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0B1B3D] via-[#112a60] to-[#0A1633] rounded-2xl p-7 text-white shadow-xl border border-blue-900/60 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

              {/* Profile Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-orange-600 flex items-center justify-center text-white text-2xl font-black shadow-md border-2 border-white/20">
                  SM
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-amber-300 tracking-wider">
                    দোকানের কর্ণধার ও পরিচালক
                  </span>
                  <h3 className="text-2xl font-extrabold text-white tracking-tight">
                    {BUSINESS_CONFIG.ownerName}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {BUSINESS_CONFIG.businessName}
                  </p>
                </div>
              </div>

              {/* Verified Attributes */}
              <div className="py-6 space-y-3.5 text-sm">
                <div className="flex items-center gap-3 text-slate-200">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                  <span>{BUSINESS_CONFIG.locationShortBn}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>অভিজ্ঞ ও নির্ভুল অনলাইন সহায়তা</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <HeartHandshake className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>স্থানীয় মানুষের বিশ্বস্ত সহায়ক কেন্দ্র</span>
                </div>
              </div>

              {/* Direct owner quote */}
              <div className="pt-4 border-t border-white/10 bg-white/5 p-4 rounded-xl text-xs text-slate-300 leading-relaxed italic">
                “আমাদের লক্ষ্য হলো এলাকার প্রতিটি ছাত্র-ছাত্রী, অভিভাবক ও সাধারণ মানুষের অনলাইন কাজের ভোগান্তি দূর করে এক জায়গায় দ্রুত ও সঠিক সেবা প্রদান করা।”
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Bengali Story & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
                ABOUT OUR BUSINESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
                আমাদের সম্পর্কে
              </h2>
              <div className="w-16 h-1 bg-orange-500 mt-3 rounded-full"></div>
            </div>

            {/* Official Description from Prompt */}
            <div className="p-5 rounded-xl bg-blue-50/70 border-l-4 border-blue-600 text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              Paikpara Digital Service Centre হলো পাইকপাড়া, মুন্সীরহাট, হাওড়া এলাকার একটি স্থানীয় ডিজিটাল সার্ভিস সেন্টার। এখানে দৈনন্দিন প্রয়োজনীয় বিভিন্ন অনলাইন ও ডিজিটাল কাজ, প্রিন্ট, স্ক্যান, ফর্ম পূরণ, অনলাইন আবেদন এবং অন্যান্য সহায়ক পরিষেবা প্রদান করা হয়।
            </div>

            {/* Core Values and Details */}
            <div className="space-y-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <p>
                আমরা আধুনিক কম্পিউটার সরঞ্জাম, উচ্চগতির লেজার প্রিন্টিং ও স্ক্যানিং ব্যবস্থা নিয়ে প্রতিনিয়ত সেবা দিয়ে চলেছি। আধার কার্ড, প্যান কার্ড, স্কুল-কলেজ ভর্তি, সরকারি ও বেসরকারি চাকরির আবেদন থেকে শুরু করে দূরপাল্লার ট্রেনের টিকিট বুকিং—যেকোনো কাজের জন্য আমরা সর্বোচ্চ যত্নশীল।
              </p>
              <p>
                এছাড়াও বর্তমান তথ্যপ্রযুক্তির যুগে স্থানীয় ক্ষুদ্র ও মাঝারি ব্যবসার প্রসারের লক্ষ্যে আমরা আধুনিক ও সাশ্রয়ী <strong>Website Development</strong> পরিষেবাও দিয়ে থাকি।
              </p>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">মালিক: {BUSINESS_CONFIG.ownerName}</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-800">অবস্থান: {BUSINESS_CONFIG.landmarkBn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

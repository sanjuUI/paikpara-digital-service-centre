import React from 'react';
import { MessageCircle, Smartphone, Zap, Globe, MapPin, CheckCircle, Code2 } from 'lucide-react';
import { WEB_DEV_SERVICES, BUSINESS_CONFIG } from '../config/businessInfo';
import { ServiceIcon } from './ServiceIcon';

export const WebsiteDevelopmentSection: React.FC = () => {
  const highlights = [
    {
      icon: Smartphone,
      title: 'মোবাইল ফ্রেন্ডলি (Responsive)',
      desc: 'মোবাইল, ট্যাবলেট এবং কম্পিউটারে সমান আকর্ষণীয় রূপ।',
    },
    {
      icon: Zap,
      title: 'দ্রুত লোডিং স্পিড',
      desc: 'আধুনিক কোডিং যাতে পেজ কয়েক সেকেন্ডেই খুলে যায়।',
    },
    {
      icon: MapPin,
      title: 'Google Maps ও লোকাল এসইও',
      desc: 'হাওড়া ও আপনার স্থানীয় এলাকার গ্রাহকদের সহজে খুঁজে পেতে সাহায্য।',
    },
    {
      icon: Globe,
      title: 'ডোমেন ও হোস্টিং গাইডেন্স',
      desc: 'আপনার ব্র্যান্ডের নামের ওয়েবসাইট সেটআপে পূর্ণ টেকনিক্যাল সাপোর্ট।',
    },
  ];

  return (
    <section id="web-dev" className="py-16 sm:py-24 bg-[#0B1B3D] text-white relative overflow-hidden">
      {/* Background accents in royal blue & orange */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Clearly presented as an additional/secondary digital service */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-orange-400 uppercase">
            বিশেষ অতিরিক্ত ডিজিটাল পরিষেবা · SECONDARY / ADDITIONAL SERVICE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-1">
            WEBSITE DEVELOPMENT
          </h2>
          <p className="text-lg sm:text-xl font-bold text-amber-300 mt-2">
            আপনার ব্যবসার জন্য Professional Website তৈরি করুন
          </p>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-2xl mx-auto">
            আমাদের প্রাথমিক অনলাইন ও জেরক্স পরিষেবার পাশাপাশি, আপনার ব্যবসা, দোকান বা প্রতিষ্ঠানের জন্য আধুনিক, মোবাইল-ফ্রেন্ডলি professional website তৈরির প্রযুক্তিগত সেবা প্রদান করা হয়।
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-400/30 text-orange-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{h.title}</h4>
                  <p className="text-xs text-slate-300 mt-1 leading-snug">{h.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Web Development Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WEB_DEV_SERVICES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-slate-900/80 rounded-2xl border border-white/15 p-6 hover:border-orange-500/80 transition-all flex flex-col justify-between group hover:shadow-xl hover:shadow-orange-950/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    <ServiceIcon name={pkg.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {pkg.titleEn}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                  {pkg.titleBn}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {pkg.descriptionBn}
                </p>

                {/* Feature checklist */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={BUSINESS_CONFIG.getWhatsAppMessageUrl(
                    `নমস্কার Sanju Da, আমি "${pkg.titleBn} (${pkg.titleEn})" তৈরির বিষয়ে কথা বলতে চাই। বিস্তারিত পরিকল্পনা ও গাইডেন্স জানাবেন।`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-orange-500 text-white text-xs font-bold transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>প্যাকেজ সম্পর্কে জানুন</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Big Conversion Call to Action */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 sm:p-10 text-white text-center max-w-3xl mx-auto shadow-xl">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            আপনার ব্যবসা কি ইন্টারনেটে সহজে পাওয়া যায়?
          </h3>
          <p className="text-sm sm:text-base text-amber-100 mt-2 max-w-xl mx-auto">
            আজই আপনার ব্যবসা, দোকান বা সেন্টারের জন্য একটি আকর্ষণীয় ওয়েবসাইট তৈরি করে স্থানীয় গ্রাহকদের কাছে পৌঁছে যান।
          </p>

          <div className="mt-6">
            <a
              href={BUSINESS_CONFIG.getWhatsAppMessageUrl(
                'নমস্কার Sanju Da, আমি আমার ব্যবসার জন্য একটি Professional Website বানাতে চাই। বিস্তারিত আলোচনা করতে আগ্রহী।'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0B1B3D] hover:bg-[#122c66] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all active:scale-98"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>Website বানাতে WhatsApp করুন</span>
            </a>
          </div>
          <p className="text-xs text-amber-200 mt-3">
            সরাসরি Sanju Mondal-এর সাথে পরামর্শ করে আপনার বাজেট ও প্ল্যান নির্ধারণ করুন।
          </p>
        </div>
      </div>
    </section>
  );
};

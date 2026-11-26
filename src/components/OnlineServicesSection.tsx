import React from 'react';
import { MessageCircle, ShieldAlert, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { ONLINE_SERVICES_CATEGORIES, BUSINESS_CONFIG } from '../config/businessInfo';
import { ServiceIcon } from './ServiceIcon';

export const OnlineServicesSection: React.FC = () => {
  return (
    <section id="online-services" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">
            DIGITAL ASSISTANCE & PORTAL WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            অনলাইন পরিষেবা
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
            বিভিন্ন পোর্টাল ও অনলাইন আবেদন সহজ এবং নির্ভুলভাবে সম্পন্ন করুন
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Mandatory Transparency & Compliance Notice Box */}
        <div className="mb-10 max-w-4xl mx-auto p-4 sm:p-5 bg-amber-50/80 border border-amber-200 rounded-xl text-amber-950 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left shadow-2xs">
          <div className="w-10 h-10 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="flex-1 text-sm leading-relaxed">
            <p className="font-bold text-amber-950">
              জরুরি অবগতি: {BUSINESS_CONFIG.complianceNoticeBn}
            </p>
            <p className="text-xs text-amber-900/90 mt-0.5">
              আমরা সাধারণ নাগরিক ও ছাত্র-ছাত্রীদের সরকারি ও বেসরকারি পোর্টালে ফর্ম পূরণ, তথ্য আপলোড এবং ডিজিটাল নথিপত্র প্রিন্ট করার বিশ্বস্ত সহায়তা দিয়ে থাকি।
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {ONLINE_SERVICES_CATEGORIES.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-blue-700 flex items-center justify-center mb-3 group-hover:bg-[#0B1B3D] group-hover:text-white transition-colors shadow-2xs">
                  <ServiceIcon name={item.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D] group-hover:text-blue-700 transition-colors">
                  {item.titleBn}
                </h3>
                <span className="text-[11px] font-semibold text-slate-600 block mt-0.5">
                  {item.titleEn}
                </span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {item.descriptionBn}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-600 font-medium">সহায়তা উপলব্ধ</span>
                <a
                  href={BUSINESS_CONFIG.getWhatsAppMessageUrl(`নমস্কার Sanju Da, আমি "${item.titleBn} (${item.titleEn})" সম্পর্কে অনলাইন সহায়তা নিতে চাই।`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-blue-700 group-hover:text-orange-600 flex items-center gap-1 transition-colors"
                >
                  <span>যোগাযোগ</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA for Online Services */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_CONFIG.getWhatsAppMessageUrl('নমস্কার Sanju Da, আমার একটি অনলাইন ফর্ম ফিলাপ / পোর্টালের কাজের জন্য সহায়তা প্রয়োজন।')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-98"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>কাজের জন্য WhatsApp করুন</span>
          </a>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            ডকুমেন্টের ছবি বা প্রয়োজনীয় তথ্য WhatsApp-এ পাঠিয়ে সরাসরি আলোচনা করতে পারেন।
          </p>
        </div>
      </div>
    </section>
  );
};

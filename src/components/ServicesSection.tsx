import React, { useState, useMemo } from 'react';
import { Search, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { SERVICES_LIST, BUSINESS_CONFIG, ServiceItem } from '../config/businessInfo';
import { ServiceIcon } from './ServiceIcon';

export const ServicesSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', labelBn: 'সকল পরিষেবা', count: SERVICES_LIST.length },
    { id: 'print', labelBn: 'জেরক্স ও প্রিন্ট', count: SERVICES_LIST.filter(s => s.category === 'print').length },
    { id: 'form', labelBn: 'অনলাইন ফর্ম ও আবেদন', count: SERVICES_LIST.filter(s => s.category === 'form').length },
    { id: 'identity', labelBn: 'আধার, প্যান ও পাসপোর্ট', count: SERVICES_LIST.filter(s => s.category === 'identity').length },
    { id: 'ticket', labelBn: 'টিকিট বুকিং', count: SERVICES_LIST.filter(s => s.category === 'ticket').length },
    { id: 'payment', labelBn: 'বিল পেমেন্ট', count: SERVICES_LIST.filter(s => s.category === 'payment').length },
    { id: 'doc', labelBn: 'ডকুমেন্ট ও সিভি', count: SERVICES_LIST.filter(s => s.category === 'doc').length },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.nameBn.toLowerCase().includes(q) ||
        item.nameEn.toLowerCase().includes(q) ||
        item.descriptionBn.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleRequestService = (item: ServiceItem) => {
    const message = `নমস্কার Sanju Da, আমি "${item.nameBn} (${item.nameEn})" পরিষেবাটি গ্রহণ করতে চাই। অনুগ্রহ করে নিয়ম ও প্রয়োজনীয় তথ্য জানাবেন।`;
    window.open(BUSINESS_CONFIG.getWhatsAppMessageUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            SERVICES CATALOG
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            আমাদের পরিষেবা
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
            আপনার প্রয়োজনীয় ডিজিটাল কাজ এক জায়গায়
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter controls & Search */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs max-w-full overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0B1B3D] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.labelBn}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="পরিষেবা খুঁজুন (যেমন: Xerox, PAN)..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Service Cards Grid (All 19 Services) */}
        {filteredServices.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-slate-200 max-w-md mx-auto my-6">
            <p className="text-base text-slate-700 font-semibold mb-2">কোনো ফলাফল পাওয়া যায়নি</p>
            <p className="text-xs text-slate-500 mb-4">অনুগ্রহ করে অন্য শব্দ দিয়ে খুঁজুন অথবা সরাসরি আমাদের ফোন/হোয়াটসঅ্যাপ করুন।</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#0B1B3D] text-white text-xs font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              সব পরিষেবা দেখুন
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-2xs">
                      <ServiceIcon name={service.icon} className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                      {service.nameEn}
                    </span>
                  </div>

                  {/* Bengali Title */}
                  <h3 className="text-lg font-bold text-[#0B1B3D] tracking-tight group-hover:text-blue-900 transition-colors">
                    {service.nameBn}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {service.descriptionBn}
                  </p>
                </div>

                {/* Bottom CTA Button: Request Service */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>উপলব্ধ পরিষেবা</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => handleRequestService(service)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white rounded-lg text-xs font-semibold transition-all active:scale-98 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Request Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Catalog Inquiry Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0B1B3D] to-[#163677] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">তালিকায় আপনার প্রয়োজনীয় কাজটি খুঁজে পাচ্ছেন না?</h4>
            <p className="text-sm text-slate-300">
              যেকোনো ধরণের অনলাইন ফর্ম পূরণ বা ডিজিটাল কাজের জন্য সরাসরি Sanju Mondal-এর সাথে কথা বলুন।
            </p>
          </div>
          <a
            href={BUSINESS_CONFIG.getWhatsAppMessageUrl('নমস্কার Sanju Da, আমার একটি বিশেষ অনলাইন কাজের বিষয়ে পরামর্শ প্রয়োজন।')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 py-3 rounded-xl font-bold text-sm shadow-sm transition-all whitespace-nowrap shrink-0 active:scale-98"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>সরাসরি WhatsApp-এ জিজ্ঞাসা করুন</span>
          </a>
        </div>
      </div>
    </section>
  );
};

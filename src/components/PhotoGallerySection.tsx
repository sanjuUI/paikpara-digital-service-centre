import React, { useState } from 'react';
import { Camera, Image as ImageIcon, Sparkles, Check, Info } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../config/businessInfo';

export const PhotoGallerySection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Shop Front', 'Interior', 'Equipment', 'Branding', 'Work Samples'];

  const filteredItems = selectedTag === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => {
        if (selectedTag === 'Equipment') return item.tag === 'Workstation' || item.tag === 'Printers';
        if (selectedTag === 'Interior') return item.tag === 'Interior' || item.tag === 'Assistance';
        return item.tag === selectedTag;
      });

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            VISUAL TOUR
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            ফটো গ্যালারি
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            দোকানের পরিবেশ, আধুনিক যন্ত্রপাতি এবং পরিষেবার একঝলক
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedTag === tag
                  ? 'bg-[#0B1B3D] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-md transition-all flex flex-col"
            >
              {/* Visual Card Representation */}
              <div className="h-48 sm:h-52 bg-gradient-to-br from-[#0B1B3D] via-[#122c66] to-[#0A1633] p-6 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/20 rounded-full blur-xl pointer-events-none"></div>

                {/* Top Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-bold tracking-wider text-amber-300 uppercase bg-white/10 px-2.5 py-0.5 rounded-md border border-white/10">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>

                {/* Central Typography Showcase */}
                <div className="relative z-10 text-center py-2">
                  <p className="text-xs text-orange-400 font-semibold tracking-wide uppercase">
                    PAIKPARA DIGITAL
                  </p>
                  <h4 className="text-lg font-bold text-white mt-0.5">
                    {item.titleBn}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">{item.titleEn}</p>
                </div>

                {/* Bottom status */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-300 border-t border-white/10 pt-2">
                  <span>মুন্সীরহাট রোড, পাইকপাড়া</span>
                  <span className="text-emerald-400 font-semibold">Verified Space</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B1B3D]">
                    {item.titleBn}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.descriptionBn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-slate-700">ক্যাটাগরি: {item.category}</span>
                  <span className="text-blue-700 font-semibold">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authentic Store Photo Notice for Owner */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/70 border border-blue-200 max-w-2xl mx-auto flex items-center gap-3 text-xs text-slate-700">
          <Info className="w-5 h-5 text-blue-700 shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-blue-900 font-semibold">বাস্তব ফটোগ্রাফি সংযোজন:</strong> দোকানের প্রকৃত সাইনবোর্ড বা ভেতরের ছবি পরবর্তীতে যুক্ত করা যাবে। কোনো অসত্য বা ভুয়ো ছবি এখানে ব্যবহার করা হয়নি।
          </p>
        </div>
      </div>
    </section>
  );
};

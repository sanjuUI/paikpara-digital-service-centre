import React from 'react';
import { WHY_CHOOSE_US } from '../config/businessInfo';
import { ServiceIcon } from './ServiceIcon';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            কেন আমাদের পরিষেবা নেবেন?
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            স্থানীয় গ্রাহকদের আস্থা ও আন্তরিক সহায়তাই আমাদের প্রধান শক্তি
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Clean Verified Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-2xs hover:shadow-md hover:border-blue-400 transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center shrink-0 border border-blue-100">
                <ServiceIcon name={item.icon} className="w-6 h-6 text-[#0B1B3D]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1B3D] flex items-center gap-1.5">
                  <span className="text-emerald-600 font-extrabold">✓</span>
                  <span>{item.titleBn}</span>
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {item.descriptionBn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Clock, Phone, AlertCircle, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const BusinessHoursSection: React.FC = () => {
  return (
    <section id="hours" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            {BUSINESS_CONFIG.businessHours.labelEn}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            {BUSINESS_CONFIG.businessHours.labelBn} (Opening Hours)
          </h2>
          <div className="w-12 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0B1B3D]">{BUSINESS_CONFIG.businessHours.labelBn}</h3>
                <p className="text-xs text-slate-500">{BUSINESS_CONFIG.businessName}</p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                {BUSINESS_CONFIG.businessHours.statusBn}
              </span>
            </div>
          </div>

          {/* Schedule List */}
          <div className="space-y-3">
            {BUSINESS_CONFIG.businessHours.schedule.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200 gap-1 sm:gap-4"
              >
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <Calendar className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>{item.day}</span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-blue-900 tabular-nums">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>

          {/* Notice & Direct Phone Confirmation */}
          <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-700 shrink-0" />
              <span>{BUSINESS_CONFIG.businessHours.noteBn}</span>
            </div>
            <a
              href={BUSINESS_CONFIG.telPrimaryUrl}
              className="font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_CONFIG.primaryPhone}-এ কল করে জেনে নিন</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

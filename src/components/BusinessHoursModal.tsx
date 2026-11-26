import React from 'react';
import { X, Clock, Calendar, Phone, AlertCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

interface BusinessHoursModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessHoursModal: React.FC<BusinessHoursModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-lg transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0B1B3D]">দোকানের {BUSINESS_CONFIG.businessHours.labelBn}</h3>
            <p className="text-xs text-slate-500">{BUSINESS_CONFIG.businessName}</p>
          </div>
        </div>

        <div className="mb-4 p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
          <span className="font-semibold">{BUSINESS_CONFIG.businessHours.labelBn}:</span>
          <span className="font-bold text-emerald-800">{BUSINESS_CONFIG.businessHours.statusBn}</span>
        </div>

        <div className="space-y-2 mb-6">
          {BUSINESS_CONFIG.businessHours.schedule.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs flex justify-between items-center"
            >
              <span className="font-medium text-slate-800 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-blue-700" />
                {item.day}
              </span>
              <span className="font-bold text-[#0B1B3D] tabular-nums">{item.hours}</span>
            </div>
          ))}
        </div>

        <div className="p-3 rounded-lg bg-blue-50 text-slate-700 text-xs leading-relaxed mb-6 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
          <span>{BUSINESS_CONFIG.businessHours.noteBn}</span>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={BUSINESS_CONFIG.telPrimaryUrl}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0B1B3D] text-white font-bold text-sm hover:bg-blue-900 transition-colors"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span>সরাসরি কল করুন ({BUSINESS_CONFIG.primaryPhone})</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-xs text-slate-600 font-semibold hover:text-slate-900 transition-colors"
          >
            বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
};

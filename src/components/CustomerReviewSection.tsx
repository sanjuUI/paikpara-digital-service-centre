import React from 'react';
import { Star, MessageSquareQuote, ExternalLink, ThumbsUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

export const CustomerReviewSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs">
          {/* Rating Icons Header */}
          <div className="inline-flex items-center justify-center gap-1.5 mb-4 text-amber-400">
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
            <Star className="w-6 h-6 fill-amber-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] tracking-tight">
            গ্রাহক মতামত ও রিভিউ (Customer Feedback)
          </h2>

          {/* Genuine Message - Strictly No Fake Reviews */}
          <p className="text-base sm:text-lg text-slate-700 font-medium max-w-xl mx-auto mt-4 leading-relaxed">
            “{BUSINESS_CONFIG.googleReviewTextBn}”
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mt-2">
            আপনার মূল্যবান মতামত আমাদের সেবার মান আরও উন্নত করতে এবং নতুন গ্রাহকদের সঠিক সিদ্ধান্ত নিতে সাহায্য করে।
          </p>

          {/* CTA: Google Review দিন */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={BUSINESS_CONFIG.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <Star className="w-4 h-4 fill-white" />
              <span>Google Review দিন</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={BUSINESS_CONFIG.getWhatsAppMessageUrl('নমস্কার Sanju Da, আমি আপনাদের সার্ভিসের বিষয়ে একটি মতামত জানাতে চাই।')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-all"
            >
              <ThumbsUp className="w-4 h-4 text-blue-700" />
              <span>WhatsApp-এ সরাসরি মতামত জানান</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>কোনো বানোয়াট বা অসত্য রিভিউ এখানে প্রদর্শন করা হয় না। স্বচ্ছতাই আমাদের লক্ষ্য।</span>
          </div>
        </div>
      </div>
    </section>
  );
};

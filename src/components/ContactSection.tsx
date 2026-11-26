import React, { useState } from 'react';
import { Phone, MessageCircle, Navigation, Send, CheckCircle2, User, Clock, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG, SERVICES_LIST } from '../config/businessInfo';

export const ContactSection: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [selectedService, setSelectedService] = useState('সাধারণ অনুসন্ধান / General Inquiry');
  const [formNote, setFormNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `নমস্কার Sanju Da,\nআমার নাম: ${formName || 'নাম উল্লেখ নেই'}\nফোন: ${formPhone || 'ফোন উল্লেখ নেই'}\nপরিষেবা: ${selectedService}\nবার্তা: ${formNote || 'বিস্তারিত তথ্য জানতে চাই'}`;
    window.open(BUSINESS_CONFIG.getWhatsAppMessageUrl(message), '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider text-orange-600 uppercase">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight mt-1">
            যোগাযোগ করুন
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            যেকোনো কাজের জন্য সরাসরি Sanju Mondal-এর সাথে কথা বলুন
          </p>
          <div className="w-16 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Business Contacts & Functional Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1B3D] rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-blue-900">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  SM
                </div>
                <div>
                  <span className="text-xs text-orange-300 font-semibold uppercase">মালিক / পরিচালক</span>
                  <h3 className="text-2xl font-extrabold text-white">{BUSINESS_CONFIG.ownerName}</h3>
                  <p className="text-xs text-slate-300">{BUSINESS_CONFIG.businessName}</p>
                </div>
              </div>

              {/* Contact List */}
              <div className="py-6 space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">প্রাথমিক ফোন নম্বর (Primary Phone):</span>
                  <a
                    href={BUSINESS_CONFIG.telPrimaryUrl}
                    className="text-lg font-bold text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-2 tabular-nums"
                  >
                    <Phone className="w-5 h-5 text-orange-500" />
                    <span>{BUSINESS_CONFIG.primaryPhone}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">দ্বিতীয় ফোন নম্বর (Secondary Phone):</span>
                  <a
                    href={BUSINESS_CONFIG.telSecondaryUrl}
                    className="text-base font-semibold text-slate-200 hover:text-white transition-colors flex items-center gap-2 tabular-nums"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>{BUSINESS_CONFIG.secondaryPhone}</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">হোয়াটসঅ্যাপ নম্বর (WhatsApp):</span>
                  <a
                    href={BUSINESS_CONFIG.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 tabular-nums"
                  >
                    <MessageCircle className="w-5 h-5 fill-emerald-400 text-transparent" />
                    <span>{BUSINESS_CONFIG.whatsAppNumber}</span>
                  </a>
                </div>

                <div className="pt-2 border-t border-white/10 text-xs text-slate-300 space-y-1">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">{BUSINESS_CONFIG.locationShortBn}</p>
                      <p className="text-slate-400">{BUSINESS_CONFIG.landmarkBn}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Core Functional Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={BUSINESS_CONFIG.telPrimaryUrl}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white text-[#0B1B3D] font-bold text-sm hover:bg-slate-100 transition-all active:scale-98 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>📞 Call Now</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm transition-all active:scale-98 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>💬 WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-all active:scale-98 shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-white" />
                  <span>📍 Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Interactive Service Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#0B1B3D]">
                  অনলাইন কাজের অনুসন্ধান ও রিকোয়েস্ট
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  ফর্মটি পূরণ করে সরাসরি WhatsApp-এর মাধ্যমে Sanju Mondal-এর কাছে পাঠিয়ে দিন।
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    আপনার নাম (Your Name)
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="যেমন: রাহুল জানা"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    ফোন নম্বর (Phone Number)
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="যেমন: 9876543210"
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    প্রয়োজনীয় পরিষেবা বেছে নিন
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="সাধারণ অনুসন্ধান / General Inquiry">সাধারণ অনুসন্ধান / General Inquiry</option>
                    <option value="Website Development (ওয়েবসাইট তৈরি)">Website Development (ওয়েবসাইট তৈরি)</option>
                    {SERVICES_LIST.map((s) => (
                      <option key={s.id} value={`${s.nameBn} (${s.nameEn})`}>
                        {s.nameBn} ({s.nameEn})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    কাজের বিবরণ বা বার্তা (Note)
                  </label>
                  <textarea
                    rows={3}
                    value={formNote}
                    onChange={(e) => setFormNote(e.target.value)}
                    placeholder="কোন কাগজ লাগবে বা কবে কাজ প্রয়োজন তা লিখতে পারেন..."
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp-এ মেসেজ পাঠান</span>
                </button>

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>আপনার তথ্য WhatsApp-এ স্থানান্তরিত হয়েছে। ধন্যবাদ!</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

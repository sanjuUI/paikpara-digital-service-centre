import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/businessInfo';

interface HeaderProps {
  onOpenHoursModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenHoursModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'হোম', enLabel: 'Home', href: '#home' },
    { label: 'আমাদের পরিষেবা', enLabel: 'Services', href: '#services' },
    { label: 'অনলাইন পরিষেবা', enLabel: 'Online Services', href: '#online-services' },
    { label: 'Website Development', enLabel: 'Web Dev', href: '#web-dev' },
    { label: 'আমাদের সম্পর্কে', enLabel: 'About', href: '#about' },
    { label: 'যোগাযোগ', enLabel: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all shadow-xs">
      {/* Top micro announcement bar */}
      <div className="bg-[#0B1B3D] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">{BUSINESS_CONFIG.locationShortBn}</span>
            <span className="hidden sm:inline text-slate-400">·</span>
            <span className="hidden sm:inline text-amber-300 font-medium">{BUSINESS_CONFIG.landmarkBn}</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={BUSINESS_CONFIG.telPrimaryUrl}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-orange-400" />
              <span>{BUSINESS_CONFIG.primaryPhone}</span>
            </a>
            <button
              onClick={onOpenHoursModal}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {BUSINESS_CONFIG.businessHours.labelBn}
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand identity: Left side */}
        <a href="#home" className="flex items-center gap-3 group focus:outline-hidden">
          <div className="w-10 h-10 rounded-lg bg-[#0B1B3D] border border-orange-500/30 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:border-orange-500 transition-colors shrink-0">
            <span className="text-orange-500">P</span>
            <span className="text-white text-sm">D</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B1B3D] leading-none">
              PAIKPARA
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-orange-600 uppercase mt-0.5">
              DIGITAL SERVICE CENTRE
            </span>
          </div>
        </a>

        {/* Right desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-700 hover:text-orange-600 transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button: WhatsApp Us */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_CONFIG.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-xs hover:shadow-md transition-all active:scale-98 whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={BUSINESS_CONFIG.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="sm:hidden p-2 rounded-lg text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-150">
          <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-100 text-xs text-slate-700 mb-2">
            <p className="font-semibold text-[#0B1B3D]">{BUSINESS_CONFIG.taglineBn}</p>
            <p className="text-slate-600 flex items-center gap-1 mt-1">
              <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
              <span>{BUSINESS_CONFIG.locationShortBn}</span>
            </p>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-orange-600 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-slate-400">{link.enLabel}</span>
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={BUSINESS_CONFIG.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold text-sm shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>WhatsApp-এ মেসেজ করুন</span>
            </a>
            <a
              href={BUSINESS_CONFIG.telPrimaryUrl}
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 bg-[#0B1B3D] text-white py-3 rounded-lg font-semibold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>কল করুন ({BUSINESS_CONFIG.primaryPhone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

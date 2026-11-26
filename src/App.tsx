import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickActionButtons } from './components/QuickActionButtons';
import { ServicesSection } from './components/ServicesSection';
import { OnlineServicesSection } from './components/OnlineServicesSection';
import { WebsiteDevelopmentSection } from './components/WebsiteDevelopmentSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { AboutSection } from './components/AboutSection';
import { LocationSection } from './components/LocationSection';
import { BusinessHoursSection } from './components/BusinessHoursSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { CustomerReviewSection } from './components/CustomerReviewSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BusinessHoursModal } from './components/BusinessHoursModal';

export default function App() {
  const [hoursModalOpen, setHoursModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Responsive Header */}
      <Header onOpenHoursModal={() => setHoursModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* 4 Quick Action Cards directly below hero */}
        <QuickActionButtons onOpenHoursModal={() => setHoursModalOpen(true)} />

        {/* Comprehensive Services Section (All 19 services + search + filters) */}
        <ServicesSection />

        {/* Dedicated Online Services & Government Portal Assistance */}
        <OnlineServicesSection />

        {/* Website Development Services */}
        <WebsiteDevelopmentSection />

        {/* Why Choose Us (6 Authentic Cards) */}
        <WhyChooseUsSection />

        {/* About Section featuring Sanju Mondal */}
        <AboutSection />

        {/* Location & Directions Section */}
        <LocationSection />

        {/* Business Hours Section */}
        <BusinessHoursSection />

        {/* Photo Gallery Section */}
        <PhotoGallerySection />

        {/* Customer Review / Google Business Profile Section */}
        <CustomerReviewSection />

        {/* Contact Section & Quick Request Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Action Bar */}
      <MobileStickyBar />

      {/* Opening Hours Modal */}
      <BusinessHoursModal
        isOpen={hoursModalOpen}
        onClose={() => setHoursModalOpen(false)}
      />
    </div>
  );
}

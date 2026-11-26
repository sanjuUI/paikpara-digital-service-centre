/**
 * Paikpara Digital Service Centre - Central Business Configuration
 * Single source of truth for all business details, contact information,
 * hours, location links, and service catalogs.
 */

export interface ServiceItem {
  id: string;
  nameBn: string;
  nameEn: string;
  category: 'print' | 'form' | 'identity' | 'ticket' | 'payment' | 'doc';
  descriptionBn: string;
  descriptionEn?: string;
  icon: string;
  highlight?: boolean;
}

export interface WebDevService {
  id: string;
  titleEn: string;
  titleBn: string;
  descriptionBn: string;
  icon: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  titleBn: string;
  titleEn: string;
  category: string;
  descriptionBn: string;
  tag: string;
}

/**
 * 1. CENTRALIZED GOOGLE MAPS & LOCATION URL
 * Single source of truth for all map, directions, and location buttons across the site.
 * Points to the exact verified business address on Google Maps without fake coordinates.
 */
export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Paikpara+Digital+Service+Centre+Munshirhat+Road+Ballabhbati+Howrah+Paikpara+West+Bengal+711410';

/**
 * 2. CENTRALIZED GOOGLE REVIEW URL CONFIGURATION
 * Clearly marked configuration value.
 * Owner note: When your exact Google Review shortlink (e.g., https://g.page/r/[ID]/review) is available,
 * paste it into GOOGLE_REVIEW_URL below.
 * When empty, it safely directs to Google search for the business name & address without inventing an invalid Place ID.
 */
export const GOOGLE_REVIEW_URL = '';

export const FALLBACK_GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=Paikpara+Digital+Service+Centre+Munshirhat+Road+Ballabhbati+Howrah+West+Bengal+711410';

/**
 * 3. CENTRALIZED OPENING HOURS CONFIGURATION
 * Single consistent source of truth for store hours everywhere on the website.
 * No uncertain phrases like 'সম্ভাব্য সময়'. Clean professional wording.
 */
export const BUSINESS_HOURS = {
  labelBn: 'কাজের সময়',
  labelEn: 'Opening Hours',
  statusBn: 'খোলা থাকে (Open)',
  schedule: [
    { day: 'সোমবার - শনিবার (Mon - Sat)', hours: 'সকাল ৮:০০ - রাত ৯:০০' },
    { day: 'রবিবার (Sunday)', hours: 'সকাল ৯:০০ - দুপুর ২:০০' },
  ],
  noteBn: 'জরুরি প্রয়োজনে বা বিশেষ ছুটির দিনে দোকানে আসার পূর্বে ফোনে যোগাযোগ করে নেওয়ার অনুরোধ করা হচ্ছে।',
};

/**
 * 4. PRIMARY BUSINESS INFORMATION
 */
export const BUSINESS_CONFIG = {
  // Brand & Identity
  businessName: 'Paikpara Digital Service Centre',
  businessNameBn: 'পাইকপাড়া ডিজিটাল সার্ভিস সেন্টার',
  taglineBn: 'আপনার সকল অনলাইন কাজ এক জায়গায়',
  taglineEn: 'All your digital & online services in one place',
  ownerName: 'SANJU MONDAL',
  ownerRoleBn: 'মালিক ও পরিচালক',

  // Contact Details (Strictly verified numbers - no fake emails or fake numbers)
  primaryPhone: '9679279108',
  secondaryPhone: '8101902150',
  whatsAppNumber: '9679279108',

  // URLs for Direct Actions
  telPrimaryUrl: 'tel:+919679279108',
  telSecondaryUrl: 'tel:+918101902150',
  whatsAppUrl: 'https://wa.me/919679279108',

  // Helper to build pre-filled WhatsApp link
  getWhatsAppMessageUrl: (message: string) => {
    return `https://wa.me/919679279108?text=${encodeURIComponent(message)}`;
  },

  // Location & Addresses
  // Correct Bengali spelling rules:
  // Always: মুন্সীরহাট (NOT মুনশীরহাট), পাইকপাড়া, হাওড়া, DR. মহেন্দ্রলাল সরকার গ্রাউন্ড-এর কাছে
  locationShortBn: 'পাইকপাড়া | মুন্সীরহাট | হাওড়া',
  locationShortEn: 'Paikpara | Munshirhat | Howrah',
  fullAddress: 'Munshirhat Road, Ballabhbati, Paikpara, Howrah, West Bengal – 711410',
  fullAddressBn: 'মুন্সীরহাট রোড, বল্লভবাটি, পাইকপাড়া, হাওড়া, পশ্চিমবঙ্গ – ৭১১৪১০',
  landmarkBn: 'DR. মহেন্দ্রলাল সরকার গ্রাউন্ড-এর কাছে',
  landmarkEn: 'Near Dr. Mahendralal Sarkar Ground',
  pincode: '711410',

  // Centralized Google Maps URL
  googleMapsUrl: GOOGLE_MAPS_URL,

  // Centralized Google Review URL
  googleReviewUrl: GOOGLE_REVIEW_URL || FALLBACK_GOOGLE_REVIEW_URL,
  googleReviewTextBn: 'Google-এ আমাদের পরিষেবা সম্পর্কে আপনার অভিজ্ঞতা জানাতে পারেন।',

  // Centralized Business Hours
  businessHours: BUSINESS_HOURS,

  // Supporting Text
  heroSupportingBn:
    'Xerox, Print, Scan, Online Form Fill-up, Aadhaar Services, PAN Card, Passport, Ticket Booking, Bill Payment এবং আরও বিভিন্ন ডিজিটাল পরিষেবা।',

  // Official Disclaimer
  complianceNoticeBn:
    'অনলাইন আবেদন ও ডিজিটাল সহায়তা প্রদান করা হয়। (আমরা একটি সহায়ক ডিজিটাল কেন্দ্র, সরাসরি সরকারি দফতর নয়)',
};

/**
 * Primary Core Services of the Digital Service Centre
 */
export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'xerox',
    nameBn: 'জেরক্স / কপি',
    nameEn: 'Xerox',
    category: 'print',
    descriptionBn: 'উচ্চমানের সাদা-কালো ও রঙিন জেরক্স বা ফটোকপি। বাল্ক অর্ডারে দ্রুত কপি পরিষেবা।',
    icon: 'Copy',
    highlight: true,
  },
  {
    id: 'print',
    nameBn: 'প্রিন্ট আউট',
    nameEn: 'Print',
    category: 'print',
    descriptionBn: 'লেজার প্রিন্টিং, কালার ও ব্ল্যাক অ্যান্ড হোয়াইট প্রিন্ট, প্রজেক্ট ফাইল ও অ্যাসাইনমেন্ট প্রিন্ট।',
    icon: 'Printer',
    highlight: true,
  },
  {
    id: 'scan',
    nameBn: 'স্ক্যান',
    nameEn: 'Scan',
    category: 'print',
    descriptionBn: 'উচ্চ রেজোলিউশন ডকুমেন্ট ও ফটো স্ক্যানিং। PDF ও JPG ফরম্যাটে সেভ ও শেয়ার।',
    icon: 'ScanLine',
  },
  {
    id: 'photo-print',
    nameBn: 'ফটো তোলা ও প্রিন্ট',
    nameEn: 'Photo Print',
    category: 'print',
    descriptionBn: 'পাসপোর্ট সাইজ ফটো, স্ট্যাম্প সাইজ ও ফুল সাইজ ফটো প্রিন্ট গ্লসি পেপারে দ্রুত প্রস্তুত।',
    icon: 'Camera',
  },
  {
    id: 'online-form',
    nameBn: 'অনলাইন ফর্ম পূরণ',
    nameEn: 'Online Form Fill-up',
    category: 'form',
    descriptionBn: 'যেকোনো প্রকার অনলাইন ফর্ম পূরণ নির্ভুলভাবে ও মনোযোগ সহকারে করার ডিজিটাল সহায়তা।',
    icon: 'FileText',
    highlight: true,
  },
  {
    id: 'online-application',
    nameBn: 'অনলাইন আবেদন',
    nameEn: 'Online Application',
    category: 'form',
    descriptionBn: 'বিভিন্ন সরকারি ও বেসরকারি পোর্টালে অনলাইন দরখাস্ত ও আবেদনপত্র সাবমিশন সহায়তা।',
    icon: 'Send',
  },
  {
    id: 'aadhaar-services',
    nameBn: 'আধার সংক্রান্ত পরিষেবা',
    nameEn: 'Aadhaar Services',
    category: 'identity',
    descriptionBn: 'ই-আধার ডাউনলোড, পিভিসি (PVC) কার্ড অর্ডার, স্ট্যাটাস চেক এবং অনলাইন আধার সহায়তা।',
    icon: 'CreditCard',
    highlight: true,
  },
  {
    id: 'pan-card',
    nameBn: 'প্যান কার্ড সংক্রান্ত কাজ',
    nameEn: 'PAN Card',
    category: 'identity',
    descriptionBn: 'নতুন প্যান কার্ড আবেদন, প্যান সংশোধন (Correction), ডিজিটাল ই-প্যান ও রি-প্রিন্ট সহায়তা।',
    icon: 'IdCard',
    highlight: true,
  },
  {
    id: 'passport',
    nameBn: 'পাসপোর্ট সংক্রান্ত কাজ',
    nameEn: 'Passport',
    category: 'identity',
    descriptionBn: 'পাসপোর্ট সেবা কেন্দ্রে অ্যাপয়েন্টমেন্ট বুকিং, নতুন পাসপোর্ট ও রিনিউয়াল অনলাইন সহায়তা।',
    icon: 'Globe',
  },
  {
    id: 'railway-ticket',
    nameBn: 'রেল টিকিট',
    nameEn: 'Railway Ticket',
    category: 'ticket',
    descriptionBn: 'আইআরসিটিসি (IRCTC) ট্রেনের টিকিট বুকিং ও কনফার্মেশন স্ট্যাটাস চেক সংক্রান্ত সহায়তা।',
    icon: 'TrainTrack',
    highlight: true,
  },
  {
    id: 'flight-ticket',
    nameBn: 'বিমান টিকিট',
    nameEn: 'Flight Ticket',
    category: 'ticket',
    descriptionBn: 'অভ্যন্তরীণ ও আন্তর্জাতিক বিমানের টিকিট বুকিং সহায়তা সাশ্রয়ী মূল্যে।',
    icon: 'Plane',
  },
  {
    id: 'bill-payment',
    nameBn: 'বিদ্যুৎ, মোবাইল, DTH ইত্যাদি বিল পেমেন্ট',
    nameEn: 'Bill Payment',
    category: 'payment',
    descriptionBn: 'WBSEDCL বিদ্যুৎ বিল, প্রিপেইড/পোস্টপেইড মোবাইল রিচার্জ, DTH ও পানির বিল তাত্ক্ষণিক জমা।',
    icon: 'Receipt',
    highlight: true,
  },
  {
    id: 'cv-resume',
    nameBn: 'CV / Resume তৈরি',
    nameEn: 'CV / Resume',
    category: 'doc',
    descriptionBn: 'চাকরির ইন্টারভিউয়ের জন্য আকর্ষণীয় ও প্রফেশনাল বায়োডাটা এবং সিভি নিখুঁত ফরম্যাটিংয়ে প্রস্তুত।',
    icon: 'FileBadge',
  },
  {
    id: 'pdf-service',
    nameBn: 'PDF তৈরি / Edit / Print',
    nameEn: 'PDF Service',
    category: 'doc',
    descriptionBn: 'মাল্টিপল ফাইল মার্জ, কম্প্রেস, ফরম্যাট কনভার্ট এবং এডিটিং সহ হাই-স্পিড প্রিন্ট।',
    icon: 'FileSpreadsheet',
  },
  {
    id: 'document-upload',
    nameBn: 'ডকুমেন্ট Upload',
    nameEn: 'Document Upload',
    category: 'doc',
    descriptionBn: 'নির্দিষ্ট সাইজ (KB/MB) অনুযায়ী ছবি ও সার্টিফিকেট রিসাইজ করে অনলাইনে আপলোড সুবিধা।',
    icon: 'UploadCloud',
  },
  {
    id: 'result-marksheet',
    nameBn: 'রেজাল্ট / মার্কশিট প্রিন্ট',
    nameEn: 'Result / Marksheet',
    category: 'doc',
    descriptionBn: 'মাধ্যমিক, উচ্চমাধ্যমিক, কলেজ ও বোর্ডের পরীক্ষা রেজাল্ট দেখা ও কালার মার্কশিট প্রিন্ট।',
    icon: 'GraduationCap',
  },
  {
    id: 'scholarship',
    nameBn: 'স্কলারশিপের আবেদন',
    nameEn: 'Scholarship Application',
    category: 'form',
    descriptionBn: 'ঐক্যশ্রী, স্বামী বিবেকানন্দ (SVMCM), ন্যাশনাল স্কলারশিপ ও বিভিন্ন বৃত্তির ফর্ম ফিলাপ ও ট্র্যাকিং।',
    icon: 'Award',
  },
  {
    id: 'job-application',
    nameBn: 'চাকরির আবেদন',
    nameEn: 'Job Application',
    category: 'form',
    descriptionBn: 'রেল, এসএসসি, পিএসসি, ডিফেন্স, শিক্ষক নিয়োগ ও সমস্ত সরকারি-বেসরকারি চাকরির অনলাইন আবেদন।',
    icon: 'Briefcase',
    highlight: true,
  },
  {
    id: 'school-college-form',
    nameBn: 'স্কুল-কলেজের ফর্ম পূরণ',
    nameEn: 'School / College Forms',
    category: 'form',
    descriptionBn: 'স্কুল ও কলেজ অ্যাডমিশন ফর্ম পূরণ, রেজিস্ট্রেশন ফি পেমেন্ট ও এডমিট কার্ড প্রিন্টিং।',
    icon: 'Building2',
  },
];

/**
 * Dedicated Online Services Categories
 */
export const ONLINE_SERVICES_CATEGORIES = [
  {
    titleBn: 'সরকারি ফর্ম ও সহায়তা',
    titleEn: 'Government Forms',
    descriptionBn: 'বিভিন্ন জনকল্যাণমূলক প্রকল্প ও সরকারি দপ্তরের প্রয়োজনীয় ফর্ম পূরণ সহায়তা।',
    icon: 'Landmark',
  },
  {
    titleBn: 'অনলাইন আবেদন',
    titleEn: 'Online Applications',
    descriptionBn: 'অনলাইন দরখাস্ত সাবমিশন, ট্র্যাকিং ও অ্যাকনলেজমেন্ট স্লিপ প্রিন্ট।',
    icon: 'FileCheck2',
  },
  {
    titleBn: 'আধার সংক্রান্ত সহায়তা',
    titleEn: 'Aadhaar-related services',
    descriptionBn: 'ই-আধার কার্ড ডাউনলোড, পিভিসি অর্ডার ও লিঙ্ক স্ট্যাটাস অনুসন্ধান।',
    icon: 'ShieldCheck',
  },
  {
    titleBn: 'প্যান কার্ডের কাজ',
    titleEn: 'PAN services',
    descriptionBn: 'নতুন প্যান কার্ড আবেদন ও জরুরি সংশোধন সহায়তাকরণ।',
    icon: 'CreditCard',
  },
  {
    titleBn: 'পাসপোর্ট সংক্রান্ত কাজ',
    titleEn: 'Passport-related work',
    descriptionBn: 'পাসপোর্ট পোর্টাল আবেদন ও অ্যাপয়েন্টমেন্ট তারিখ বুকিং।',
    icon: 'Globe2',
  },
  {
    titleBn: 'চাকরির আবেদন',
    titleEn: 'Job applications',
    descriptionBn: 'সেন্ট্রাল ও স্টেট সরকারি চাকরির নির্ভুল ফর্ম ফিলাপ ও এডমিট কার্ড।',
    icon: 'Briefcase',
  },
  {
    titleBn: 'স্কলারশিপ আবেদন',
    titleEn: 'Scholarship applications',
    descriptionBn: 'SVMCM, Oasis, Kanyashree, Aikyashree ও বিভিন্ন বৃত্তির আবেদন।',
    icon: 'Award',
  },
  {
    titleBn: 'স্কুল ও কলেজের আবেদন',
    titleEn: 'School/College applications',
    descriptionBn: 'কলেজ অ্যাডমিশন, কাউন্সিলিং ফর্ম ও সেমিস্টার ফি জমা।',
    icon: 'GraduationCap',
  },
  {
    titleBn: 'ডকুমেন্ট আপলোড ও রিসাইজ',
    titleEn: 'Document upload',
    descriptionBn: 'সঠিক ডাইমেনশন ও কেবি (KB) অনুযায়ী ছবি ও স্বাক্ষর রিসাইজ করে আপলোড।',
    icon: 'UploadCloud',
  },
  {
    titleBn: 'রেজাল্ট ও মার্কশিট প্রিন্ট',
    titleEn: 'Result / Marksheet',
    descriptionBn: 'অনলাইন রেজাল্ট প্রকাশ, মেরিট লিস্ট চেক ও রঙিন লেমিনেটেড প্রিন্ট।',
    icon: 'FileText',
  },
  {
    titleBn: 'বিল পেমেন্ট পরিষেবা',
    titleEn: 'Bill payment',
    descriptionBn: 'বিদ্যুৎ বিল, গ্যাস বিল, মোবাইল ও ডিশ রিচার্জ তাত্ক্ষণিক রশিদ সহ।',
    icon: 'Zap',
  },
];

/**
 * Secondary / Additional Service: Website Development for local businesses & shops
 */
export const WEB_DEV_SERVICES: WebDevService[] = [
  {
    id: 'business-website',
    titleEn: 'Business Website',
    titleBn: 'ব্যবসায়িক ওয়েবসাইট',
    descriptionBn: 'যেকোনো ছোট ও মাঝারি ব্যবসার জন্য আধুনিক ব্র্যান্ডিং ওয়েবসাইট যা গ্রাহকের বিশ্বাসযোগ্যতা বাড়ায়।',
    icon: 'Briefcase',
    features: ['মোবাইল-ফ্রেন্ডলি ডিজাইন', 'Google Maps ইন্টিগ্রেশন', 'সরাসরি WhatsApp ও কল বাটন'],
  },
  {
    id: 'ecommerce-website',
    titleEn: 'E-commerce Website',
    titleBn: 'অনলাইন দোকান ও ই-কমার্স',
    descriptionBn: 'আপনার পণ্য অনলাইনে প্রদর্শন ও বিক্রি করার সুরক্ষিত ওয়েবসাইট ও ক্যাটালগ সিস্টেম।',
    icon: 'ShoppingBag',
    features: ['প্রোডাক্ট শোকেস', 'সহজ অর্ডার প্লেসমেন্ট', 'কাস্টমার পেমেন্ট সাপোর্ট'],
  },
  {
    id: 'portfolio-website',
    titleEn: 'Portfolio Website',
    titleBn: 'পোর্টফোলিও ওয়েবসাইট',
    descriptionBn: 'ব্যক্তিগত কাজ, ফটোগ্রাফার, শিল্পী বা ফ্রিল্যান্সারদের স্কিল প্রদর্শনের স্মার্ট পোর্টফোলিও।',
    icon: 'UserCheck',
    features: ['প্রজেক্ট শোকেস', 'সিভি / রেজুমে ডাউনলোড', 'ক্লিন আধুনিক ইন্টারফেস'],
  },
  {
    id: 'school-college-website',
    titleEn: 'School / College Website',
    titleBn: 'স্কুল ও কলেজ ওয়েবসাইট',
    descriptionBn: 'শিক্ষাপ্রতিষ্ঠানের নোটিশ বোর্ড, শিক্ষক তালিকা ও ভর্তি বিজ্ঞপ্তির জন্য প্রফেশনাল পোর্টাল।',
    icon: 'School',
    features: ['অনলাইন নোটিশ বোর্ড', 'ফটো গ্যালারি', 'ভর্তি ও যোগাযোগের তথ্য'],
  },
  {
    id: 'shop-store-website',
    titleEn: 'Shop / Store Website',
    titleBn: 'দোকান ও লোকাল শপ ওয়েবসাইট',
    descriptionBn: 'মুদি, বস্ত্র, ইলেকট্রনিক্স বা সার্ভিস সেন্টারের ডিজিটাল প্রোফাইল যাতে লোকাল গ্রাহক সহজেই খুঁজে পায়।',
    icon: 'Store',
    features: ['লোকাল এসইও (SEO)', 'সার্ভিস তালিকা', 'Google রিভিউ লিঙ্ক'],
  },
  {
    id: 'custom-website',
    titleEn: 'Custom Website',
    titleBn: 'কাস্টম রিকোয়ারমেন্ট ওয়েবসাইট',
    descriptionBn: 'আপনার বিশেষ প্রয়োজন ও পছন্দের ফিচার অনুযায়ী সম্পূর্ণ কাস্টমাইজড ওয়েব সলিউশন।',
    icon: 'Code2',
    features: ['কাস্টম ডিজাইন', 'সুপার ফাস্ট স্পিড', 'সম্পূর্ণ টেকনিক্যাল সাপোর্ট'],
  },
];

/**
 * Why Choose Us (6 verified, authentic points without fake claims)
 */
export const WHY_CHOOSE_US = [
  {
    titleBn: 'দ্রুত পরিষেবা',
    descriptionBn: 'আপনার মূল্যবান সময়ের গুরুত্ব দিয়ে প্রতিটি কাজ নির্ভুল ও যথাসম্ভব কম সময়ে সম্পন্ন করা হয়।',
    icon: 'Zap',
  },
  {
    titleBn: 'নির্ভরযোগ্য কাজ',
    descriptionBn: 'অনলাইন আবেদন ও ফর্ম ফিলাপে সর্বোচ্চ সতর্কতা ও তথ্যের গোপনীয়তা রক্ষা করা হয়।',
    icon: 'ShieldCheck',
  },
  {
    titleBn: 'বিভিন্ন ডিজিটাল পরিষেবা এক জায়গায়',
    descriptionBn: 'জেরক্স ও প্রিন্ট থেকে শুরু করে সরকারি প্রকল্প, টিকিট বুকিং ও ওয়েবসাইট তৈরির সমাধান এক ছাদের নিচে।',
    icon: 'Layers',
  },
  {
    titleBn: 'সহজে যোগাযোগ',
    descriptionBn: 'সরাসরি ফোন বা WhatsApp-এর মাধ্যমে যেকোন সময় আপনার কাজের স্ট্যাটাস জেনে নেওয়ার সুবিধা।',
    icon: 'PhoneCall',
  },
  {
    titleBn: 'স্থানীয় পরিষেবা',
    descriptionBn: 'পাইকপাড়া ও মুন্সীরহাট এলাকার মানুষের সুবিধা অনুযায়ী ঘরের কাছে আন্তরিক ডিজিটাল সহায়তা।',
    icon: 'MapPin',
  },
  {
    titleBn: 'কম সময়ে কাজ সম্পন্ন করার চেষ্টা',
    descriptionBn: 'জরুরি কাজের ক্ষেত্রে অগ্রাধিকার দিয়ে দ্রুত প্রিন্ট, স্ক্যান বা টিকিট বুকিং সমাধান।',
    icon: 'ClockCheck',
  },
];

/**
 * Gallery Items with types and descriptions
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'shop-front',
    titleBn: 'দোকানের সম্মুখভাগ',
    titleEn: 'Shop Front',
    category: 'Exterior',
    descriptionBn: 'মুন্সীরহাট রোড, বল্লভবাটি, পাইকপাড়ায় সহজে চেনার উপযোগী দৃশ্যমান দোকান।',
    tag: 'Shop Front',
  },
  {
    id: 'shop-interior',
    titleBn: 'দোকানের অভ্যন্তরীণ পরিবেশ',
    titleEn: 'Shop Interior',
    category: 'Interior',
    descriptionBn: 'গ্রাহকদের জন্য সুশৃঙ্খল ও আন্তরিক বসার ব্যবস্থাযুক্ত সার্ভিস পরিবেশ।',
    tag: 'Interior',
  },
  {
    id: 'computer-setup',
    titleBn: 'কম্পিউটার ও অনলাইন ওয়ার্কস্টেশন',
    titleEn: 'Computer Setup',
    category: 'Equipment',
    descriptionBn: 'হাই-স্পিড ব্রডব্যান্ড ইন্টারনেট এবং আধুনিক কম্পিউটার সেটআপ।',
    tag: 'Workstation',
  },
  {
    id: 'printer-setup',
    titleBn: 'উচ্চগতির প্রিন্টার ও জেরক্স মেশিন',
    titleEn: 'High-Speed Printer',
    category: 'Equipment',
    descriptionBn: 'পরিষ্কার ও স্পষ্ট প্রিন্টআউট ও জেরক্সের জন্য আধুনিক মেশিন।',
    tag: 'Printers',
  },
  {
    id: 'service-banner',
    titleBn: 'সার্ভিস ও ব্র্যান্ডিং ডিসপ্লে',
    titleEn: 'Service Banner',
    category: 'Branding',
    descriptionBn: 'আমাদের সমস্ত উপলব্ধ পরিষেবা ও সহায়তার পরিষ্কার তথ্য তালিকা।',
    tag: 'Banner',
  },
  {
    id: 'owner-desk',
    titleBn: 'সার্ভিস ডেস্ক ও সহায়তা কেন্দ্র',
    titleEn: 'Service Desk / Owner',
    category: 'Assistance',
    descriptionBn: 'SANJU MONDAL কর্তৃক সরাসরি গ্রাহক সহায়তা ও কাউন্সেলিং।',
    tag: 'Assistance',
  },
  {
    id: 'work-samples',
    titleBn: 'কাজের নমুনা ও প্রিন্টিং স্যাম্পল',
    titleEn: 'Work Samples',
    category: 'Portfolio',
    descriptionBn: 'প্রফেশনাল সিভি, ল্যামিনেশন, কালার প্রিন্ট ও ফটোকপির নমুনা।',
    tag: 'Work Samples',
  },
];

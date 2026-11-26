import React from 'react';
import {
  Copy,
  Printer,
  ScanLine,
  Camera,
  FileText,
  Send,
  CreditCard,
  Globe,
  TrainTrack,
  Plane,
  Receipt,
  FileBadge,
  FileSpreadsheet,
  UploadCloud,
  GraduationCap,
  Award,
  Briefcase,
  Building2,
  ShieldCheck,
  Globe2,
  FileCheck2,
  Landmark,
  Zap,
  ShoppingBag,
  UserCheck,
  School,
  Store,
  Code2,
  Layers,
  PhoneCall,
  MapPin,
  Clock,
  HelpCircle
} from 'lucide-react';

interface ServiceIconProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name) {
    case 'Copy':
      return <Copy className={className} />;
    case 'Printer':
      return <Printer className={className} />;
    case 'ScanLine':
      return <ScanLine className={className} />;
    case 'Camera':
      return <Camera className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Send':
      return <Send className={className} />;
    case 'CreditCard':
    case 'IdCard':
      return <CreditCard className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'Globe2':
      return <Globe2 className={className} />;
    case 'TrainTrack':
      return <TrainTrack className={className} />;
    case 'Plane':
      return <Plane className={className} />;
    case 'Receipt':
      return <Receipt className={className} />;
    case 'FileBadge':
      return <FileBadge className={className} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} />;
    case 'UploadCloud':
      return <UploadCloud className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'FileCheck2':
      return <FileCheck2 className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'School':
      return <School className={className} />;
    case 'Store':
      return <Store className={className} />;
    case 'Code2':
      return <Code2 className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'PhoneCall':
      return <PhoneCall className={className} />;
    case 'MapPin':
      return <MapPin className={className} />;
    case 'ClockCheck':
    case 'Clock':
      return <Clock className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};

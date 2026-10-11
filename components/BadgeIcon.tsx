'use client';

import React from 'react';
import { 
  ShieldAlert, 
  Smartphone, 
  Eye, 
  KeyRound, 
  Lock, 
  Wallet, 
  Bot, 
  HeartHandshake, 
  Clock, 
  Trophy, 
  ShieldCheck,
  AlertTriangle,
  Award
} from 'lucide-react';

interface BadgeIconProps {
  name: string;
  className?: string;
}

export function BadgeIcon({ name, className = "w-5 h-5" }: BadgeIconProps) {
  switch (name) {
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Eye':
      return <Eye className={className} />;
    case 'FishOff':
      // Lucide might not have FishOff in older versions, use ShieldCheck with warning or AlertTriangle fallback
      return <ShieldCheck className={className} />;
    case 'KeyRound':
      return <KeyRound className={className} />;
    case 'Lock':
      return <Lock className={className} />;
    case 'Wallet':
      return <Wallet className={className} />;
    case 'Bot':
      return <Bot className={className} />;
    case 'HeartHandshake':
      return <HeartHandshake className={className} />;
    case 'ClockAlert':
      return <Clock className={className} />;
    case 'Trophy':
      return <Trophy className={className} />;
    default:
      return <Award className={className} />;
  }
}

'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  ShieldCheck, 
  ShieldAlert, 
  Key, 
  EyeOff, 
  Smartphone, 
  Cpu, 
  LifeBuoy, 
  CheckCircle2, 
  Circle, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Layers, 
  RotateCcw, 
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { 
  CYBER_DOMAINS, 
  CyberDomain, 
  DomainProficiency, 
  calculateDomainProficiencies, 
  getOverallDefenseScore 
} from '@/lib/cyberDomains';

interface CyberProficiencyRadarProps {
  className?: string;
  defaultView?: 'combined' | 'radar' | 'bars';
}

const CHART_CENTER = 220;
const CHART_RADIUS = 140;
const TOTAL_AXES = CYBER_DOMAINS.length;

function getAxisAngle(index: number) {
  return -Math.PI / 2 + (index * 2 * Math.PI) / TOTAL_AXES;
}

function getCoordinates(index: number, radius: number) {
  const angle = getAxisAngle(index);
  return {
    x: CHART_CENTER + radius * Math.cos(angle),
    y: CHART_CENTER + radius * Math.sin(angle)
  };
}

export default function CyberProficiencyRadar({ 
  className = '', 
  defaultView = 'combined' 
}: CyberProficiencyRadarProps) {
  const { isBn } = useLanguage();
  const { 
    completedModules, 
    toggleCompleted, 
    modules, 
    totalCount, 
    completedCount,
    completeAllModulesDemo,
    resetProgress,
    setIsHygieneModalOpen
  } = useProgress();

  const [activeView, setActiveView] = useState<'combined' | 'radar' | 'bars'>(defaultView);
  const [selectedDomainId, setSelectedDomainId] = useState<string>('phishing_fraud');
  const [hoveredDomainId, setHoveredDomainId] = useState<string | null>(null);

  // Compute proficiencies from real completedModules
  const proficiencies = useMemo(() => {
    return calculateDomainProficiencies(completedModules);
  }, [completedModules]);

  const overallScore = useMemo(() => {
    return getOverallDefenseScore(proficiencies);
  }, [proficiencies]);

  const fortifiedCount = useMemo(() => {
    return proficiencies.filter(p => p.isFortified).length;
  }, [proficiencies]);

  const activeDomainProficiency = useMemo(() => {
    return proficiencies.find(p => p.domain.id === selectedDomainId) || proficiencies[0];
  }, [proficiencies, selectedDomainId]);

  // Overall readiness level text
  const readinessTier = useMemo(() => {
    if (overallScore >= 95) {
      return {
        en: 'Master Cyber Defender',
        bn: 'মাস্টার সাইবার ডিফেন্ডার',
        color: 'text-emerald-400',
        borderColor: 'border-emerald-500/40',
        bg: 'bg-emerald-950/40'
      };
    }
    if (overallScore >= 70) {
      return {
        en: 'Active Human Firewall',
        bn: 'সক্রিয় হিউম্যান ফায়ারওয়াল',
        color: 'text-cyan-400',
        borderColor: 'border-cyan-500/40',
        bg: 'bg-cyan-950/40'
      };
    }
    if (overallScore >= 35) {
      return {
        en: 'Vigilant Trainee',
        bn: 'সতর্ক শিক্ষানবিস',
        color: 'text-amber-400',
        borderColor: 'border-amber-500/40',
        bg: 'bg-amber-950/40'
      };
    }
    return {
      en: 'Cadet / Training Needed',
      bn: 'নতুন শিক্ষার্থী / প্রশিক্ষণ শুরু করুন',
      color: 'text-slate-400',
      borderColor: 'border-slate-700/50',
      bg: 'bg-slate-900/60'
    };
  }, [overallScore]);

  // Concentric polygon points at different percentage levels
  const getGridPolygonPoints = (levelPct: number) => {
    const r = (CHART_RADIUS * levelPct) / 100;
    return proficiencies
      .map((_, i) => {
        const { x, y } = getCoordinates(i, r);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  // User data polygon points
  const dataPolygonPoints = useMemo(() => {
    return proficiencies
      .map((p, i) => {
        // Minimum radius of 12% so even 0% is visually anchored to the center
        const effectivePct = Math.max(12, p.percentage);
        const r = (CHART_RADIUS * effectivePct) / 100;
        const { x, y } = getCoordinates(i, r);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  }, [proficiencies]);

  // Map icon names to Lucide components
  const renderDomainIcon = (iconName: string, className = 'w-4 h-4') => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Key':
        return <Key className={className} />;
      case 'EyeOff':
        return <EyeOff className={className} />;
      case 'Smartphone':
        return <Smartphone className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'LifeBuoy':
        return <LifeBuoy className={className} />;
      default:
        return <Shield className={className} />;
    }
  };

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}>
      {/* Header Container */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Subtle background glow */}
        <div 
          aria-hidden="true" 
          className="absolute -top-32 -right-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" 
        />

        {/* Section Intro & Title */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
              <span className="text-emerald-400 font-semibold tracking-wider uppercase">
                {isBn ? 'ব্যক্তিগত দক্ষতা বিশ্লেষণ' : 'Cyber Competency Radar'}
              </span>
              <span aria-hidden="true">·</span>
              <span>{isBn ? '৬টি সাইবার ডোমেন' : '6 Core Domains'}</span>
              <span aria-hidden="true">·</span>
              <span>13 {isBn ? 'মডিউল ম্যাপিং' : 'Modules Tracked'}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span>{isBn ? 'সাইবার ডিফেন্স পারদর্শিতা রাডার' : 'Cyber Defense Proficiency Radar'}</span>
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 hidden sm:inline-block">
                {overallScore}% {isBn ? 'প্রস্তুতি' : 'Readiness'}
              </span>
            </h2>
            
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              {isBn 
                ? '১৩টি ক্যাম্পেইন মডিউল সমাপ্তির ওপর ভিত্তি করে আপনার সাইবার প্রতিরক্ষার শক্তি ও দুর্বলতা পর্যালোচনা করুন। রাডার চার্টের যে অংশে স্কোর কম, সেই মডিউলগুলোতে অগ্রাধিকার দিন।'
                : 'Evaluate your multi-layered defense readiness across 6 foundational security domains based on completed modules. Identify vulnerabilities and fortify weak spots.'}
            </p>
          </div>

          {/* Controls: Segmented View Selector & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Segmented Controls */}
            <div className="flex items-center gap-1 p-1 bg-slate-800/80 border border-slate-700/80 rounded-xl">
              <button
                onClick={() => setActiveView('combined')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'combined'
                    ? 'bg-slate-900 text-white shadow-sm border border-slate-700/60 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isBn ? 'একত্রিত' : 'Combined'}</span>
              </button>
              
              <button
                onClick={() => setActiveView('radar')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'radar'
                    ? 'bg-slate-900 text-white shadow-sm border border-slate-700/60 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                <span>{isBn ? 'রাডার চার্ট' : 'Radar'}</span>
              </button>

              <button
                onClick={() => setActiveView('bars')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                  activeView === 'bars'
                    ? 'bg-slate-900 text-white shadow-sm border border-slate-700/60 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>{isBn ? 'প্রগ্রেস বার' : 'Breakdown'}</span>
              </button>
            </div>

            {/* Action Buttons: Custom Hygiene Plan & Demo Simulator */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsHygieneModalOpen(true)}
                className="px-3 py-1.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 hover:from-amber-500/25 hover:to-rose-500/25 border border-amber-500/40 text-amber-300 hover:text-white transition-all shadow-sm flex items-center gap-1.5 active:scale-98"
                title={isBn ? 'দুর্বল ক্যাটাগরির ওপর ভিত্তি করে কাস্টম হাইজিন সুপারিশ দেখুন' : 'Generate custom cyber-hygiene plan based on lowest-scoring categories'}
              >
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                <span>{isBn ? 'কাস্টম হাইজিন প্ল্যান' : 'Custom Hygiene Plan'}</span>
              </button>

              <button
                onClick={completedCount === totalCount ? resetProgress : completeAllModulesDemo}
                className="px-3 py-1.5 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700/70 transition-colors flex items-center gap-1.5"
                title={isBn ? 'সম্পূর্ণ বা প্রাথমিক অবস্থা পরীক্ষা করুন' : 'Simulate 100% or reset progress'}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>
                  {completedCount === totalCount 
                    ? (isBn ? 'রিসেট' : 'Reset') 
                    : (isBn ? 'টেস্ট পূর্ণাঙ্গ রূপ' : 'Simulate 100%')}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Global Summary Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-b border-slate-800/80">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">
              {isBn ? 'সামগ্রিক প্রতিরক্ষা সূচক' : 'Overall Defense Index'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                {overallScore}%
              </span>
              <span className="text-xs text-emerald-400 font-mono">
                {overallScore === 100 ? 'MAX' : `${completedCount}/${totalCount} mods`}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">
              {isBn ? 'সুরক্ষিত ডোমেন' : 'Fortified Domains'}
            </span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">
                {fortifiedCount}/6
              </span>
              <span className="text-xs text-slate-400">
                {isBn ? 'পূর্ণ সুরক্ষিত' : '100% complete'}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">
              {isBn ? 'প্রতিরক্ষা পদমর্যাদা' : 'Defense Readiness Tier'}
            </span>
            <div className="text-sm sm:text-base font-semibold truncate pt-1">
              <span className={readinessTier.color}>
                {isBn ? readinessTier.bn : readinessTier.en}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">
              {isBn ? 'অগ্রাধিকার ফোকাস' : 'Priority Focus Area'}
            </span>
            {(() => {
              const lowest = [...proficiencies].sort((a, b) => a.percentage - b.percentage)[0];
              return (
                <div className="flex items-center gap-1.5 pt-1">
                  <button
                    onClick={() => setSelectedDomainId(lowest.domain.id)}
                    className="text-sm sm:text-base font-semibold text-amber-400 hover:text-amber-300 truncate flex items-center gap-1 group text-left"
                    title={isBn ? 'এই ডোমেনটি চার্টে নির্বাচন করুন' : 'Select domain in radar'}
                  >
                    <span className="truncate">{isBn ? lowest.domain.shortNameBn : lowest.domain.shortNameEn}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </button>
                  <button
                    onClick={() => setIsHygieneModalOpen(true)}
                    className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/80 border border-amber-500/40 text-amber-300 hover:text-white shrink-0"
                    title={isBn ? 'কাস্টম হাইজিন প্রেসক্রিপশন খুলুন' : 'Open custom hygiene plan'}
                  >
                    {isBn ? 'প্ল্যান' : 'Plan'}
                  </button>
                </div>
              );
            })()}
          </div>
        </div>

        {/* Main Content Body */}
        <div className="pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Interactive Radar Chart View */}
            {(activeView === 'combined' || activeView === 'radar') && (
              <div className={`${activeView === 'radar' ? 'lg:col-span-12 max-w-2xl mx-auto' : 'lg:col-span-6 xl:col-span-7'} flex flex-col items-center`}>
                <div className="w-full flex items-center justify-between mb-2">
                  <div className="text-xs text-slate-400 font-medium">
                    {isBn ? 'ইন্টারেক্টিভ স্পাইডার চার্ট (ডোমেনে ক্লিক করে বিস্তারিত দেখুন)' : 'Interactive Radar Map (click any axis or node for details)'}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    SVG Real-Time
                  </span>
                </div>

                {/* SVG Radar Graphic */}
                <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center select-none py-2">
                  <svg 
                    viewBox="0 0 440 440" 
                    className="w-full h-full overflow-visible drop-shadow-xl"
                  >
                    <defs>
                      {/* Polygon Gradient Fill */}
                      <linearGradient id="radarFillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.25" />
                      </linearGradient>

                      {/* Stroke Glow Filter */}
                      <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Concentric Grid Rings */}
                    {[25, 50, 75, 100].map((pct) => (
                      <g key={pct}>
                        <polygon
                          points={getGridPolygonPoints(pct)}
                          fill="none"
                          stroke={pct === 100 ? 'rgba(148, 163, 184, 0.25)' : 'rgba(148, 163, 184, 0.12)'}
                          strokeWidth={pct === 100 ? '1.5' : '1'}
                          strokeDasharray={pct === 100 ? 'none' : '3 3'}
                        />
                        {/* Reference percentage label along top axis */}
                        <text
                          x={CHART_CENTER}
                          y={CHART_CENTER - (CHART_RADIUS * pct) / 100 + 4}
                          textAnchor="middle"
                          className="fill-slate-500 text-[10px] font-mono select-none"
                        >
                          {pct}%
                        </text>
                      </g>
                    ))}

                    {/* Spoke Axis Lines from center */}
                    {proficiencies.map((_, i) => {
                      const { x, y } = getCoordinates(i, CHART_RADIUS);
                      return (
                        <line
                          key={i}
                          x1={CHART_CENTER}
                          y1={CHART_CENTER}
                          x2={x}
                          y2={y}
                          stroke="rgba(148, 163, 184, 0.16)"
                          strokeWidth="1"
                        />
                      );
                    })}

                    {/* Dynamic Data Polygon (Animated) */}
                    <polygon
                      points={dataPolygonPoints}
                      fill="url(#radarFillGradient)"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      className="transition-all duration-500 ease-out"
                      filter="url(#radarGlow)"
                    />

                    {/* Axis Nodes, Hit Targets & Interactive Labels */}
                    {proficiencies.map((p, i) => {
                      const isSelected = p.domain.id === selectedDomainId;
                      const isHovered = p.domain.id === hoveredDomainId;
                      
                      // Node position based on score
                      const effectivePct = Math.max(12, p.percentage);
                      const nodeR = (CHART_RADIUS * effectivePct) / 100;
                      const nodeCoords = getCoordinates(i, nodeR);

                      // Outer label position
                      const labelR = CHART_RADIUS + 34;
                      const labelCoords = getCoordinates(i, labelR);

                      return (
                        <g 
                          key={p.domain.id}
                          className="cursor-pointer"
                          onClick={() => setSelectedDomainId(p.domain.id)}
                          onMouseEnter={() => setHoveredDomainId(p.domain.id)}
                          onMouseLeave={() => setHoveredDomainId(null)}
                        >
                          {/* Invisible larger hit circle for easy touch/mouse targeting */}
                          <circle
                            cx={nodeCoords.x}
                            cy={nodeCoords.y}
                            r="18"
                            fill="transparent"
                          />

                          {/* Connecting dotted guide line if high */}
                          {isSelected && (
                            <line
                              x1={CHART_CENTER}
                              y1={CHART_CENTER}
                              x2={nodeCoords.x}
                              y2={nodeCoords.y}
                              stroke="#06b6d4"
                              strokeWidth="2"
                              strokeDasharray="2 2"
                            />
                          )}

                          {/* Outer pulse circle for fortified or selected */}
                          {(isSelected || isHovered || p.isFortified) && (
                            <circle
                              cx={nodeCoords.x}
                              cy={nodeCoords.y}
                              r={isSelected ? '10' : '8'}
                              fill={p.domain.color}
                              fillOpacity="0.25"
                              className="animate-ping"
                            />
                          )}

                          {/* Main vertex circle */}
                          <circle
                            cx={nodeCoords.x}
                            cy={nodeCoords.y}
                            r={isSelected ? '6.5' : '5'}
                            fill={isSelected ? '#ffffff' : p.domain.color}
                            stroke={isSelected ? p.domain.color : '#0f172a'}
                            strokeWidth="2"
                            className="transition-all duration-200"
                          />

                          {/* Outer Label text */}
                          <text
                            x={labelCoords.x}
                            y={labelCoords.y}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className={`text-[11px] font-semibold transition-colors duration-200 ${
                              isSelected
                                ? 'fill-emerald-400 font-bold'
                                : isHovered
                                ? 'fill-slate-200'
                                : 'fill-slate-400'
                            }`}
                          >
                            {isBn ? p.domain.shortNameBn : p.domain.shortNameEn}
                          </text>

                          {/* Percentage badge under outer label */}
                          <text
                            x={labelCoords.x}
                            y={labelCoords.y + 13}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className={`text-[10px] font-mono ${
                              p.isFortified 
                                ? 'fill-emerald-400 font-bold' 
                                : p.percentage > 0 
                                ? 'fill-cyan-400' 
                                : 'fill-slate-500'
                            }`}
                          >
                            {p.percentage}%
                          </text>
                        </g>
                      );
                    })}

                    {/* Center Core Shield Icon */}
                    <circle
                      cx={CHART_CENTER}
                      cy={CHART_CENTER}
                      r="16"
                      fill="#0f172a"
                      stroke="#334155"
                      strokeWidth="1.5"
                    />
                    <text
                      x={CHART_CENTER}
                      y={CHART_CENTER + 3}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-emerald-400 text-[10px] font-bold font-mono"
                    >
                      🛡️
                    </text>
                  </svg>
                </div>

                {/* Legend Hint */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 flex-wrap justify-center">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span>100% {isBn ? 'সম্পূর্ণ সুরক্ষিত' : 'Fortified'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>50-99% {isBn ? 'উন্নত' : 'Proficient'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <span>0-49% {isBn ? 'প্রশিক্ষণাধীন' : 'Training Needed'}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Right Column: Detailed Domain Inspector & Module Breakdown */}
            <div className={`${activeView === 'radar' ? 'hidden' : activeView === 'bars' ? 'lg:col-span-12' : 'lg:col-span-6 xl:col-span-5'} space-y-5`}>
              
              {/* Selected Domain Card */}
              {activeDomainProficiency && (
                <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${activeDomainProficiency.domain.accentBg} ${activeDomainProficiency.domain.accentBorder} border flex items-center justify-center ${activeDomainProficiency.domain.accentText} shrink-0`}>
                        {renderDomainIcon(activeDomainProficiency.domain.iconName, 'w-5 h-5')}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white leading-tight">
                          {isBn ? activeDomainProficiency.domain.nameBn : activeDomainProficiency.domain.nameEn}
                        </h3>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <span>{activeDomainProficiency.completedCount} of {activeDomainProficiency.totalCount} {isBn ? 'মডিউল সম্পন্ন' : 'modules done'}</span>
                          <span aria-hidden="true">·</span>
                          <span className={activeDomainProficiency.isFortified ? 'text-emerald-400 font-medium' : 'text-slate-300'}>
                            {isBn ? activeDomainProficiency.statusLabelBn : activeDomainProficiency.statusLabelEn}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-2xl font-extrabold text-white font-mono block">
                        {activeDomainProficiency.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1">
                    <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-emerald-500 to-cyan-400"
                        style={{ width: `${activeDomainProficiency.percentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Domain Defense Principle */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200 block mb-0.5">
                        {isBn ? 'মূল সাইবার নীতি:' : 'Core Security Principle:'}
                      </span>
                      <span>
                        {isBn 
                          ? activeDomainProficiency.domain.defensePrincipleBn 
                          : activeDomainProficiency.domain.defensePrincipleEn}
                      </span>
                    </div>
                  </div>

                  {/* Modules in this domain */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      {isBn ? 'এই ডোমেনের আওতাভুক্ত মডিউলসমূহ:' : 'Contributing Modules in this Domain:'}
                    </span>

                    <div className="space-y-2">
                      {activeDomainProficiency.domain.moduleIds.map((modId) => {
                        const modData = modules.find(m => m.id === modId);
                        const isDone = completedModules.includes(modId);

                        return (
                          <div 
                            key={modId}
                            className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                              isDone 
                                ? 'bg-emerald-950/20 border-emerald-500/30 text-slate-200' 
                                : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <button
                                onClick={() => toggleCompleted(modId)}
                                className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors shrink-0 ${
                                  isDone 
                                    ? 'bg-emerald-500 text-slate-950 font-bold' 
                                    : 'border border-slate-600 hover:border-emerald-400 text-transparent'
                                }`}
                                title={isDone ? (isBn ? 'অসম্পূর্ণ চিহ্নিত করুন' : 'Mark incomplete') : (isBn ? 'সম্পন্ন চিহ্নিত করুন' : 'Mark complete')}
                              >
                                {isDone ? <CheckCircle2 className="w-4 h-4" /> : <Circle className="w-3.5 h-3.5 text-slate-600" />}
                              </button>
                              
                              <div className="min-w-0">
                                <div className="text-xs font-medium truncate text-slate-200 flex items-center gap-1.5">
                                  <span className="font-mono text-[11px] text-emerald-400">
                                    M{isBn ? (modData?.numberBn || modId) : (modData?.numberEn || modId)}
                                  </span>
                                  <span className="truncate">
                                    {isBn ? (modData?.titleBn || modId) : (modData?.titleEn || modId)}
                                  </span>
                                </div>
                                <span className="text-[11px] text-slate-500 truncate block">
                                  {isBn ? modData?.summaryBn : modData?.summaryEn}
                                </span>
                              </div>
                            </div>

                            <a
                              href={modData?.anchor || `#${modData?.sectionId || ''}`}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-emerald-600 hover:text-white text-slate-300 text-xs font-medium flex items-center gap-1 transition-colors shrink-0"
                            >
                              <span>{isBn ? 'মডিউলে যান' : 'Go to Module'}</span>
                              <ArrowRight className="w-3 h-3" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* All 6 Domains Quick Select Buttons */}
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  {isBn ? 'সকল সাইবার ডোমেন একনজরে' : 'All 6 Security Domains'}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {proficiencies.map((p) => {
                    const isSelected = p.domain.id === selectedDomainId;
                    return (
                      <button
                        key={p.domain.id}
                        onClick={() => setSelectedDomainId(p.domain.id)}
                        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2.5 ${
                          isSelected
                            ? 'bg-slate-800 border-emerald-500/80 shadow-md ring-1 ring-emerald-500/40'
                            : 'bg-slate-900/50 hover:bg-slate-800/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`${p.domain.accentText} shrink-0`}>
                            {renderDomainIcon(p.domain.iconName, 'w-4 h-4')}
                          </span>
                          <span className={`text-xs truncate font-medium ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                            {isBn ? p.domain.shortNameBn : p.domain.shortNameEn}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0 font-mono text-xs">
                          {p.isFortified ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <span className={p.percentage > 0 ? 'text-cyan-400' : 'text-slate-500'}>
                              {p.percentage}%
                            </span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Guidance Note */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>
              {isBn 
                ? 'প্রতিটি মডিউল সম্পন্ন করার সাথে সাথে রাডার চার্ট স্বয়ংক্রিয়ভাবে আপডেট হয়।' 
                : 'Proficiency polygon expands dynamically as you complete each module.'}
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href="#results-dashboard" 
              className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1 transition-colors"
            >
              <span>{isBn ? '📊 জাতীয় ও জেলা তুলনামূলক গ্রাফ' : '📊 Comparative Benchmark Graph'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>

            <a 
              href="#pledge" 
              className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 transition-colors"
            >
              <span>{isBn ? 'চূড়ান্ত সনদপত্র দেখুন' : 'View Champion Certificate'}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

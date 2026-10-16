'use client';

import React, { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { BarChart3 } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import { calculateDomainProficiencies, getOverallDefenseScore } from '@/lib/cyberDomains';

// Illustrative reference averages per domain (percent), used for comparison only
const BENCHMARKS: Record<string, { district: number; national: number }> = {
  phishing_fraud: { district: 48, national: 42 },
  password_auth: { district: 55, national: 47 },
  privacy_footprint: { district: 44, national: 39 },
  device_malware: { district: 40, national: 35 },
  ai_deepfakes: { district: 28, national: 24 },
  incident_defense: { district: 36, national: 31 }
};

const COLORS = {
  user: '#10b981', // emerald-500
  district: '#06b6d4', // cyan-500
  national: '#64748b' // slate-500
};

export default function ResultsDashboard({ className = '' }: { className?: string }) {
  const { isBn } = useLanguage();
  const { completedModules } = useProgress();

  const proficiencies = useMemo(
    () => calculateDomainProficiencies(completedModules),
    [completedModules]
  );

  const overallScore = useMemo(() => getOverallDefenseScore(proficiencies), [proficiencies]);

  const labels = {
    user: isBn ? 'আপনি' : 'You',
    district: isBn ? 'জেলা গড়' : 'District Avg',
    national: isBn ? 'জাতীয় গড়' : 'National Avg'
  };

  const data = useMemo(
    () =>
      proficiencies.map(p => ({
        name: isBn ? p.domain.shortNameBn : p.domain.shortNameEn,
        user: p.percentage,
        district: BENCHMARKS[p.domain.id]?.district ?? 0,
        national: BENCHMARKS[p.domain.id]?.national ?? 0
      })),
    [proficiencies, isBn]
  );

  const averageOf = (key: 'district' | 'national') =>
    Math.round(data.reduce((acc, d) => acc + d[key], 0) / (data.length || 1));

  const summary = [
    { key: 'user', label: labels.user, value: overallScore, color: COLORS.user },
    { key: 'district', label: labels.district, value: averageOf('district'), color: COLORS.district },
    { key: 'national', label: labels.national, value: averageOf('national'), color: COLORS.national }
  ];

  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}>
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
        <div className="space-y-2 pb-6 border-b border-slate-800/80">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="text-emerald-400 font-semibold tracking-wider uppercase">
              {isBn ? 'তুলনামূলক ফলাফল' : 'Comparative Results'}
            </span>
            <span aria-hidden="true">·</span>
            <span>{isBn ? '৬টি সাইবার ডোমেন' : '6 Core Domains'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-emerald-400" aria-hidden="true" />
            <span>{isBn ? 'ফলাফল ড্যাশবোর্ড' : 'Results Dashboard'}</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            {isBn
              ? 'প্রতিটি ডোমেনে আপনার অগ্রগতি জেলা ও জাতীয় গড়ের সাথে তুলনা করুন। গড় মানগুলো তুলনার জন্য নমুনা মান।'
              : 'Compare your progress in each domain against district and national averages. Average values are illustrative reference figures.'}
          </p>
        </div>

        {/* Summary tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
          {summary.map(s => (
            <div key={s.key} className="bg-slate-950/60 border border-slate-800 rounded-2xl p-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} aria-hidden="true" />
                {s.label}
              </div>
              <div className="mt-1 text-3xl font-bold text-white font-mono">{s.value}%</div>
            </div>
          ))}
        </div>

        {/* Benchmark chart */}
        <div className="h-80 w-full" role="img" aria-label={isBn ? 'তুলনামূলক বার চার্ট' : 'Comparative benchmark bar chart'}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 8 }} barGap={2}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={{ stroke: '#334155' }} tickLine={false} interval={0} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} axisLine={false} tickLine={false} unit="%" />
              <Tooltip
                cursor={{ fill: 'rgba(148, 163, 184, 0.08)' }}
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: 12, color: '#e2e8f0' }}
                formatter={(value, name) => [`${value}%`, labels[name as keyof typeof labels] ?? name]}
              />
              <Legend formatter={value => labels[value as keyof typeof labels] ?? value} wrapperStyle={{ fontSize: 12, color: '#cbd5e1' }} />
              <Bar dataKey="user" fill={COLORS.user} radius={[4, 4, 0, 0]} />
              <Bar dataKey="district" fill={COLORS.district} radius={[4, 4, 0, 0]} />
              <Bar dataKey="national" fill={COLORS.national} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

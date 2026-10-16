'use client';

import React from 'react';
import { motion } from 'motion/react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CampaignOverview from '@/components/CampaignOverview';
import ModuleRoadmap from '@/components/ModuleRoadmap';
import CyberProficiencyRadar from '@/components/CyberProficiencyRadar';
import Module0 from '@/components/Module0';
import Module1 from '@/components/Module1';
import Module2 from '@/components/Module2';
import Module3A from '@/components/Module3A';
import Module3 from '@/components/Module3';
import Module4 from '@/components/Module4';
import Module5 from '@/components/Module5';
import Module6 from '@/components/Module6';
import Module7 from '@/components/Module7';
import Module8 from '@/components/Module8';
import Module9 from '@/components/Module9';
import Module9A from '@/components/Module9A';
import Module10 from '@/components/Module10';
import Module11 from '@/components/Module11';
import Module12 from '@/components/Module12';
import Worksheet from '@/components/Worksheet';
import FooterContact from '@/components/FooterContact';
import ResumeBanner from '@/components/ResumeBanner';
import CyberTipOfTheDay from '@/components/CyberTipOfTheDay';
import ModuleProgressFooter from '@/components/ModuleProgressFooter';
import BadgeUnlockToast from '@/components/BadgeUnlockToast';
import BadgesModal from '@/components/BadgesModal';
import CertificateModal from '@/components/CertificateModal';
import Leaderboard from '@/components/Leaderboard';
import ResultsDashboard from '@/components/ResultsDashboard';
import LeaderboardModal from '@/components/LeaderboardModal';
import AdminPortalModal from '@/components/AdminPortalModal';
import AdminAuthModal from '@/components/AdminAuthModal';
import CyberHygieneRecommendationsModal from '@/components/CyberHygieneRecommendationsModal';
import { LanguageProvider } from '@/context/LanguageContext';
import { ProgressProvider } from '@/context/ProgressContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { SecurityProvider } from '@/context/SecurityContext';

// Reusable animated section wrapper for clean scroll entrance
function AnimatedSection({
  children,
  id,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <SecurityProvider>
          <ProgressProvider>
            <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500 selection:text-white relative transition-colors duration-250">
              {/* 3-Zone Compliant Top Navigation Bar with Language Switcher & Progress */}
              <Header />

              {/* Floating Resume Journey Banner based on localStorage */}
              <ResumeBanner />

              {/* Floating Non-Intrusive Cyber Tip of the Day Notification */}
              <CyberTipOfTheDay variant="notification" />

              {/* Real-time Badge Unlock Celebration Notification */}
              <BadgeUnlockToast />

              {/* Interactive Badges & Medals Modal Showcase */}
              <BadgesModal />

              {/* Cybersecurity Champion Certificate Modal */}
              <CertificateModal />

              {/* Global Champions Leaderboard Modal */}
              <LeaderboardModal />

              {/* Elevated Administrator Portal & Certificate Designer Studio */}
              <AdminPortalModal />

              {/* Admin Passcode Authentication Modal */}
              <AdminAuthModal />

              {/* Custom Cyber-Hygiene Action Plan Modal */}
              <CyberHygieneRecommendationsModal />

          {/* Main Campaign Single-Page Animated Layout */}
          <main className="flex-1 overflow-hidden">
            {/* Slides 1, 2, 8, 10, 84: Hero & Human Firewall Core */}
            <AnimatedSection delay={0.05}>
              <Hero />
            </AnimatedSection>

            {/* Daily Security Best Practice: Cyber Tip of the Day Dashboard Widget */}
            <AnimatedSection id="daily-tip" delay={0.08} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
              <CyberTipOfTheDay variant="card" />
            </AnimatedSection>

            {/* Slides 3, 4, 5, 6: Campaign Overview, Mission, Disclaimer, Objectives, Rules */}
            <AnimatedSection id="overview" delay={0.1}>
              <CampaignOverview />
            </AnimatedSection>

            {/* Slide 7: 13-Module Color Coded Roadmap */}
            <AnimatedSection id="roadmap" delay={0.1}>
              <ModuleRoadmap />
            </AnimatedSection>

            {/* Visual Summary: Cyber Defense Proficiency Radar & Domain Progress Bars */}
            <AnimatedSection id="proficiency-radar" delay={0.1}>
              <CyberProficiencyRadar />
            </AnimatedSection>

            {/* Comparative Benchmark Graph: User vs District vs National Average (Recharts) */}
            <AnimatedSection id="results-dashboard" delay={0.1}>
              <ResultsDashboard />
            </AnimatedSection>

            {/* Slides 8 - 13: Module 0: Welcome, 30s Icebreaker, Rafiq's Story, THINK Framework, Phone Flip */}
            <AnimatedSection id="module-0">
              <Module0 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m0" />
              </div>
            </AnimatedSection>

            {/* Slides 14 - 17: Module 1: Digital Value, Treasure Map, 3 Quick Phone Tests, Nusrat's Story */}
            <AnimatedSection id="module-1">
              <Module1 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m1" />
              </div>
            </AnimatedSection>

            {/* Slides 18 - 22: Module 2: 6 Psychological Traps, 6-Step Scam Cycle, 5s Role-Play, Shaon's Story */}
            <AnimatedSection id="module-2">
              <Module2 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m2" />
              </div>
            </AnimatedSection>

            {/* Slides 23 - 27: Module 3A: 6 Local Scam Hotspots, Cards 1-6, 4:00 Group Discussion Timer */}
            <AnimatedSection id="module-3a">
              <Module3A />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m3a" />
              </div>
            </AnimatedSection>

            {/* Slides 28 - 33: Module 3: Phishing, Zahid vs Masum, Decision Tree, Real vs Fake Lab, VirusTotal */}
            <AnimatedSection id="module-3">
              <Module3 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m3" />
              </div>
            </AnimatedSection>

            {/* Slides 34 - 38: Module 4 & 5: Passwords & 2FA, Najma's Story, Strength Lab, Google Audit, MFA */}
            <AnimatedSection id="module-4">
              <Module4 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m4" />
              </div>
            </AnimatedSection>

            {/* Slides 39 - 42: Module 5 & 6: Social Media Privacy, Sadia's Vacation Story, 4 Questions, Quiz */}
            <AnimatedSection id="module-5">
              <Module5 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m5" />
              </div>
            </AnimatedSection>

            {/* Slides 43 - 47: Module 6 & 8: Malware & Loan Apps, Rahat's Story, QR Danger, Permission Audit */}
            <AnimatedSection id="module-6">
              <Module6 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m6" />
              </div>
            </AnimatedSection>

            {/* Slides 48 - 54: Module 7 & 4: Financial Fraud, Anwar's 50k Story, OTP is Your Key, 5 Leaked Steps */}
            <AnimatedSection id="module-7">
              <Module7 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m7" />
              </div>
            </AnimatedSection>

            {/* Slides 55 - 58: Module 8 & 9: AI & Deepfakes, Mother's Voice Story, Family Secret Code-Word */}
            <AnimatedSection id="module-8">
              <Module8 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m8" />
              </div>
            </AnimatedSection>

            {/* Slides 59 - 64: Module 9 & 7: Cyberbullying & Blackmail, Priya's Story, 4-Step Shield, Circle of Support */}
            <AnimatedSection id="module-9">
              <Module9 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m9" />
              </div>
            </AnimatedSection>

            {/* Slides 65 - 67: Module 9A & 7A: Digital Wellbeing, 24h Time Breakdown, Addiction Signs, Habits */}
            <AnimatedSection id="module-9a">
              <Module9A />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m9a" />
              </div>
            </AnimatedSection>

            {/* Slides 68 - 75: Module 10: Incident Response, Rayhan's SIM Swap, 5m-30m-24h, GD Guide, 8-Step Playbook */}
            <AnimatedSection id="module-10">
              <Module10 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m10" />
              </div>
            </AnimatedSection>

            {/* Slides 76 - 79: Module 11: Personal Security Plan, Arif's Story, 3 Concrete Tasks, STOP-THINK-VERIFY */}
            <AnimatedSection id="module-11">
              <Module11 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m11" />
              </div>
            </AnimatedSection>

            {/* Slides 80 - 84: Module 12: Resource Directory, Rapid Quiz, Digital Pledge Certificate, 5 Words */}
            <AnimatedSection id="pledge">
              <div id="module-12" className="scroll-mt-16" />
              <Module12 />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <ModuleProgressFooter currentModuleId="m12" />
              </div>
            </AnimatedSection>

            {/* Global Champions Leaderboard: 13-Module Verified Achievers */}
            <AnimatedSection id="leaderboard" className="scroll-mt-16">
              <Leaderboard />
            </AnimatedSection>

            {/* Slide 85: Printable Student Worksheet & 12-Item Checklist with Real Time Progress */}
            <AnimatedSection id="worksheet">
              <Worksheet />
            </AnimatedSection>
          </main>

          {/* Slide 86: InfoGuard+ Campaign Contact, Campus, Helplines & Training Request */}
          <AnimatedSection>
            <FooterContact />
          </AnimatedSection>
        </div>
      </ProgressProvider>
    </SecurityProvider>
  </LanguageProvider>
</ThemeProvider>
  );
}

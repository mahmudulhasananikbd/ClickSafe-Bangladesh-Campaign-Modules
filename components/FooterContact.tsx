'use client';

import React, { useState } from 'react';
import { 
  Shield, 
  Mail, 
  Phone, 
  Globe, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  QrCode
} from 'lucide-react';

export default function FooterContact() {
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-slate-950 border-t border-slate-800 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Slide 86 Contact Information Showcase */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-950">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  InfoGuard+
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  সাইবার সচেতনতা ও ডিজিটাল নিরাপত্তা উদ্যোগ
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-300 font-medium">
              মটো: <strong className="text-white">থামুন • যাচাই করুন • পাশে দাঁড়ান</strong>
            </div>
          </div>

          {/* 4 Contact Pillar Cards from Slide 86 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                <Mail className="w-4 h-4" />
                <span>ই-মেইল</span>
              </div>
              <a 
                href="mailto:infoguardplus@protonmail.com" 
                className="text-white hover:text-emerald-400 transition-colors font-mono break-all text-xs block pt-1"
              >
                infoguardplus@protonmail.com
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                <Phone className="w-4 h-4" />
                <span>ফোন / হোয়াটসঅ্যাপ</span>
              </div>
              <a 
                href="tel:+8801570284088" 
                className="text-white hover:text-emerald-400 transition-colors font-mono text-xs block pt-1"
              >
                +8801570284088
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
                <Globe className="w-4 h-4" />
                <span>অফিসিয়াল ওয়েবসাইট</span>
              </div>
              <a 
                href="https://infoguardplus.blogspot.com" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-emerald-400 transition-colors font-mono text-xs block pt-1 flex items-center gap-1"
              >
                <span>infoguardplus.blogspot.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs">
                <MapPin className="w-4 h-4" />
                <span>ক্যাম্পাস / ফেসবুক</span>
              </div>
              <a 
                href="https://www.facebook.com/infoguardplus" 
                target="_blank" 
                rel="noreferrer" 
                className="text-white hover:text-emerald-400 transition-colors font-mono text-xs block pt-1 flex items-center gap-1"
              >
                <span>fb/infoguardplus</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Interactive Training Request Form ("প্রশিক্ষণ চান? আমাদের লিখুন") */}
          <div className="pt-6 border-t border-slate-800">
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="text-center">
                <h4 className="text-base font-bold text-white">
                  আপনার কলেজ, বিশ্ববিদ্যালয় বা প্রতিষ্ঠানে কর্মশালা চান?
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  &ldquo;ক্লিক সেফ বাংলাদেশ ২০২৬&rdquo; সচেতনতামূলক সেশনের জন্য আমাদের সরাসরি অনুরোধ পাঠান।
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/80 text-center text-xs text-emerald-300 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>ধন্যবাদ! আপনার অনুরোধ সফলভাবে গৃহীত হয়েছে। আমরা শিগগিরই যোগাযোগ করব।</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="আপনার নাম"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="text"
                      placeholder="শিক্ষা প্রতিষ্ঠান / সংস্থা"
                      value={formData.institution}
                      onChange={e => setFormData({ ...formData, institution: e.target.value })}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="email"
                      required
                      placeholder="ই-মেইল"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                    <input
                      type="tel"
                      placeholder="মোবাইল / হোয়াটসঅ্যাপ নম্বর"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="অংশগ্রহণকারীর সম্ভাব্য সংখ্যা বা বিশেষ প্রয়োজন..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>প্রশিক্ষণের জন্য অনুরোধ পাঠান</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Sub-Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-850 text-slate-500 text-[11px]">
          <div>
            © ২০২৬ ক্লিক সেফ বাংলাদেশ • InfoGuard+ সাইবার সচেতনতা উদ্যোগ। সর্বস্বত্ব সংরক্ষিত।
          </div>

          <div className="flex items-center gap-4">
            <a href="#hero" className="hover:text-slate-300 transition-colors">উপরে যান</a>
            <span aria-hidden="true">·</span>
            <a href="#overview" className="hover:text-slate-300 transition-colors">নীতিমালা</a>
            <span aria-hidden="true">·</span>
            <a href="#worksheet" className="hover:text-slate-300 transition-colors">ওয়ার্কশিট</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

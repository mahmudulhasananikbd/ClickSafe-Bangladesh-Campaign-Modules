import type {Metadata} from 'next';
import {Hind_Siliguri, Plus_Jakarta_Sans} from 'next/font/google';
import './globals.css';

const hindSiliguri = Hind_Siliguri({
  weight: ['400', '500', '600', '700'],
  subsets: ['bengali', 'latin'],
  variable: '--font-hind',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ক্লিক সেফ বাংলাদেশ - সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬',
  description: 'ক্লিক সেফ বাংলাদেশ - সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬। থামুন • ভাবুন • যাচাই করুন • সুরক্ষিত থাকুন। Organized by InfoGuard+',
  openGraph: {
    title: 'ক্লিক সেফ বাংলাদেশ - সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬',
    description: 'ক্লিক সেফ বাংলাদেশ - সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬। থামুন • ভাবুন • যাচাই করুন • সুরক্ষিত থাকুন। Organized by InfoGuard+',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ক্লিক সেফ বাংলাদেশ - সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬',
    description: 'ক্লিক সেফ বাংলাদেশ - সাইবার নিরাপত্তা সচেতনতা ক্যাম্পেইন ২০২৬। থামুন • ভাবুন • যাচাই করুন • সুরক্ষিত থাকুন। Organized by InfoGuard+',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="bn" className={`scroll-smooth ${hindSiliguri.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}


import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { Menu, X, ChevronUp } from 'lucide-react';
import logoImage from 'figma:asset/b4aab89cc58612102277dd979bea92a0330396e4.png';
import { Preloader } from './shared-components';
import { SeoHead } from './seo-head';

export const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ページ遷移時にスクロールをトップに戻す
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'トップ', nameEn: 'TOP', href: '/' },
    { name: '事業内容', nameEn: 'BUSINESS', href: '/business' },
    { name: '会社概要', nameEn: 'ABOUT', href: '/profile' },
    { name: '採用情報', nameEn: 'RECRUIT', href: '/jobs' },
    { name: 'お問い合わせ', nameEn: 'CONTACT', href: '/contact' },
  ];

  return (
    <div className="relative bg-[#091810] text-[#F0F0F0] min-h-screen overflow-x-hidden" style={{ fontFamily: "'Noto Serif JP', serif" }}>
      <SeoHead />
      {/* Texture Overlay (Grain) */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves={3} stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0B3D2E]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoImage} alt="HRG Logo" className="h-10 sm:h-14 md:h-16 w-auto" />
          </Link>

          {/* Nav & Language UI */}
          <div className="flex items-center gap-8">
            <nav className="hidden lg:flex gap-5 xl:gap-8">
              {navLinks.map((link) => (
                <Link key={link.nameEn} to={link.href} className="relative text-[0.65rem] xl:text-[0.7rem] tracking-[0.25em] xl:tracking-[0.3em] text-[#D1D5DC] hover:text-[#FFD700] transition-all group overflow-hidden" style={{ fontFamily: "'Cinzel', serif" }}>
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">{link.name}</span>
                  <span className="absolute inset-0 flex items-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">{link.nameEn}</span>
                </Link>
              ))}
            </nav>
            <button className="lg:hidden text-[#D4AF37] p-2 -mr-2" onClick={() => setIsMobileMenuOpen(true)} aria-label="メニューを開く">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#091810] flex flex-col items-center justify-center" style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}>
            <button className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#D4AF37] p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setIsMobileMenuOpen(false)} aria-label="メニューを閉じる">
              <X size={28} />
            </button>
            <nav className="flex flex-col gap-8 sm:gap-10 text-center px-8 w-full max-w-sm">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.nameEn}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl sm:text-2xl md:text-3xl tracking-widest text-white py-1 min-h-[44px] flex flex-col items-center justify-center"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    <span className="block">{link.name}</span>
                    <span className="block text-[#D4AF37] text-[0.65rem] sm:text-xs tracking-[0.4em] mt-1" style={{ fontWeight: 300 }}>{link.nameEn}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            {/* Mobile menu footer contact */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-2"
            >
              <a href="tel:090-3333-1979" className="text-[#D4AF37] text-xs tracking-widest">090-3333-1979</a>
              <a href="mailto:hrg.20260113@gmail.com" className="text-[#99A1AF] text-xs tracking-wider">hrg.20260113@gmail.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative">
        <Outlet />
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#000000] transition-all duration-300 group"
            aria-label="ページトップへ戻る"
          >
            <ChevronUp size={20} className="text-[#D4AF37] group-hover:text-[#000000]" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#0A1811] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="text-[#D4AF37] text-sm tracking-widest mb-6" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
                HRG
              </h3>
              <p className="text-[#99A1AF] text-xs leading-relaxed mb-6" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
                人を、財産として<br />
                合同会社HRG
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-1">
              <h4 className="text-[#D4AF37] text-xs tracking-widest mb-6" style={{ fontWeight: 700 }}>
                NAVIGATION
              </h4>
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.nameEn} 
                    to={link.href} 
                    className="block text-[#99A1AF] text-xs hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-[#D4AF37] text-xs tracking-widest mb-6" style={{ fontWeight: 700 }}>
                CONTACT
              </h4>
              <div className="space-y-3 text-xs text-[#99A1AF]" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                <p>
                  〒920-0901<br />
                  石川県金沢市彦三町1-2-1<br />
                  アソルティ金沢彦三1F
                </p>
                <p>
                  <a href="tel:090-3333-1979" className="hover:text-[#D4AF37] transition-colors">
                    TEL: 090-3333-1979
                  </a>
                </p>
                <p>
                  <a href="mailto:hrg.20260113@gmail.com" className="hover:text-[#D4AF37] transition-colors">
                    hrg.20260113@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 mt-10 sm:mt-12 pt-8 text-center">
            <p className="text-[#99A1AF] text-xs tracking-widest">&copy; 2026 HRG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

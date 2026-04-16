import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Menu, X, Quote, UserCheck, Handshake, 
  TrendingUp, ChevronRight, MapPin, Mail, Phone, 
  ArrowRight, CheckCircle2, Globe, Search, UserPlus, Users
} from 'lucide-react';

// --- SEO: Schema.org JSON-LD ---
const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "合同会社HRG (HRG CO., LTD.)",
  "url": "https://hrg-example.com",
  "logo": "https://hrg-example.com/logo.png",
  "founder": { "@type": "Person", "name": "梅澤 浩二" },
  "address": {
    "@type": "PostalAddress",
    "postalCode": "920-0901",
    "addressRegion": "石川県",
    "addressLocality": "金沢市",
    "streetAddress": "彦三町1-2-1 アソルティ金沢彦三1F"
  }
};

// --- Preloader Component ---
const Preloader = ({ finishLoading }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[100] bg-[#0A130E] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#C5A869] mb-4">
          <motion.path 
            d="M50,10 L50,90 M20,40 Q20,90 50,90 Q80,90 80,40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-[#C5A869] tracking-[0.5em] text-sm font-bold"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          LOADING HRG...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// --- Custom Animated SVG Logo Symbol ---
const AnimatedLogoSymbol = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3 + 0.5, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay: i * 0.3 + 0.5, duration: 0.5 }
      }
    })
  };

  return (
    <motion.svg viewBox="0 0 120 120" className="w-32 h-32 md:w-40 md:h-40 mx-auto text-[#C5A869] drop-shadow-[0_0_20px_rgba(197,168,105,0.3)]">
      <motion.circle cx="60" cy="30" r="9" fill="currentColor" stroke="none" custom={1} initial="hidden" animate="visible" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.5 } } }} />
      <motion.path d="M 50 55 L 50 85 C 50 100, 70 100, 70 85 L 70 55" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" custom={1} initial="hidden" animate="visible" variants={draw} />
      <motion.circle cx="30" cy="45" r="7" fill="currentColor" stroke="none" custom={0} initial="hidden" animate="visible" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.2 } } }} />
      <motion.path d="M 22 65 L 22 80 C 22 95, 38 95, 38 80 L 38 65" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" custom={0} initial="hidden" animate="visible" variants={draw} />
      <motion.circle cx="90" cy="45" r="7" fill="currentColor" stroke="none" custom={2} initial="hidden" animate="visible" variants={{ hidden: { scale: 0 }, visible: { scale: 1, transition: { delay: 1.8 } } }} />
      <motion.path d="M 82 65 L 82 80 C 82 95, 98 95, 98 80 L 98 65" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" custom={2} initial="hidden" animate="visible" variants={draw} />
    </motion.svg>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const { scrollY } = useScroll();
  
  const heroImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
  ];

  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Noto+Serif+JP:wght@200;400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    const timer = setTimeout(() => setIsLoading(false), 2500);
    const interval = setInterval(() => setCurrentHeroImage(p => (p + 1) % heroImages.length), 8000);
    
    return () => {
      document.head.removeChild(link);
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'VISION', href: '#vision' },
    { name: 'WORKFLOW', href: '#workflow' },
    { name: 'MESSAGE', href: '#message' },
    { name: 'PROFILE', href: '#profile' },
  ];

  return (
    <div className="bg-[#0A130E] text-gray-100 min-h-screen selection:bg-[#C5A869] selection:text-[#0A130E] overflow-x-hidden relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* Texture Overlay (Grain) */}
      <div className="fixed inset-0 pointer-events-none z-[90] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0A130E]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-[#C5A869]" fill="currentColor">
               <circle cx="50" cy="20" r="10" />
               <path d="M35 45 L35 70 C35 85, 65 85, 65 70 L65 45" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
            <div className="flex flex-col">
              <span className="text-[#C5A869] text-xl font-bold tracking-[0.2em] leading-none" style={{ fontFamily: "'Cinzel', serif" }}>HRG</span>
              <span className="text-gray-500 text-[0.5rem] tracking-widest leading-tight" style={{ fontFamily: "'Cinzel', serif" }}>CO., LTD.</span>
            </div>
          </a>

          {/* Nav & Language UI */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-[0.7rem] tracking-[0.3em] text-gray-400 hover:text-[#C5A869] transition-all" style={{ fontFamily: "'Cinzel', serif" }}>
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2 border-l border-white/10 pl-8 ml-4">
              <span className="text-[0.6rem] text-[#C5A869]">JA</span>
              <span className="text-[0.6rem] text-gray-600">/</span>
              <span className="text-[0.6rem] text-gray-600 hover:text-gray-400 cursor-pointer">EN</span>
            </div>
            <button className="md:hidden text-[#C5A869]" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-[#0A130E] flex flex-col items-center justify-center">
            <button className="absolute top-8 right-8 text-[#C5A869]" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-3xl tracking-widest text-white" style={{ fontFamily: "'Cinzel', serif" }}>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentHeroImage}
                src={heroImages[currentHeroImage]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5 }}
                className="w-full h-[120%] object-cover filter grayscale brightness-[0.4]"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A130E]/80 via-transparent to-[#0A130E]"></div>
          </motion.div>
          
          <div className="relative z-10 text-center px-6">
            <AnimatedLogoSymbol />
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1 }}
              className="text-[#C5A869] text-5xl md:text-8xl font-bold tracking-[0.3em] mt-8 mb-4" style={{ fontFamily: "'Cinzel', serif" }}
            >
              HRG
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 1 }} className="text-gray-400 text-xs md:text-sm tracking-[0.5em] font-light uppercase flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-[#C5A869]/30"></span>
              The Noble Human Capital
              <span className="w-8 h-[1px] bg-[#C5A869]/30"></span>
            </motion.p>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="py-32 md:py-48 max-w-[1000px] mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-[#C5A869] text-[0.7rem] tracking-[0.4em] mb-12 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>Our Belief</h2>
            <h3 className="text-white text-3xl md:text-6xl font-bold tracking-widest leading-relaxed mb-16" style={{ fontFamily: "'Noto Serif JP', serif" }}>
              人を、財産として
            </h3>
            <div className="text-gray-400 leading-[2.5] text-sm md:text-lg max-w-2xl mx-auto space-y-8 font-light">
              <p>
                「Human Resources」という言葉を捨て、「Human Capital（人的財産）」を掲げる。<br className="hidden md:block"/>
                人の可能性を最大限に引き出すことこそが、企業の、そして社会の永続的な豊かさを創ると私たちは確信しています。
              </p>
            </div>
          </motion.div>
        </section>

        {/* New Section: Workflow */}
        <section id="workflow" className="py-24 md:py-32 bg-white/[0.01]">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-[#C5A869] text-2xl md:text-4xl font-bold tracking-widest mb-20 text-center" style={{ fontFamily: "'Cinzel', serif" }}>
              WORKFLOW
              <span className="block text-[0.7rem] text-gray-500 font-light mt-3 tracking-[0.3em]" style={{ fontFamily: "'Noto Serif JP', serif" }}>サービス提供の流れ</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
              {/* Connection Line Desktop */}
              <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A869]/20 to-transparent hidden md:block"></div>
              
              {[
                { step: "01", title: "ヒアリング", desc: "経営ビジョンや組織課題、求める人物像の本質を深く理解します。", icon: <Search size={24}/> },
                { step: "02", title: "サーチ・選定", desc: "単なる経歴の合致ではなく、価値観の共鳴を基準に「人財」を選定。", icon: <UserPlus size={24}/> },
                { step: "03", title: "マッチング", desc: "双方にとってベストな出会いとなるよう、多角的な視点で調整を行います。", icon: <Users size={24}/> },
                { step: "04", title: "入社後支援", desc: "入社して終わりではなく、組織での活躍と定着までを伴走支援します。", icon: <CheckCircle2 size={24}/> },
              ].map((item, i) => (
                <motion.div 
                  key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-16 h-16 rounded-full border border-[#C5A869]/20 flex items-center justify-center mb-6 bg-[#0A130E] relative z-10 group-hover:border-[#C5A869] transition-all duration-500">
                    <span className="text-[#C5A869]">{item.icon}</span>
                  </div>
                  <div className="text-[#C5A869] text-xs font-bold mb-2" style={{ fontFamily: "'Cinzel', serif" }}>STEP {item.step}</div>
                  <h4 className="text-white font-bold mb-4">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Message */}
        <section id="message" className="py-24 md:py-48 max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-20">
          <div className="md:col-span-5 relative group">
            <div className="absolute -inset-4 border border-[#C5A869]/10 rounded-sm group-hover:border-[#C5A869]/30 transition-all duration-700"></div>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" className="w-full aspect-[4/5] object-cover filter grayscale" alt="CEO" />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <Quote className="text-[#C5A869]/20 w-16 h-16 mb-8" />
            <h3 className="text-2xl md:text-4xl font-bold mb-2">梅澤 浩二</h3>
            <p className="text-[#C5A869] text-xs tracking-widest mb-10" style={{ fontFamily: "'Cinzel', serif" }}>Koji Umezawa / CEO</p>
            <div className="text-gray-400 space-y-6 text-sm md:text-base leading-loose font-light">
              <p>人材紹介とは、人生の転機に立ち会い、企業の未来を創る仕事です。私たちは、条件面のマッチングに留まらず、人と組織の「本質的な共鳴」を追求し続けます。</p>
            </div>
          </div>
        </section>

        {/* Profile & Access */}
        <section id="profile" className="py-24 bg-white/[0.01]">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[#C5A869] text-2xl font-bold tracking-widest mb-12" style={{ fontFamily: "'Cinzel', serif" }}>PROFILE</h2>
              <dl className="space-y-6">
                {[
                  { l: "会社名", v: "合同会社HRG" },
                  { l: "代表者", v: "梅澤 浩二" },
                  { l: "事業内容", v: "有料職業紹介事業 / コンサルティング" },
                  { l: "所在地", v: "〒920-0901 石川県金沢市彦三町1-2-1" },
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 flex gap-8 text-sm">
                    <dt className="text-[#C5A869] w-24 shrink-0 font-bold">{item.l}</dt>
                    <dd className="text-gray-400">{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="h-[400px] border border-white/10 grayscale invert hue-rotate-180 opacity-60 rounded-sm overflow-hidden">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.331102917711!2d136.65757231526432!3d36.56847498000302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8337728dfeb35%3A0x8e87d159d3e86c0!2z44Ki44K944Or44OG44Kj6YeR5rKi5b2m5LiJ!5e0!3m2!1sja!2sjp!4v1698765432109!5m2!1sja!2sjp" width="100%" height="100%" loading="lazy" style={{border:0}}></iframe>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-40 relative flex flex-col items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C5A869]/20 blur-[100px] pointer-events-none"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 leading-tight">未来を創る、<br/>対話を始めましょう。</h2>
            <button className="group border border-[#C5A869] text-[#C5A869] px-12 py-5 rounded-full flex items-center gap-4 hover:bg-[#C5A869] hover:text-[#0A130E] transition-all duration-500 font-bold tracking-widest mx-auto">
              CONTACT US <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[#C5A869] font-bold tracking-[0.4em] mb-4" style={{ fontFamily: "'Cinzel', serif" }}>HRG</p>
        <p className="text-gray-600 text-[0.6rem] tracking-widest">&copy; {new Date().getFullYear()} HRG CO., LTD. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
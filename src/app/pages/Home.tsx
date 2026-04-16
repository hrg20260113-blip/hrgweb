import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { AnimatedLogoSymbol, TypingText } from '../components/shared-components';

const heroImage1 = "https://images.unsplash.com/photo-1622131815452-cc00d8d89f02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzIxNTU5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const heroImage2 = "https://images.unsplash.com/photo-1758873269317-51888e824b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc3MjEwODIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const visionBgImage = "https://images.unsplash.com/photo-1766835539316-6fc22766eab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwaG9yaXpvbiUyMGhvcGUlMjBwZWFjZWZ1bCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzIyNDQwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const Home = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const { scrollY } = useScroll();
  const heroImages = [heroImage1, heroImage2];
  const heroY = useTransform(scrollY, [0, 1000], [0, 400]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentHeroImage(p => (p + 1) % heroImages.length), 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroImage}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
              className="w-full h-[120%]"
            >
              <ImageWithFallback
                src={heroImages[currentHeroImage]}
                className="w-full h-full object-cover brightness-[0.4]"
                alt="Hero"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#091810]/80 via-transparent to-[#091810]"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <AnimatedLogoSymbol />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.2, duration: 1 }}
            className="text-[#D4AF37] text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] sm:tracking-[0.3em] mt-6 sm:mt-8 mb-3 sm:mb-4" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
          >
            HRG
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.8, duration: 1 }} className="text-[#D1D5DC] text-[0.6rem] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase flex items-center justify-center gap-3 sm:gap-4" style={{ fontWeight: 300 }}>
            <span className="w-8 h-[1px] bg-[#D4AF37]/30"></span>
            The Noble Human Capital
            <span className="w-8 h-[1px] bg-[#D4AF37]/30"></span>
          </motion.p>
        </div>
      </section>

      {/* Vision */}
      <section id="vision" className="py-20 sm:py-32 md:py-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={visionBgImage}
            className="w-full h-full object-cover"
            alt="Vision"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091810] via-[#091810]/60 to-[#091810]"></div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[1000px] mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-[#D4AF37] text-[0.7rem] tracking-[0.4em] mb-8 sm:mb-12 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>Our Belief</h2>
          <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl tracking-widest leading-relaxed mb-10 sm:mb-16" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700 }}>
            <TypingText text="人を、財産として" />
          </h3>
          <div className="text-white leading-[2.2] sm:leading-[2.5] text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl mx-auto space-y-6 sm:space-y-8" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
            <p>
              一般的に「Human Resources」 は人材資源と訳されます。<br className="hidden md:block"/>
              しかしHRGでは、人を消費される材料としてではなく、 価値を生み続ける財産 (Human Capital) と考えています。<br className="hidden md:block"/>
              人の可能性を正しく評価し、育て、活かすこと。<br className="hidden md:block"/>
              それが企業の成長と、個人の幸せにつながると私たちは信じています。
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

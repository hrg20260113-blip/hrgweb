import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { CheckCircle2, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// --- Preloader Component ---
export const Preloader = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }}
      className="fixed inset-0 z-[100] bg-[#091810] flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <svg viewBox="0 0 100 100" className="w-24 h-24 text-[#D4AF37] mb-4">
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
          className="text-[#D4AF37] tracking-[0.5em] text-sm"
          style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
        >
          LOADING HRG...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// --- Custom Animated SVG Logo Symbol ---
export const AnimatedLogoSymbol = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3 + 0.5, type: "spring", duration: 2.5, bounce: 0 },
        opacity: { delay: i * 0.3 + 0.5, duration: 0.5 }
      }
    })
  };

  const scaleVariants = (delay: number) => ({
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { delay } }
  });

  return (
    <motion.svg viewBox="0 0 120 120" className="w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]">
      <motion.circle cx="60" cy="30" r="9" fill="currentColor" stroke="none" custom={1} initial="hidden" animate="visible" variants={scaleVariants(1.5)} />
      <motion.path d="M 50 55 L 50 85 C 50 100, 70 100, 70 85 L 70 55" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" custom={1} initial="hidden" animate="visible" variants={draw} />
      <motion.circle cx="30" cy="45" r="7" fill="currentColor" stroke="none" custom={0} initial="hidden" animate="visible" variants={scaleVariants(1.2)} />
      <motion.path d="M 22 65 L 22 80 C 22 95, 38 95, 38 80 L 38 65" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" custom={0} initial="hidden" animate="visible" variants={draw} />
      <motion.circle cx="90" cy="45" r="7" fill="currentColor" stroke="none" custom={2} initial="hidden" animate="visible" variants={scaleVariants(1.8)} />
      <motion.path d="M 82 65 L 82 80 C 82 95, 98 95, 98 80 L 98 65" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" custom={2} initial="hidden" animate="visible" variants={draw} />
    </motion.svg>
  );
};

// --- Typing Animation Component (scroll-triggered) ---
export const TypingText = ({ text, className = "", style = {} }: { text: string; className?: string; style?: React.CSSProperties }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const chars = text.split('');

  return (
    <span ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
      {/* Blinking cursor that appears then fades */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
        transition={{
          delay: chars.length * 0.1 + 0.2,
          duration: 1.5,
          times: [0, 0.05, 0.7, 1],
        }}
        className="inline-block w-[2px] h-[0.9em] bg-[#D4AF37]/60 ml-1 align-middle"
      />
    </span>
  );
};

// --- Contact Form Component ---
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    type: '',
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center mb-8">
          <CheckCircle2 size={40} className="text-[#D4AF37]" />
        </div>
        <h3 className="text-2xl md:text-3xl mb-4" style={{ fontWeight: 700 }}>送信完了</h3>
        <p className="text-white text-sm leading-loose" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
          お問い合わせいただき、誠にありがとうございます。<br />
          内容を確認の上、担当者より折り返しご連絡いたします。
        </p>
      </motion.div>
    );
  }

  const inputClass = "w-full bg-transparent border border-white/10 rounded-sm px-4 sm:px-5 py-3.5 sm:py-4 text-sm text-[#D1D5DC] placeholder-[#99A1AF] focus:border-[#D4AF37]/50 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Type */}
      <div>
        <label className="block text-[#D4AF37] text-xs tracking-widest mb-3" style={{ fontWeight: 700 }}>
          お問い合わせ種別 <span className="text-[#D4AF37]">*</span>
        </label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{ fontWeight: 300 }}
        >
          <option value="" className="bg-[#091810]">選択してください</option>
          <option value="recruitment" className="bg-[#091810]">人材紹介について</option>
          <option value="consulting" className="bg-[#091810]">コンサルティングについて</option>
          <option value="career" className="bg-[#091810]">キャリア相談</option>
          <option value="other" className="bg-[#091810]">その他</option>
        </select>
      </div>

      {/* Company & Name */}
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label className="block text-[#D4AF37] text-xs tracking-widest mb-3" style={{ fontWeight: 700 }}>会社名</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="例：株式会社○○" className={inputClass} style={{ fontWeight: 300 }} />
        </div>
        <div>
          <label className="block text-[#D4AF37] text-xs tracking-widest mb-3" style={{ fontWeight: 700 }}>
            お名前 <span className="text-[#D4AF37]">*</span>
          </label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="例：山田 太郎" className={inputClass} style={{ fontWeight: 300 }} />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label className="block text-[#D4AF37] text-xs tracking-widest mb-3" style={{ fontWeight: 700 }}>
            メールアドレス <span className="text-[#D4AF37]">*</span>
          </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="例：info@example.com" className={inputClass} style={{ fontWeight: 300 }} />
        </div>
        <div>
          <label className="block text-[#D4AF37] text-xs tracking-widest mb-3" style={{ fontWeight: 700 }}>電話番号</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="例：076-XXX-XXXX" className={inputClass} style={{ fontWeight: 300 }} />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-[#D4AF37] text-xs tracking-widest mb-3" style={{ fontWeight: 700 }}>
          お問い合わせ内容 <span className="text-[#D4AF37]">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="お問い合わせ内容をご記入ください"
          className={`${inputClass} resize-none`}
          style={{ fontWeight: 300 }}
        />
      </div>

      {/* Privacy Note */}
      <p className="text-[#99A1AF] text-[0.65rem] leading-relaxed">
        ご入力いただいた個人情報は、お問い合わせへの対応のみに使用し、第三者に提供することはございません。
      </p>

      {/* Submit */}
      <div className="pt-4">
        <button
          type="submit"
          className="group border border-[#D4AF37] text-[#D4AF37] w-full sm:w-auto justify-center px-8 sm:px-12 py-4 sm:py-5 rounded-full flex items-center gap-4 hover:bg-[#D4AF37] hover:text-[#000000] transition-all duration-500 tracking-widest"
          style={{ fontWeight: 700 }}
        >
          <Send size={16} className="group-hover:translate-x-1 transition-transform" />
          送信する
        </button>
      </div>
    </form>
  );
};

// --- Photo Break Component ---
export const PhotoBreak = ({ image, alt }: { image: string; alt: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -top-[20%] -bottom-[20%]">
        <ImageWithFallback
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#091810] via-transparent to-[#091810]"></div>
    </div>
  );
};

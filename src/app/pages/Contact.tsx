import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { ContactForm } from '../components/shared-components';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const contactHeroImage = "https://images.unsplash.com/photo-1774544368113-b66148dab467?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NTI2NjU3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={contactHeroImage}
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Contact Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091810]/80 via-transparent to-[#091810]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3, duration: 1 }}
            className="text-[#D4AF37] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4" 
            style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
          >
            CONTACT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }} 
            className="text-[#D1D5DC] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em]" 
            style={{ fontWeight: 300 }}
          >
            お問い合わせ
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Section Header */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
            <h2 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
              CONTACT
            </h2>
            <p className="text-[#99A1AF] text-[0.7rem] tracking-[0.3em]" style={{ fontWeight: 300 }}>お問い合わせ</p>
            <p className="text-white text-sm mt-8 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
              人材に関するご相談、サービスに関するご質問など、<br className="hidden md:block"/>お気軽にお問い合わせください。
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-4"
            >
              <h3 className="text-[#D4AF37] text-sm tracking-widest mb-8 sm:mb-10" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
                INFORMATION
              </h3>
              <div className="space-y-6 sm:space-y-8 grid grid-cols-1 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:grid-cols-1 lg:gap-0 lg:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs tracking-widest mb-2" style={{ fontWeight: 700 }}>所在地</p>
                    <p className="text-white text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>
                      〒920-0901<br />
                      石川県金沢市彦三町1-2-1<br />
                      アソルティ金沢彦三1F
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs tracking-widest mb-2" style={{ fontWeight: 700 }}>電話番号</p>
                    <p className="text-white text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}><a href="tel:090-3333-1979" className="hover:text-[#D4AF37] transition-colors">090-3333-1979</a></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <p className="text-[#D4AF37] text-xs tracking-widest mb-2" style={{ fontWeight: 700 }}>メールアドレス</p>
                    <p className="text-white text-sm" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}><a href="mailto:saiyou@hrg-co.jp" className="hover:text-[#D4AF37] transition-colors">saiyou@hrg-co.jp</a></p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
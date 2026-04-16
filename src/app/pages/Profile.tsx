import React from 'react';
import { motion } from 'motion/react';
import { Quote, Eye, Handshake, Target } from 'lucide-react';
import exteriorImage from 'figma:asset/a683c8060c339768f43a80f5203b7977b65eb88c.png';
import ceoImage from 'figma:asset/d34516a57ee1ca41f1e996c3069db3a7502df52e.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PhotoBreak } from '../components/shared-components';

const whyHrgImage1 = "https://images.unsplash.com/photo-1740818576358-7596eb883cf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwY29uc3VsdGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzIyNDMyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const whyHrgImage2 = "https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwJTIwdHJ1c3R8ZW58MXx8fHwxNzcyMjAxMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const whyHrgImage3 = "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc3MjI0MzIzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const breakImage1 = "https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwZGlzY3Vzc2lvbiUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzIyNDkxMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const breakImage2 = "https://images.unsplash.com/photo-1764885532632-d14d0c09d367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZSUyMGdvbGRlbiUyMGhvdXIlMjBhZXJpYWx8ZW58MXx8fHwxNzcyMjQ5MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const Profile = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={exteriorImage}
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Profile Hero"
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
            ABOUT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }} 
            className="text-[#D1D5DC] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em]" 
            style={{ fontWeight: 300 }}
          >
            会社概要
          </motion.p>
        </div>
      </section>

      {/* Profile & Access */}
      <section id="profile" className="py-16 sm:py-24 md:py-32 bg-[#162B1F]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
            <div>
              <h2 className="text-[#D4AF37] text-2xl tracking-widest mb-8 sm:mb-12" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>PROFILE</h2>
              <dl className="space-y-6">
                {[
                  { l: "会社名", v: "合同会社HRG" },
                  { l: "代表者", v: "梅澤 浩二" },
                  { l: "事業内容", v: "通信事業 / イベントプロモーション / グローバル人材支援" },
                  { l: "所在地", v: "〒920-0901 石川県金沢市彦三町1-2-1アソルティ金沢彦三1F" },
                ].map((item, i) => (
                  <div key={i} className="border-b border-white/5 pb-4 flex flex-col sm:flex-row gap-1.5 sm:gap-8 text-sm">
                    <dt className="text-[#D4AF37] sm:w-24 shrink-0 text-xs sm:text-sm tracking-wider" style={{ fontWeight: 700 }}>{item.l}</dt>
                    <dd className="text-white text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{item.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="h-[260px] sm:h-[350px] md:h-[400px] border border-white/10 rounded-sm overflow-hidden">
              <ImageWithFallback
                src={exteriorImage}
                alt="会社外観"
                className="w-full h-full object-cover transition-all duration-700"
              />
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <p className="text-[#D4AF37] text-xs tracking-widest mb-4 sm:mb-6" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>ACCESS</p>
            <a href="https://www.google.com/maps/place/%E3%82%A2%E3%82%BD%E3%83%AB%E3%83%86%E3%82%A3%E9%87%91%E6%B2%A2%E5%BD%A6%E4%B8%89/@36.5684750,136.6575723,17z" target="_blank" rel="noopener noreferrer" className="block w-full h-[180px] sm:h-[280px] md:h-[350px] lg:h-[400px] rounded-sm overflow-hidden border border-white/10 opacity-60 hover:opacity-80 transition-opacity duration-500 relative cursor-pointer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3204.331102917711!2d136.65757231526432!3d36.56847498000302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff8337728dfeb35%3A0x8e87d159d3e86c0!2z44Ki44K944Or44OG44Kj6YeR5rKi5b2m5LiJ!5e0!3m2!1sja!2sjp!4v1698765432109!5m2!1sja!2sjp" width="100%" height="100%" loading="lazy" style={{border:0}} title="Map"></iframe>
              <div className="absolute inset-0 z-10"></div>
            </a>
            <p className="text-[#99A1AF] text-xs mt-3 tracking-wider" style={{ fontWeight: 300 }}>アソルティ金沢彦三 1F</p>
          </div>
        </div>
      </section>

      {/* Photo Break */}
      <PhotoBreak image={breakImage1} alt="Team collaboration" />

      {/* Message */}
      <section id="message" className="py-16 sm:py-24 md:py-32 lg:py-48">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 lg:gap-20">
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-4 border border-[#D4AF37]/10 rounded-sm group-hover:border-[#D4AF37]/30 transition-all duration-700 hidden md:block"></div>
          <img src={ceoImage} className="w-full aspect-[4/5] object-cover" alt="CEO" />
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
          <Quote className="text-[#D4AF37]/20 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 mb-4 sm:mb-6 md:mb-8" />
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2" style={{ fontWeight: 700 }}>梅澤 浩二</h3>
          <p className="text-[#D4AF37] text-[0.65rem] sm:text-xs tracking-widest mb-6 sm:mb-8 md:mb-10" style={{ fontFamily: "'Cinzel', serif" }}>Koji Umezawa / CEO</p>
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 text-xs sm:text-sm md:text-base leading-relaxed sm:leading-loose" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
            <p>ヒューマンリソースグループ (HRG) のホームページをご覧いただき、誠にありがとうございます。</p>
            <p>私たちは創業以来、一貫して「人は資源ではなく、財産である」という考えを大切にしてきました。<br className="hidden md:block"/>
              人は単に働くための存在ではなく、可能性を持ち、成長し、価値を生み続ける存在です。</p>
            <p>人材紹介という仕事は、単に人を紹介することではありません。<br className="hidden md:block"/>
              個人の人生と、企業の未来、その両方に深く関わる責任ある仕事だと考えています。</p>
            <p>HRGは、目先の条件や効率だけにとらわれず、<br className="hidden md:block"/>
              人と企業が長期的に信頼し合い、共に成長できる関係を築くことを目指しています。</p>
            <p>人の価値を正しく見つめ、その可能性を最大限に活かす。<br className="hidden md:block"/>
              その積み重ねが、企業の成長、そして社会全体の発展につながると信じています。</p>
            <p>今後とも、ヒューマンリソースグループをどうぞよろしくお願いいたします。</p>
          </div>
        </div>
        </div>
      </section>

      {/* Photo Break */}
      <PhotoBreak image={breakImage2} alt="City skyline" />

      {/* Why HRG */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
            <h2 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
              WHY HRG
            </h2>
            <p className="text-[#99A1AF] text-[0.7rem] tracking-[0.3em]" style={{ fontWeight: 300 }}>HRGが選ばれる理由</p>
          </motion.div>

          <div className="space-y-16 sm:space-y-24 md:space-y-32">
            {[
              {
                num: "01",
                title: "人を「人財」として見る視点",
                desc: "表面的なスキルだけでなく、人の本質的な価値を見極めます。一人ひとりの可能性を最大限に引き出す視点を持っています。",
                icon: <Eye size={24} />,
                image: whyHrgImage1,
              },
              {
                num: "02",
                title: "企業・求職者どちらにも誠実",
                desc: "短期的な紹介ではなく、継続的な信頼関係を重視します。双方にとっての最善を常に追求しています。",
                icon: <Handshake size={24} />,
                image: whyHrgImage2,
              },
              {
                num: "03",
                title: "長期視点のマッチング",
                desc: "入社後の活躍・定着までを見据えた提案を行います。短期の成果ではなく、永続的な成長を支援します。",
                icon: <Target size={24} />,
                image: whyHrgImage3,
              },
            ].map((item, i) => {
              const isReversed = i % 2 !== 0;
              return (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8 }}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-0 items-stretch`}
                >
                  {/* Image Side */}
                  <div className={`relative overflow-hidden group ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="aspect-[4/3] md:aspect-auto md:h-full relative">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-${isReversed ? 'l' : 'r'} from-transparent via-transparent to-[#091810]/80 hidden md:block`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#091810]/80 via-transparent to-transparent md:hidden"></div>
                      {/* Large Number Overlay */}
                      <div className={`absolute top-6 ${isReversed ? 'right-6' : 'left-6'} md:top-8 ${isReversed ? 'md:right-8' : 'md:left-8'}`}>
                        <span
                          className="text-[#D4AF37]/15 text-7xl sm:text-8xl md:text-9xl"
                          style={{ fontFamily: "'Cinzel', serif", fontWeight: 700, lineHeight: 1 }}
                        >
                          {item.num}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className={`flex flex-col justify-center ${isReversed ? 'md:order-1 md:pr-8 lg:pr-16' : 'md:order-2 md:pl-8 lg:pl-16'} px-2 sm:px-4 md:px-0 py-4 sm:py-6 md:py-12`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-[1px] h-8 bg-[#D4AF37]/30"></div>
                      <span
                        className="text-[#D4AF37] text-xs tracking-[0.4em]"
                        style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}
                      >
                        REASON {item.num}
                      </span>
                    </div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-[#D4AF37]/20 flex items-center justify-center mb-6 sm:mb-8 group-hover:border-[#D4AF37] transition-all duration-500">
                      <span className="text-[#D4AF37]">{item.icon}</span>
                    </div>
                    <h4 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider mb-4 sm:mb-6" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700 }}>
                      {item.title}
                    </h4>
                    <p className="text-white text-sm md:text-base leading-[2] max-w-md" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
                      {item.desc}
                    </p>
                    <div className="mt-8 w-12 h-[1px] bg-[#D4AF37]/30"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
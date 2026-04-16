import React from 'react';
import { motion } from 'motion/react';
import { Phone, Users, UserPlus, ArrowRight, Search, CheckCircle2 } from 'lucide-react';
import recruitBgImage from 'figma:asset/64aba2a6bf7f1ef29c0078cbbf52a4e7fa4d141c.png';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export const Business = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={recruitBgImage}
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Business Hero"
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
            BUSINESS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }} 
            className="text-[#D1D5DC] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em]" 
            style={{ fontWeight: 300 }}
          >
            事業内容
          </motion.p>
        </div>
      </section>

      {/* Business - 事業内容 */}
      <section id="business" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={recruitBgImage}
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Team"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091810] via-transparent to-[#091810]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-20">
            <h2 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
              BUSINESS
            </h2>
            <p className="text-[#99A1AF] text-[0.7rem] tracking-[0.3em]" style={{ fontWeight: 300 }}>事業内容</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: <Phone size={28} />,
                title: "通信事業",
                desc: "モバイル通信の販売支援・営業代行",
                detail: "モバイル通信サービスを中心とした営業代行や店頭販売のサポートを行います。専門知識を持つスタッフが現場に入り、店舗運営や販売業務を直接バックアップし、売上向上に貢献します。",
              },
              {
                icon: <Users size={28} />,
                title: "イベントプロモーション事業",
                desc: "イベントの設営から販売まで",
                detail: "キャリアショップや家電量販店等での販促イベントを総合的にサポートします。接客スキルの高いスタッフのキャスティングから、ブース設営、当日の販売営業までワンストップで対応いたします。",
              },
              {
                icon: <UserPlus size={28} />,
                title: "グローバル人材支援事業",
                desc: "即戦力となる外国人材の育成・紹介",
                detail: "特定技能1号の取得や長期雇用 (5年)を見据え、外国人材の育成と企業マッチングを行います。 自社で日本のビジネスマナーやコミュニケーションを教育し、即戦力として企業様へご紹介します。技能実習生の雇用も積極的に行っています。",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border border-white/5 rounded-sm p-6 sm:p-8 hover:border-[#D4AF37]/20 transition-all duration-500 group bg-[#091810]/60 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center mb-5 group-hover:border-[#D4AF37] transition-all duration-500">
                  <span className="text-[#D4AF37]">{item.icon}</span>
                </div>
                <h4 className="text-white mb-3 text-base sm:text-lg" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700 }}>【{item.title}】</h4>
                <p className="text-[#D4AF37] text-xs sm:text-sm mb-3" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>{item.desc}</p>
                <p className="text-white text-xs sm:text-sm leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* 今後のビジョン */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="border-2 border-[#D4AF37]/20 rounded-sm p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[#091810]/90 to-[#0B3D2E]/50 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4 sm:gap-6 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D4AF37]/10 border-2 border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                <ArrowRight size={28} className="text-[#D4AF37]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-lg sm:text-xl md:text-2xl mb-2 tracking-wide" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 700 }}>
                  【今後の展望】
                </h3>
                <p className="text-[#D4AF37] text-sm sm:text-base mb-4" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 500 }}>
                  福祉・介護領域への新たな挑戦
                </p>
              </div>
            </div>
            <div className="pl-0 sm:pl-[88px] text-white text-sm sm:text-base leading-relaxed" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300, lineHeight: "2" }}>
              <p>
                今後はこれまでのノウハウを活かし、福祉・介護業界への展開を視野に入れています。動物の命を繋ぐ保護犬猫カフェと、障がいをお持ちの方の働く場（就労継続支援B型など）を融合した「福祉型保護犬猫カフェ」の運営を通じて、社会参加を支援してまいります。また、高齢者と障がい者が自然に交流し支え合える環境づくりなど、社会課題の解決に向けて果敢に挑戦してまいります。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="py-16 sm:py-24 md:py-32 bg-[#162B1F]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <h2 className="text-[#D4AF37] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-widest mb-12 sm:mb-20 text-center" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
            WORKFLOW
            <span className="block text-[0.7rem] text-[#99A1AF] mt-3 tracking-[0.3em]" style={{ fontFamily: "'Noto Serif JP', serif", fontWeight: 300 }}>サービス提供の流れ</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 relative">
            {/* Connection Line Desktop */}
            <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent hidden lg:block"></div>
            
            {[
              { step: "01", title: "ヒアリング", desc: "経営ビジョンや組織課題、求める人物像の本質を深く理解します。", icon: <Search size={24}/> },
              { step: "02", title: "サーチ・選定", desc: "単なる経歴の合致ではなく、価値観の共鳴を基準に「人財」を選定。", icon: <UserPlus size={24}/> },
              { step: "03", title: "マッチング", desc: "双方にとってベストな出会いとなるよう、多角的な視点で調整を行います。", icon: <Users size={24}/> },
              { step: "04", title: "入社後支援", desc: "入社して終わりではなく、組織での活躍と定着までを伴走支援します。", icon: <CheckCircle2 size={24}/> },
            ].map((item, i) => (
              <motion.div 
                key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#D4AF37]/20 flex items-center justify-center mb-4 sm:mb-6 bg-[#091810] relative z-10 group-hover:border-[#D4AF37] transition-all duration-500">
                  <span className="text-[#D4AF37]">{item.icon}</span>
                </div>
                <div className="text-[#D4AF37] text-xs mb-2" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>STEP {item.step}</div>
                <h4 className="text-white mb-3 sm:mb-4" style={{ fontWeight: 700 }}>{item.title}</h4>
                <p className="text-white text-xs leading-relaxed px-2 sm:px-4 max-w-[280px] sm:max-w-none mx-auto" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Mail } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { PhotoBreak } from '../components/shared-components';

const jobDescBgImage = "https://images.unsplash.com/photo-1765728617218-ad98ff3c3e35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3dwcmtpbmclMjBzcGFjZSUyMGludGVyaW9yJTIwd29ya2luZ3xlbnwxfHx8fDE3NzIyNDMyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const breakImage3 = "https://images.unsplash.com/photo-1533478784933-5fdbddc8ea7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdhbGtpbmclMjBmb3J3YXJkJTIwbGlnaHR8ZW58MXx8fHwxNzcyMjQ5MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export const Jobs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={jobDescBgImage}
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Jobs Hero"
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
            RECRUIT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }} 
            className="text-[#D1D5DC] text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em]" 
            style={{ fontWeight: 300 }}
          >
            採用情報
          </motion.p>
        </div>
      </section>

      {/* Photo Break */}
      <PhotoBreak image={breakImage3} alt="Moving forward" />

      {/* Job Description */}
      <section id="jobs" className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={jobDescBgImage}
            className="w-full h-full object-cover"
            alt="Job Description"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#091810] via-[#091810]/60 to-[#091810]"></div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header - モバイルのみ中央表示 */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 sm:mb-16 lg:hidden">
            <h2 className="text-[#D4AF37] text-2xl tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
              JOB DESCRIPTION
            </h2>
            <p className="text-[#99A1AF] text-[0.7rem] tracking-[0.3em]" style={{ fontWeight: 300 }}>募集要項</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-20">
            {/* Left: Sticky Column */}
            <div className="hidden lg:flex lg:col-span-4 lg:flex-col">
              <div className="sticky top-32">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                  <h2 className="text-[#D4AF37] text-2xl lg:text-4xl tracking-widest mb-4" style={{ fontFamily: "'Cinzel', serif", fontWeight: 700 }}>
                    JOB<br />DESCRIPTION
                  </h2>
                  <p className="text-[#99A1AF] text-[0.7rem] tracking-[0.3em] mb-10" style={{ fontWeight: 300 }}>募集要項</p>
                  <div className="w-12 h-[1px] bg-[#D4AF37]/30 mb-10"></div>
                  <p className="text-white text-sm leading-[2] mb-12" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>
                    HRGでは共に成長できる<br />仲間を募集しています。<br />まずはお気軽にご連絡ください。
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full hover:bg-[#D4AF37] hover:text-[#000000] transition-all duration-500 tracking-widest group text-sm"
                    style={{ fontWeight: 700 }}
                  >
                    <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                    応募する
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Right: Scrollable Details */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              {/* Job 1: 携帯販売イベントスタッフ */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="border border-[#D4AF37]/20 rounded-lg p-5 sm:p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm">
                  <h3 className="text-[#D4AF37] text-base sm:text-lg tracking-wider mb-6 sm:mb-8" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700 }}>
                    携帯販売イベントスタッフ<span className="block sm:inline mt-2 sm:mt-0 sm:ml-3 text-xs border border-[#D4AF37]/40 rounded-full px-3 py-1 w-fit" style={{ fontWeight: 500 }}>アルバイト</span>
                  </h3>
                  <dl className="space-y-0">
                    {[
                      { label: "勤務時間", value: "10:00〜18:00（休憩1時間 / 実労7時間）" },
                      { label: "勤務日", value: "土日祝" },
                      { label: "給与", value: "時給 1,300円〜" },
                      { label: "交通費", value: "交通費手当あり（当社規定）" },
                      { label: "勤務地", value: "石川県内" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-white/5 py-4 sm:py-6 md:py-8 flex flex-col sm:flex-row gap-1.5 sm:gap-10 group hover:bg-white/[0.02] px-3 sm:px-4 -mx-3 sm:-mx-4 transition-colors duration-300"
                      >
                        <dt className="text-[#D4AF37] w-24 sm:w-28 shrink-0 text-xs sm:text-sm tracking-widest" style={{ fontWeight: 700 }}>{item.label}</dt>
                        <dd className="text-white text-xs sm:text-sm leading-loose whitespace-pre-line" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>{item.value}</dd>
                      </motion.div>
                    ))}
                  </dl>
                </div>
              </motion.div>

              {/* Job 2: 通信キャリア特別販売員 */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="border border-[#D4AF37]/20 rounded-lg p-5 sm:p-6 md:p-8 bg-white/[0.02] backdrop-blur-sm">
                  <h3 className="text-[#D4AF37] text-base sm:text-lg tracking-wider mb-6 sm:mb-8" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 700 }}>
                    通信キャリア特別販売員<span className="block sm:inline mt-2 sm:mt-0 sm:ml-3 text-xs border border-[#D4AF37]/40 rounded-full px-3 py-1 w-fit" style={{ fontWeight: 500 }}>業務委託 / アルバイト / 社員</span>
                  </h3>
                  <dl className="space-y-0">
                    {[
                      { label: "給与", value: "月固定給\n未経験：220,000円〜\n経験者：250,000円〜（面談により決定）" },
                      { label: "勤務時間", value: "10:00〜19:00（休憩1時間 / 実労8時間）" },
                      { label: "休日", value: "週休2日（完全固定）" },
                      { label: "勤務地", value: "石川県・富山県・福井県" },
                      { label: "交通費", value: "全額支給（車通勤の場合、ガソリン代は当社規定）" },
                      { label: "その他", value: "車通勤大歓迎\n宿泊費全額支給" },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="border-b border-white/5 py-4 sm:py-6 md:py-8 flex flex-col sm:flex-row gap-1.5 sm:gap-10 group hover:bg-white/[0.02] px-3 sm:px-4 -mx-3 sm:-mx-4 transition-colors duration-300"
                      >
                        <dt className="text-[#D4AF37] w-24 sm:w-28 shrink-0 text-xs sm:text-sm tracking-widest" style={{ fontWeight: 700 }}>{item.label}</dt>
                        <dd className="text-white text-xs sm:text-sm leading-loose whitespace-pre-line" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 300 }}>{item.value}</dd>
                      </motion.div>
                    ))}
                  </dl>
                </div>
              </motion.div>

              {/* モバイル用CTA */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12 lg:hidden">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 border border-[#D4AF37] text-[#D4AF37] w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full hover:bg-[#D4AF37] hover:text-[#000000] transition-all duration-500 tracking-widest group"
                  style={{ fontWeight: 700 }}
                >
                  <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
                  応募・お問い合わせ
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
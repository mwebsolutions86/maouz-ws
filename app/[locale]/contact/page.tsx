'use client';

import React from 'react';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <div className="max-w-6xl mx-auto relative z-10 pb-20">
        
        <div className="mb-12 md:mb-20 text-center">
            <HorizontalParallax direction={-1} speed={20}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4">{t('subtitle')}</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={40}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>{t('title_1')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">{t('title_2')}</span>
                </h1>
            </HorizontalParallax>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">{t('form_name')}</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500/50 transition-all text-sm" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">{t('form_email')}</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500/50 transition-all text-sm" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">{t('form_type')}</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500/50 transition-all text-sm">
                            <option className="bg-black">Développement Mobile</option>
                            <option className="bg-black">Site Web Immersif</option>
                            <option className="bg-black">Architecture SaaS</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">{t('form_desc')}</label>
                        <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-cyan-500/50 transition-all resize-none text-sm" />
                    </div>
                    <button type="submit" className="w-full group bg-white text-black font-black text-base md:text-lg py-4 md:py-5 rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                        {t('form_btn')} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col justify-center gap-8 md:gap-10 md:pl-10">
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> {t('status_title')}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">{t('status_desc')}</p>
                </div>
                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-4 p-4 md:p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                        <div className="bg-cyan-500/10 p-2 md:p-3 rounded-lg"><Mail className="text-cyan-400" size={20} /></div>
                        <div><h4 className="font-bold text-white text-[10px] md:text-sm tracking-widest mb-1">{t('direct_com')}</h4><a href="mailto:mazouzwebsolutions@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-lg break-all">mazouzwebsolutions@gmail.com</a></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 md:p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                        <div className="bg-purple-500/10 p-2 md:p-3 rounded-lg"><MapPin className="text-purple-400" size={20} /></div>
                        <div><h4 className="font-bold text-white text-[10px] md:text-sm tracking-widest mb-1">{t('base_op')}</h4><p className="text-gray-400 text-sm md:text-lg">Digital HQ • Worldwide</p></div>
                    </div>
                    <div className="flex items-start gap-4 p-4 md:p-6 border border-white/5 rounded-2xl bg-white/[0.02]">
                        <div className="bg-blue-500/10 p-2 md:p-3 rounded-lg"><MessageSquare className="text-blue-400" size={20} /></div>
                        <div><h4 className="font-bold text-white text-[10px] md:text-sm tracking-widest mb-1">{t('socials')}</h4>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-bold">LINKEDIN</a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-bold">TWITTER / X</a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-bold">GITHUB</a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Scale, AlertTriangle, Copyright, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function TermsPage() {
  const t = useTranslations('TermsPage');

  return (
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <div className="max-w-4xl mx-auto relative z-10 pb-20">
        
        <div className="mb-16 md:mb-24 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">{t('subtitle')}</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-none">
                    {t('title')}
                </h1>
            </HorizontalParallax>
        </div>

        <div className="space-y-8">
            
            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Scale size={20} className="text-cyan-500" /> 1. {t('obj_title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('obj_text')}
                </p>
            </section>

            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Copyright size={20} className="text-cyan-500" /> 2. {t('ip_title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('ip_text')}
                </p>
            </section>

            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <AlertTriangle size={20} className="text-cyan-500" /> 3. {t('resp_title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t('resp_text')}
                </p>
            </section>

            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Globe size={20} className="text-cyan-500" /> 4. {t('law_title')}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('law_text')}
                </p>
            </section>

        </div>
      </div>
    </div>
  );
}
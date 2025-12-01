'use client';

import React from 'react';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { useTranslations } from 'next-intl';

export default function LegalPage() {
  const t = useTranslations('LegalPage');

  return (
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <div className="max-w-4xl mx-auto relative z-10 pb-20">
        
        <div className="mb-16 md:mb-24 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">{t('subtitle')}</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none">
                    {t('title')}
                </h1>
            </HorizontalParallax>
        </div>

        <div className="space-y-8 md:space-y-12 text-gray-300 leading-relaxed font-light text-sm md:text-base">
            
            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">01.</span> {t('editor_title')}
                </h3>
                <p className="mb-4">{t('editor_text')}</p>
                <ul className="space-y-3 font-mono text-xs md:text-sm">
                    <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <strong className="text-white min-w-[150px]">Dénomination sociale :</strong> 
                        <span>STE MAZOUZ WEB SOLUTIONS SARL</span>
                    </li>
                    <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <strong className="text-white min-w-[150px]">Siège social :</strong> 
                        <span>C/O AGENCE MAROCAINE D&apos;INTELLIGENCE ÉCONOMIQUE, DR TAGADIRT NAABADOU, DRARGA, AGADIR, MAROC</span>
                    </li>
                    <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <strong className="text-white min-w-[150px]">R.C :</strong> 
                        <span>55923</span>
                    </li>
                    <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <strong className="text-white min-w-[150px]">I.C.E :</strong> 
                        <span>003320361000078</span>
                    </li>
                    <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <strong className="text-white min-w-[150px]">I.F :</strong> 
                        <span>53866851</span>
                    </li>
                    <li className="flex flex-col md:flex-row gap-1 md:gap-2">
                        <strong className="text-white min-w-[150px]">Email :</strong> 
                        <a href="mailto:contact@mazouzws.com" className="text-cyan-400 hover:underline">contact@mazouzws.com</a>
                    </li>
                </ul>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">02.</span> {t('hosting_title')}
                </h3>
                <p>{t('hosting_text')}</p>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">03.</span> {t('ip_title')}
                </h3>
                <p>{t('ip_text')}</p>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">04.</span> {t('data_title')}
                </h3>
                <p>{t('data_text')}</p>
            </section>

        </div>
      </div>
    </div>
  );
}
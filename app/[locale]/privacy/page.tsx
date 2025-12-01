'use client';

import React from 'react';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('PrivacyPage');

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
            
            <section className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                        <Shield className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">1. {t('collect_title')}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t('collect_text')}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-300 text-sm font-mono">
                    <li>Identité (Nom / Prénom)</li>
                    <li>Coordonnées de communication (Email)</li>
                    <li>Détails techniques du projet (Mission, Description)</li>
                </ul>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Database className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">2. {t('storage_title')}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('storage_text')}
                </p>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                        <Lock className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">3. {t('rights_title')}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t('rights_text')}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-gray-500 tracking-widest">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"/> DROIT D&apos;ACCÈS</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"/> DROIT DE RECTIFICATION</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"/> DROIT À L&apos;OUBLI</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan-500 rounded-full"/> DROIT À LA PORTABILITÉ</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-xs text-gray-400">Pour exercer ces droits, contactez le DPO : <a href="mailto:contact@mazouzws.com" className="text-white hover:text-cyan-400 transition-colors">contact@mazouzws.com</a></p>
                </div>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                        <Eye className="text-blue-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">4. {t('cookies_title')}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {t('cookies_text')}
                </p>
            </section>

        </div>
      </div>
    </div>
  );
}
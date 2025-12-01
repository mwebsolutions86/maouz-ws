'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navigation');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const getLink = (path: string) => `/${locale}${path}`;

  return (
    <footer 
      className="relative z-10 border-t border-white/10 overflow-hidden pt-20 pb-10"
      style={{ 
        // CORRECTION : Opacité très faible (20%) et flou léger pour voir les étoiles
        backgroundColor: 'rgba(0, 0, 0, 0.2)', 
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)'
      }}
    >
      
      {/* --- DÉBUT DU CONTENU (Identique à avant) --- */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* COLONNE 1 */}
            <div className="space-y-6">
                <Link href={getLink('/')} className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
                     {/* Le logo est ici, on ne touche pas si c'est réglé, sinon remettez l'image */}
                     <div className="relative h-12 w-12">
                        <Image src="/logo.webp" alt="MAZOUZ WS" fill className="object-contain" />
                     </div>
                     <span className="text-xl font-black tracking-[0.2em] text-white">
                        MAZOUZ<span className="text-cyan-400">WS</span>
                    </span>
                </Link>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs mb-6">
                    {t('description')}
                </p>
                <div className="pt-6 border-t border-white/10">
                    <p className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest uppercase">{t('legal_title')}</p>
                    <div className="text-[10px] text-gray-400 font-mono space-y-1 leading-tight">
                        <p className="font-bold text-gray-300">STE MAZOUZ WEB SOLUTIONS SARL</p>
                        <p>{t('address_1')}</p>
                        <p>{t('address_2')}</p>
                        <p>{t('address_3')}</p>
                        <div className="mt-2 pt-2 border-t border-white/5 flex flex-col gap-1">
                            <span>RC : 55923</span>
                            <span>ICE : 003320361000078</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* COLONNE 2 */}
            <div>
                <h4 className="text-xs font-bold text-white tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">{t('nav_title')}</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li><Link href={getLink('/agence')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('agence')}</Link></li>
                    <li><Link href={getLink('/services')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('services')}</Link></li>
                    <li><Link href={getLink('/offres')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('offres')}</Link></li>
                    <li><Link href={getLink('/methode')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('methode')}</Link></li>
                    <li><Link href={getLink('/portfolio')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('portfolio')}</Link></li>
                </ul>
            </div>

            {/* COLONNE 3 */}
            <div>
                <h4 className="text-xs font-bold text-white tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">{t('legal_social_title')}</h4>
                <ul className="space-y-4 text-sm text-gray-300">
                    <li><Link href={getLink('/legal')} className="hover:text-white transition-colors">{t('legal_mentions')}</Link></li>
                    <li><Link href={getLink('/privacy')} className="hover:text-white transition-colors">{t('privacy')}</Link></li>
                    <li><Link href={getLink('/terms')} className="hover:text-white transition-colors">{t('terms')}</Link></li>
                    <li className="pt-4"><div className="inline-block"><LanguageSwitcher /></div></li>
                    <li className="pt-4 flex gap-4">
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
                    </li>
                </ul>
            </div>

            {/* COLONNE 4 (Status avec fond semi-transparent pour lisibilité) */}
            <div className="border border-white/10 p-6 rounded-2xl h-fit" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 font-bold tracking-widest">{t('system_status')}</p>
                        <p className="text-xs text-green-400 font-bold">{t('operational')}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-xs text-gray-300">{t('newsletter')}</p>
                    <div className="flex">
                        <input type="email" placeholder={t('email_placeholder')} className="bg-white/5 border border-white/10 border-r-0 rounded-l-lg px-4 py-2 text-xs text-white w-full focus:outline-none focus:border-cyan-500/50 transition-colors placeholder-gray-500" />
                        <button className="bg-white/10 border border-white/10 border-l-0 rounded-r-lg px-3 hover:bg-cyan-500 hover:text-black transition-colors"><Mail size={14} /></button>
                    </div>
                </div>
            </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 pt-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 font-mono tracking-widest">
            <p>© {currentYear} MAZOUZ WEB SOLUTIONS SARL. {t('rights')}</p>
            <div className="flex items-center gap-6">
                <span>AGADIR, MAROC</span>
                <span className="flex items-center gap-2"><CheckCircle2 size={10} className="text-cyan-500" /> {t('secure')}</span>
            </div>
        </div>
      </div>

    </footer>
  );
}
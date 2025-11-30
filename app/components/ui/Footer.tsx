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
    <footer className="relative z-10 border-t border-white/10 bg-black overflow-hidden pt-20 pb-10">
      
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* COLONNE 1 : LOGO & IDENTITÉ */}
            <div className="space-y-6">
                
                {/* LOGO MIXTE : ICÔNE + TEXTE (Correction UX) */}
                <Link href={getLink('/')} className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity group">
                    {/* L'icône (Globe) */}
                    <div className="relative">
                        <Image 
                            src="/logo.webp" 
                            alt="MAZOUZ WS Logo" 
                            width={60} 
                            height={60} 
                            className="h-12 w-auto object-contain group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Petit effet de lueur derrière l'icône */}
                        <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Le Texte (Remis en place) */}
                    <span className="text-2xl font-black tracking-[0.2em] text-white">
                        MAZOUZ<span className="text-cyan-400">WS</span>
                    </span>
                </Link>
                
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6">
                    {t('description')}
                </p>

                <div className="pt-6 border-t border-white/10">
                    <p className="text-[10px] font-bold text-gray-400 mb-2 tracking-widest">{t('legal_title')}</p>
                    <div className="text-[10px] text-gray-600 font-mono space-y-1 leading-tight">
                        <p className="font-bold text-gray-500">STE MAZOUZ WEB SOLUTIONS SARL</p>
                        <p>{t('address_1')}</p>
                        <p>{t('address_2')}</p>
                        <p>{t('address_3')}</p>
                        <div className="mt-2 pt-2 border-t border-white/5 flex flex-col gap-1">
                            <span>RC : 55923</span>
                            <span>ICE : 003320361000078</span>
                            <span>IF : 53866851</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* COLONNE 2 : SITEMAP */}
            <div>
                <h4 className="text-xs font-bold text-white tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">{t('nav_title')}</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><Link href={getLink('/agence')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('agence')}</Link></li>
                    <li><Link href={getLink('/services')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('services')}</Link></li>
                    <li><Link href={getLink('/offres')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('offres')}</Link></li>
                    <li><Link href={getLink('/methode')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('methode')}</Link></li>
                    <li><Link href={getLink('/portfolio')} className="hover:text-cyan-400 transition-colors flex items-center gap-2 group"><ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /> {nav('portfolio')}</Link></li>
                </ul>
            </div>

            {/* COLONNE 3 : LEGAL */}
            <div>
                <h4 className="text-xs font-bold text-white tracking-widest mb-6 border-b border-white/10 pb-2 inline-block">{t('legal_social_title')}</h4>
                <ul className="space-y-4 text-sm text-gray-400">
                    <li><Link href={getLink('/legal')} className="hover:text-white transition-colors">{t('legal_mentions')}</Link></li>
                    <li><Link href={getLink('/privacy')} className="hover:text-white transition-colors">{t('privacy')}</Link></li>
                    <li><Link href={getLink('/terms')} className="hover:text-white transition-colors">{t('terms')}</Link></li>
                    <li className="pt-4"><LanguageSwitcher /></li>
                    <li className="pt-4 flex gap-4">
                        <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                        <a href="#" className="hover:text-white transition-colors"><Github size={18} /></a>
                    </li>
                </ul>
            </div>

            {/* COLONNE 4 : STATUS */}
            <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl h-fit">
                <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-500 font-bold tracking-widest">{t('system_status')}</p>
                        <p className="text-xs text-green-400 font-bold">{t('operational')}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <p className="text-xs text-gray-400">{t('newsletter')}</p>
                    <div className="flex">
                        <input type="email" placeholder={t('email_placeholder')} className="bg-black border border-white/10 border-r-0 rounded-l-lg px-4 py-2 text-xs text-white w-full focus:outline-none focus:border-cyan-500/50 transition-colors" />
                        <button className="bg-white/10 border border-white/10 border-l-0 rounded-r-lg px-3 hover:bg-cyan-500 hover:text-black transition-colors"><Mail size={14} /></button>
                    </div>
                </div>
            </div>

        </div>
    </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 pt-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-mono tracking-widest">
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
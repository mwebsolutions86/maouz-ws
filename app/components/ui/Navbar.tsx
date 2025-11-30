'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl'; // Import useLocale
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';
import Image from 'next/image';

export default function Navbar() {
  const t = useTranslations('Navigation');
  const locale = useLocale(); // On récupère la langue actuelle (fr, en, ou ar)
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Fonction utilitaire pour générer les liens avec la locale
  const getLink = (path: string) => `/${locale}${path}`;

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/20 transition-all duration-300">
        
       
        {/* LOGO */}
{/* LOGO HEADER : ICÔNE + TEXTE */}
        <Link href={getLink('/')} className="flex items-center gap-2 relative z-50 group" onClick={closeMenu}>
          <Image 
            src="/logo.webp" 
            alt="MAZOUZ WS" 
            width={50} 
            height={50} 
            className="h-10 w-auto object-contain group-hover:rotate-12 transition-transform duration-500"
            priority
          />
          <span className="text-xl font-black tracking-[0.2em] text-white">
            MAZOUZ<span className="text-cyan-400 group-hover:text-white transition-colors">WS</span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-6 text-xs font-bold tracking-widest text-gray-400">
          {['agence', 'services', 'offres', 'methode', 'portfolio'].map((item) => (
            <Link 
              key={item} 
              href={getLink(`/${item}`)} 
              className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {t(item)}
            </Link>
          ))}
        </div>

        {/* ACTIONS DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={getLink('/contact')} className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            {t('contact')}
          </Link>
        </div>

        {/* BOUTON HAMBURGER MOBILE */}
        <button onClick={toggleMenu} className="md:hidden z-50 text-white p-2 focus:outline-none hover:text-cyan-400 transition-colors">
          {isOpen ? <X size={32} className="text-cyan-400" /> : <Menu size={32} />}
        </button>
      </nav>

      {/* MENU MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {['agence', 'services', 'offres', 'methode', 'portfolio'].map((item) => (
                <Link key={item} href={getLink(`/${item}`)} onClick={closeMenu} className="text-3xl font-black text-white hover:text-cyan-400 transition-colors tracking-widest">
                  {t(item)}
                </Link>
              ))}
              
              <div className="w-10 h-[1px] bg-white/20 mx-auto my-4"></div>

              {/* SÉLECTEUR LANGUE MOBILE */}
              <div className="mb-6 scale-125">
                  <LanguageSwitcher />
              </div>

              <Link href={getLink('/contact')} onClick={closeMenu} className="px-10 py-4 border border-cyan-500/50 bg-cyan-500/10 rounded-full text-xl font-bold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all">
                {t('contact')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
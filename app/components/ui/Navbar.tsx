'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-black/20 transition-all duration-300">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group cursor-pointer z-50" onClick={closeMenu}>
          <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_15px_#00f3ff] group-hover:scale-125 transition-transform" />
          <span className="text-xl font-black tracking-[0.2em] text-white">
            MAZOUZ<span className="text-cyan-400 group-hover:text-white transition-colors">WS</span>
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex gap-6 text-xs font-bold tracking-widest text-gray-400">
          <Link href="/agence" className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all">
            L&apos;AGENCE
          </Link>
          <Link href="/services" className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all">
            SERVICES
          </Link>
          <Link href="/offres" className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all">
            OFFRES
          </Link>
          <Link href="/methode" className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all">
            MÉTHODE
          </Link>
          <Link href="/portfolio" className="hover:text-cyan-400 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-cyan-400 hover:after:w-full after:transition-all">
            PORTFOLIO
          </Link>
        </div>

        {/* CTA DESKTOP */}
        <Link href="/contact" className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          CONTACT
        </Link>

        {/* BOUTON HAMBURGER MOBILE */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden z-50 text-white p-2 focus:outline-none hover:text-cyan-400 transition-colors"
          aria-label="Toggle menu"
        >
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
              <Link 
                href="/agence" 
                onClick={closeMenu}
                className="text-3xl font-black text-white hover:text-cyan-400 transition-colors tracking-widest"
              >
                L&apos;AGENCE
              </Link>
              <Link 
                href="/services" 
                onClick={closeMenu}
                className="text-3xl font-black text-white hover:text-cyan-400 transition-colors tracking-widest"
              >
                SERVICES
              </Link>
              <Link 
                href="/offres" 
                onClick={closeMenu}
                className="text-3xl font-black text-cyan-400 hover:text-white transition-colors tracking-widest"
              >
                OFFRES
              </Link>
              <Link 
                href="/methode" 
                onClick={closeMenu}
                className="text-3xl font-black text-white hover:text-cyan-400 transition-colors tracking-widest"
              >
                MÉTHODE
              </Link>
              <Link 
                href="/portfolio" 
                onClick={closeMenu}
                className="text-3xl font-black text-white hover:text-cyan-400 transition-colors tracking-widest"
              >
                PORTFOLIO
              </Link>
              
              <div className="w-10 h-[1px] bg-white/20 mx-auto my-4"></div>

              <Link 
                href="/contact" 
                onClick={closeMenu}
                className="px-10 py-4 border border-cyan-500/50 bg-cyan-500/10 rounded-full text-xl font-bold text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_30px_rgba(0,243,255,0.2)]"
              >
                CONTACT
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
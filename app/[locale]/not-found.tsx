'use client';

import React from 'react';
import Link from 'next/link';
import { Home, WifiOff } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="relative min-h-screen bg-transparent text-white flex flex-col items-center justify-center overflow-hidden selection:bg-red-500 selection:text-white">
      
      <div className="relative z-10 text-center px-6 max-w-2xl">
        
        <div className="relative">
            <h1 className="text-[120px] md:text-[250px] font-black leading-none text-white/[0.03] select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm">
                404
            </h1>
            
            <div className="relative z-10 flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30 animate-pulse">
                    <WifiOff size={40} className="text-red-500" />
                </div>
            </div>

            <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                {t('title')}
            </h2>
        </div>
        
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10 border-l-2 border-red-500/50 pl-6 text-left mx-auto max-w-lg bg-red-500/[0.02] py-4 rounded-r-lg">
            {t('message')}
        </p>

        <Link 
            href="/" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
            <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
            {t('btn')}
        </Link>

        <div className="mt-16 text-[10px] font-mono text-gray-600">
            {t('code')}
        </div>

      </div>
    </div>
  );
}
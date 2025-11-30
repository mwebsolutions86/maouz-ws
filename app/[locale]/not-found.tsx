'use client';

import React from 'react';
import Link from 'next/link';
import Background3D from '@/app/components/3d/Background3D'; // On garde l'immersion
import { Home, WifiOff } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden selection:bg-red-500 selection:text-white">
      
      {/* Fond 3D (Toujours là pour la cohérence) */}
      <Background3D />
      
      <div className="relative z-10 text-center px-6 max-w-2xl">
        
        {/* TITRE GÉANT EN FOND */}
        <div className="relative">
            <h1 className="text-[120px] md:text-[250px] font-black leading-none text-white/[0.03] select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm">
                404
            </h1>
            
            {/* ICONE D'ALERTE ANIMÉE */}
            <div className="relative z-10 flex justify-center mb-6">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30 animate-pulse">
                    <WifiOff size={40} className="text-red-500" />
                </div>
            </div>

            <h2 className="relative z-10 text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                SIGNAL <span className="text-red-500">PERDU</span>
            </h2>
        </div>
        
        {/* MESSAGE D'ERREUR */}
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-10 border-l-2 border-red-500/50 pl-6 text-left mx-auto max-w-lg bg-red-500/[0.02] py-4 rounded-r-lg">
            Les coordonnées que vous cherchez ne correspondent à aucune destination active dans notre système. La page a peut-être été déclassifiée, déplacée ou n&apos;a jamais existé.
        </p>

        {/* CTA RETOUR */}
        <Link 
            href="/" 
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-sm tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        >
            <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
            RETOUR À LA BASE
        </Link>

        {/* INFO TECHNIQUE BAS DE PAGE */}
        <div className="mt-16 text-[10px] font-mono text-gray-600">
            ERROR_CODE: 404_NOT_FOUND // PROTOCOL_MISMATCH
        </div>

      </div>
    </div>
  );
}
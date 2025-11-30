'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';

export default function LegalPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-4xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-24 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">Juridique</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none">
                    MENTIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">LÉGALES</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* CONTENU */}
        <div className="space-y-8 md:space-y-12 text-gray-300 leading-relaxed font-light text-sm md:text-base">
            
            {/* 1. ÉDITEUR */}
            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">01.</span> ÉDITEUR DU SITE
                </h3>
                <p className="mb-4">
                    Le site internet <strong>MAZOUZ WS</strong> est édité par la société :
                </p>
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

            {/* 2. HÉBERGEMENT */}
            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">02.</span> HÉBERGEMENT
                </h3>
                <p>
                    Le site est hébergé sur l&apos;infrastructure Cloud de :<br/>
                    <strong>Vercel Inc.</strong><br/>
                    440 N Barranca Ave #4133<br/>
                    Covina, CA 91723<br/>
                    États-Unis
                </p>
            </section>

            {/* 3. PROPRIÉTÉ INTELLECTUELLE */}
            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">03.</span> PROPRIÉTÉ INTELLECTUELLE
                </h3>
                <p>
                    L&apos;ensemble de ce site relève de la législation marocaine et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="mt-4">
                    Toute reproduction, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>STE MAZOUZ WEB SOLUTIONS SARL</strong>.
                </p>
            </section>

            {/* 4. DONNÉES PERSONNELLES */}
            <section className="bg-white/[0.02] border border-white/10 p-6 md:p-8 rounded-3xl backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-500">04.</span> PROTECTION DES DONNÉES
                </h3>
                <p>
                    Conformément à la loi n° 09-08 relative à la protection des personnes physiques à l&apos;égard du traitement des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification et d&apos;opposition aux données personnelles vous concernant.
                </p>
                <p className="mt-4">
                    Aucune information personnelle n&apos;est collectée à votre insu ni cédée à des tiers. Les données saisies dans le formulaire de contact sont uniquement destinées au traitement de votre demande par notre équipe.
                </p>
            </section>

        </div>
      </div>
    </div>
  );
}
'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-4xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-24 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">RGPD & DATA</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-none">
                    CONFIDENTIALITÉ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">.LOG</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* CONTENU */}
        <div className="space-y-8">
            
            <section className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                        <Shield className="text-cyan-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">1. COLLECTE DES DONNÉES</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Nous collectons uniquement les données strictement nécessaires au bon fonctionnement de nos services et à la relation commerciale. Les données collectées via le formulaire de contact &quot;Initier le Signal&quot; incluent :
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
                    <h3 className="text-xl font-bold text-white">2. STOCKAGE & SÉCURITÉ</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Vos données sont hébergées sur des serveurs sécurisés (Vercel / AWS) conformes aux normes internationales. Nous appliquons des protocoles de chiffrement SSL/TLS pour garantir l&apos;intégrité des échanges. Aucune donnée n&apos;est vendue à des tiers.
                </p>
            </section>

            <section className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-500/10 rounded-xl border border-green-500/20">
                        <Lock className="text-green-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">3. VOS DROITS (RGPD)</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi marocaine 09-08, vous disposez des droits suivants sur vos données :
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
                    <h3 className="text-xl font-bold text-white">4. COOKIES & TRACEURS</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Ce site utilise uniquement des cookies techniques strictement nécessaires au fonctionnement et à la sécurité de la navigation. Nous n&apos;utilisons pas de cookies publicitaires intrusifs.
                </p>
            </section>

        </div>
      </div>
    </div>
  );
}
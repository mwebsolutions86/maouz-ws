'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Search, PenTool, Code, Rocket, ShieldCheck, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    phase: "RECONNAISSANCE",
    title: "AUDIT & STRATÉGIE",
    icon: Search,
    description: "Avant d'écrire une seule ligne de code, nous disséquons votre besoin. Analyse de la concurrence, définition des KPIs et choix de la stack technique optimale.",
    deliverables: ["Cahier des Charges Technique", "Audit Concurrentiel", "Roadmap Projet"]
  },
  {
    id: "02",
    phase: "BLUEPRINT",
    title: "ARCHITECTURE & DESIGN",
    icon: PenTool,
    description: "Nous concevons l'expérience utilisateur (UX) et l'interface (UI) sur Figma. En parallèle, nous architecturons la base de données et les flux API pour garantir la scalabilité.",
    deliverables: ["Maquettes Figma Haute-Fidélité", "Design System", "Schéma de Base de Données"]
  },
  {
    id: "03",
    phase: "CONSTRUCTION",
    title: "DÉVELOPPEMENT AGILE",
    icon: Code,
    description: "Le développement se fait par Sprints de 2 semaines. Vous validez chaque étape. Code propre, typé (TypeScript) et documenté. Tests unitaires et d'intégration continus.",
    deliverables: ["Code Source GitHub", "Versions de Test (Staging)", "Revue de Sprint"]
  },
  {
    id: "04",
    phase: "IGNITION",
    title: "DÉPLOIEMENT & SCALE",
    icon: Rocket,
    description: "Mise en production sur une infrastructure cloud robuste (Vercel, AWS). Configuration du CI/CD pour des mises à jour automatiques. Monitoring des performances en temps réel.",
    deliverables: ["Mise en Ligne", "Configuration Domaine & SSL", "Dashboard Monitoring"]
  },
  {
    id: "05",
    phase: "MAINTENANCE",
    title: "SÉCURITÉ & ÉVOLUTION",
    icon: ShieldCheck,
    description: "Un produit digital n'est jamais fini. Nous assurons la maintenance de sécurité, les mises à jour des dépendances et l'intégration de nouvelles fonctionnalités post-lancement.",
    deliverables: ["SLA & Support", "Mises à jour de Sécurité", "Optimisation Continue"]
  }
];

export default function MethodePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-5xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
            <HorizontalParallax direction={1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4">PROTOCOLE D&apos;EXÉCUTION</h2>
            </HorizontalParallax>
            
            <HorizontalParallax direction={-1} speed={40}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>PROCESSUS</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">.EXE</span>
                </h1>
            </HorizontalParallax>
            
            <div className="mt-8 w-16 md:w-24 h-1 bg-gradient-to-r from-cyan-500 to-transparent mx-auto rounded-full" />
            
            {/* FIXE : Description stable */}
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto mt-8 px-4">
              Pas de place pour le hasard. Nous appliquons un processus d&apos;ingénierie rigoureux pour garantir le succès.
            </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 md:-translate-x-1/2" />

            <div className="flex flex-col gap-12 md:gap-24">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-6 md:gap-0`}
                        >
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-black border border-cyan-500 rounded-full translate-y-2 md:-translate-x-1/2 z-10 shadow-[0_0_10px_#00f3ff]" />

                            <div className={`pl-12 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 text-left'}`}>
                                <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                    
                                    <div className="flex items-center gap-3 mb-3 md:mb-4">
                                        <span className="text-4xl md:text-6xl font-black text-white/10">{step.id}</span>
                                        <div className={`px-2 py-1 md:px-3 border border-cyan-500/30 bg-cyan-500/5 rounded text-[10px] font-bold text-cyan-400 tracking-widest ${isEven ? '' : ''}`}>
                                            {step.phase}
                                        </div>
                                    </div>

                                    <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">{step.title}</h3>
                                    
                                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
                                        {step.description.replace(/'/g, "&apos;")}
                                    </p>

                                    <div className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col w-full`}>
                                        {step.deliverables.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono">
                                                {!isEven && <CheckSquare size={14} className="text-cyan-500 shrink-0" />}
                                                <span>{item}</span>
                                                {isEven && <CheckSquare size={14} className="text-cyan-500 shrink-0 hidden md:block" />}
                                                {isEven && <CheckSquare size={14} className="text-cyan-500 shrink-0 md:hidden" />} 
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>

                            <div className="hidden md:block md:w-1/2" />

                        </motion.div>
                    );
                })}
            </div>
        </div>

        <div className="mt-16 md:mt-24 flex justify-center">
            <div className="p-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-full max-w-xs"></div>
        </div>

      </div>
    </div>
  );
}
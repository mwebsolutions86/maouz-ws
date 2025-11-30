'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
// Ajout de ArrowRight, CheckCircle2, Activity dans les imports
import { Search, PenTool, Code, Rocket, ShieldCheck, CheckCircle2, FileCode, Trello, GitBranch, Server, Eye, Lock, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Link n'était pas utilisé avant, mais je l'ajoute au cas où

// ... (Le reste des constantes steps et qualityStandards reste inchangé) ...
const steps = [
  {
    id: "01",
    phase: "INITIATION",
    title: "DEEP SCAN & STRATÉGIE",
    icon: Search,
    desc: "Nous ne commençons pas par coder. Nous commençons par comprendre. Nous disséquons votre modèle économique, vos concurrents et vos contraintes techniques.",
    inputs: ["Brief Client", "Audit Concurrentiel", "Objectifs KPI"],
    outputs: ["Cahier des Charges Technique", "Roadmap Produit", "Choix de la Stack"]
  },
  {
    id: "02",
    phase: "BLUEPRINT",
    title: "ARCHITECTURE & DESIGN",
    icon: PenTool,
    desc: "Conception des fondations. Nous créons les maquettes haute-fidélité (UI) et l'architecture des données (Schema DB). Rien n'est laissé au hasard avant le premier commit.",
    inputs: ["Wireframes", "Identité Visuelle", "User Stories"],
    outputs: ["Maquettes Figma Validées", "Diagramme de Base de Données", "Design System"]
  },
  {
    id: "03",
    phase: "PRODUCTION",
    title: "DÉVELOPPEMENT ITÉRATIF",
    icon: Code,
    desc: "Le moteur démarre. Nous travaillons en Sprints de 2 semaines. Vous voyez le produit évoluer en temps réel. Code propre, typé (TypeScript) et commenté.",
    inputs: ["Maquettes", "Assets Graphiques", "Contenu"],
    outputs: ["Version Staging (Pré-prod)", "Code Source GitHub", "Tests Unitaires"]
  },
  {
    id: "04",
    phase: "QUALITÉ",
    title: "STRESS TESTS & SÉCURITÉ",
    icon: ShieldCheck,
    desc: "Avant le lancement, nous martyrisons le site. Tests de charge, audits de sécurité, vérification mobile. Nous traquons le moindre bug pour garantir un lancement zéro défaut.",
    inputs: ["Version Beta", "Scénarios de Test"],
    outputs: ["Rapport d'Audit", "Score Lighthouse 100%", "Validation Sécurité"]
  },
  {
    id: "05",
    phase: "DÉPLOIEMENT",
    title: "IGNITION (MISE EN LIGNE)",
    icon: Rocket,
    desc: "Mise en production sur infrastructure Cloud Edge (Vercel/AWS). Configuration des domaines, du SSL et du monitoring. Votre projet est vivant.",
    inputs: ["Validation Finale", "DNS", "Clés API"],
    outputs: ["Site Live", "Accès Admin", "Documentation"]
  }
];

const qualityStandards = [
  { title: "CLEAN CODE", desc: "Architecture modulaire, SOLID principles. Code maintenable par n'importe quel ingénieur.", icon: FileCode },
  { title: "SÉCURITÉ MAXIMALE", desc: "Protection DDOS, Chiffrement des données, Headers de sécurité HTTP stricts.", icon: Lock },
  { title: "PERFORMANCE PURE", desc: "Pas de code mort. Chargement < 1s. Optimisation Core Web Vitals native.", icon: Server }
];

export default function MethodePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-6xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-20 md:mb-32 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">Méthodologie</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={50}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>ENGINEERING</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">CHAOS</span>
                </h1>
            </HorizontalParallax>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed">
                Le chaos est l&apos;ennemi du succès. Nous appliquons une rigueur scientifique à la création digitale. 
                Pas d&apos;improvisation, juste des processus éprouvés pour des résultats prévisibles.
            </p>
        </div>

        {/* SECTION 1 : LE PROTOCOLE (TIMELINE) */}
        <div className="relative mb-32">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 md:-translate-x-1/2" />

            <div className="space-y-16 md:space-y-24">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}
                        >
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-cyan-500 rounded-full translate-y-2 md:-translate-x-1/2 z-10 shadow-[0_0_15px_#06b6d4] -ml-[7px] md:ml-0" />

                            <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 text-left'}`}>
                                <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                    
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-5xl md:text-7xl font-black text-white/5 select-none absolute -top-6 md:-top-10 z-0">{step.id}</span>
                                        <div className="relative z-10 px-3 py-1 border border-cyan-500/30 bg-cyan-950/30 rounded text-[10px] font-bold text-cyan-400 tracking-widest">
                                            {step.phase}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                                    
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">
                                        {step.desc}
                                    </p>

                                    <div className={`relative z-10 w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col md:flex-row gap-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                                                <ArrowRight size={10} className="rotate-90 md:rotate-0" /> INPUT
                                            </p>
                                            <ul className={`text-xs text-gray-400 space-y-1 font-mono ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                {step.inputs.map((item, i) => <li key={i}>• {item}</li>)}
                                            </ul>
                                        </div>
                                        <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-white/10"></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-green-500 mb-2 uppercase tracking-wider flex items-center gap-2">
                                                <CheckCircle2 size={10} /> OUTPUT (LIVRABLE)
                                            </p>
                                            <ul className={`text-xs text-white space-y-1 font-mono font-bold ${isEven ? 'md:text-right' : 'text-left'}`}>
                                                {step.outputs.map((item, i) => <li key={i}>• {item}</li>)}
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    );
                })}
            </div>
        </div>

        {/* SECTION 2 : QUALITY STANDARDS */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <HorizontalParallax direction={1} speed={30}>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4">STANDARD <span className="text-cyan-500">MILITAIRE</span></h2>
                </HorizontalParallax>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">
                    Un code qui fonctionne ne suffit pas. Nous livrons un code résilient, sécurisé et documenté. C&apos;est notre garantie pérennité.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {qualityStandards.map((item, idx) => (
                    <div key={idx} className="p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent text-center group hover:border-cyan-500/30 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-black border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <item.icon className="text-cyan-400" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* SECTION 3 : LA STACK */}
        <div className="mb-32 py-12 border-y border-white/5 bg-black/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-12">
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-white mb-2">NOTRE OUTILLAGE</h3>
                    <p className="text-xs text-gray-400">Les meilleurs outils pour une transparence totale.</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <Trello size={18} /> TRELLO / JIRA
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <GitBranch size={18} /> GITHUB
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <PenTool size={18} /> FIGMA
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm">
                        <Server size={18} /> VERCEL
                    </div>
                </div>
            </div>
        </div>

        {/* SECTION 4 : VISIBILITÉ */}
        <div className="mb-32 relative rounded-3xl overflow-hidden border border-white/10 bg-black p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
             
             <div className="relative z-10 md:w-1/2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                    <Eye size={12} className="text-green-400" />
                    <span className="text-[10px] font-bold text-green-300 tracking-widest">TRANSPARENCE TOTALE</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6">VOUS VOYEZ CE QUE NOUS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">VOYONS</span>.</h2>
                 <p className="text-gray-400 leading-relaxed mb-6">
                     Fini l&apos;effet &quot;Boîte Noire&quot;. Vous avez accès à notre tableau de bord de projet. Vous voyez les tâches avancer, les maquettes évoluer et le code se construire.
                 </p>
                 <ul className="space-y-2 text-sm text-white">
                     <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Réunions de démo hebdomadaires</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Accès direct au GitHub (option)</li>
                     <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Environnement de pré-visualisation live</li>
                 </ul>
             </div>

             <div className="relative z-10 md:w-1/2 h-[300px] w-full bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl">
                 <div className="text-center">
                     <Activity size={64} className="text-white/10 mx-auto mb-4" />
                     <p className="text-xs font-mono text-gray-600">CLIENT_DASHBOARD_PREVIEW.EXE</p>
                 </div>
                 <div className="absolute top-4 left-4 flex gap-2">
                     <div className="w-2 h-2 rounded-full bg-red-500/50" />
                     <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                     <div className="w-2 h-2 rounded-full bg-green-500/50" />
                 </div>
             </div>
        </div>

        {/* CTA FINAL */}
        <div className="text-center">
            <p className="text-gray-500 mb-6 font-mono text-xs md:text-sm">PRÊT À LANCER LA SÉQUENCE ?</p>
            <Link href="/contact" className="inline-block px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-xl tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                DÉMARRER LE PROJET
            </Link>
        </div>

      </div>
    </div>
  );
}
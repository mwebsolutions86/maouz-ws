'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Users, Trophy, Code2, Fingerprint, Cpu, Crosshair, Eye, Terminal, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// DONNÉES ÉQUIPE
const team = [
  {
    name: "ALEX MAZOUZ",
    role: "COMMANDER / LEAD ARCHITECT",
    bio: "L'esprit derrière la machine. Il ne voit pas du code, il voit des flux de données. Spécialiste des architectures critiques et de l'optimisation extrême. Si ça charge en plus de 100ms, c'est trop lent.",
    stats: ["CLASS: ARCHITECT", "WEAPON: NEXT.JS 15", "STATUS: ONLINE"]
  },
  {
    name: "ELARA VANCE", 
    role: "HEAD OF VISUAL OPS",
    bio: "Elle sculpte la lumière et les pixels. Ancienne directrice artistique reconvertie dans l'UX spatial. Elle conçoit des interfaces qui ne s'utilisent pas, mais se ressentent.",
    stats: ["CLASS: VISIONARY", "WEAPON: FIGMA / 3JS", "STATUS: DEPLOYED"]
  },
  {
    name: "KAI 'GHOST' R.", 
    role: "FULLSTACK OPERATOR",
    bio: "L'ombre dans le système. Expert en sécurité et en logique backend. Il construit les fondations invisibles mais indestructibles de vos plateformes SaaS.",
    stats: ["CLASS: ENGINEER", "WEAPON: RUST / NODE", "STATUS: ONLINE"]
  }
];

// DONNÉES VALEURS
const values = [
  {
    icon: Crosshair,
    title: "EXCELLENCE OPÉRATIONNELLE",
    desc: "Nous ne tolérons pas l'approximation. Chaque projet est soumis à des tests rigoureux et une revue de code stricte. Notre standard de qualité dépasse les normes du marché."
  },
  {
    icon: Cpu,
    title: "AVANT-GARDE TECHNOLOGIQUE",
    desc: "Nous n'attendons pas le futur, nous le codons. IA générative, Web3, Edge Computing : nous intégrons dès aujourd'hui les technologies qui seront la norme demain."
  },
  {
    icon: Fingerprint,
    title: "APPROCHE SUR-MESURE",
    desc: "Votre entreprise est unique, votre solution doit l'être aussi. Nous refusons l'industrialisation de masse pour privilégier l'artisanat numérique de haute précision."
  }
];

// DONNÉES CHRONOLOGIE
const history = [
  { 
    year: "2023", 
    title: "INITIALISATION DU NOYAU", 
    desc: "Fondation de Mazouz Web Solutions. Une ambition claire : briser le statu quo des agences digitales en proposant une ingénierie de niveau Silicon Valley au Maroc." 
  },
  { 
    year: "2024", 
    title: "HYPERCROISSANCE", 
    desc: "Validation du modèle. Déploiement de solutions critiques pour des acteurs majeurs et structuration d'une équipe d'élite. L'agence s'impose par sa rapidité d'exécution." 
  },
  { 
    year: "2025", 
    title: "EXPANSION GLOBALE", 
    desc: "Ouverture aux marchés internationaux. Intégration native de l'Intelligence Artificielle dans 100% de nos workflows de production. Nous ne suivons plus les tendances, nous les créons." 
  }
];

// DONNÉES STACK
const stack = ["NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "PYTHON", "RUST", "SUPABASE", "AWS", "WEBGL", "SOLIDITY"];

export default function AgencePage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-20 md:mb-32 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">Identité & Origine</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none">
                    L&apos;AGENCE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">MAZOUZ</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* MANIFESTE (STORYTELLING) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
            <div className="space-y-8 md:text-lg text-gray-300 font-light leading-relaxed">
                <div>
                    <HorizontalParallax direction={-1} speed={20}>
                        <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                            <span className="text-cyan-500">01.</span> NOTRE PHILOSOPHIE
                        </h3>
                    </HorizontalParallax>
                    <p>
                        Dans un écosystème numérique saturé de solutions génériques, <strong className="text-white">MazouzWS</strong> se positionne comme le partenaire stratégique des entreprises visionnaires. Nous ne sommes pas de simples exécutants ; nous sommes les architectes de votre infrastructure digitale future.
                    </p>
                </div>
                
                <div>
                    <HorizontalParallax direction={1} speed={20}>
                        <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                            <span className="text-cyan-500">02.</span> NOTRE PROMESSE
                        </h3>
                    </HorizontalParallax>
                    <p>
                        Allier la puissance brute du code à l&apos;élégance du design. Nous concevons des écosystèmes digitaux qui sont non seulement performants et sécurisés, mais qui offrent une expérience utilisateur (UX) inoubliable. Votre succès digital est notre seule métrique de réussite.
                    </p>
                </div>

                <div className="pt-4">
                    <div className="inline-flex items-center gap-4 px-6 py-3 border border-cyan-500/30 bg-cyan-500/5 rounded-full backdrop-blur-md">
                        <Trophy className="text-cyan-400" size={20} />
                        <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-100">EXCELLENCE CERTIFIÉE</span>
                    </div>
                </div>
            </div>

            {/* VISUEL ABSTRAIT */}
            <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <Code2 size={120} className="text-white/5 group-hover:text-cyan-500/20 transition-colors duration-700" />
                </div>
                
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/50 shadow-[0_0_20px_#00f3ff] animate-[scan_3s_linear_infinite]" />

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] font-mono text-cyan-500 mb-1">SYSTEM_STATUS</p>
                            <p className="text-xl font-bold text-white tracking-widest">OPERATIONAL</p>
                        </div>
                        <Eye className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        </div>

        {/* DATA LOGS */}
        <div className="mb-32">
            <HorizontalParallax direction={1} speed={40}>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-16 text-center flex items-center justify-center gap-3">
                    <Terminal size={32} className="text-cyan-500" />
                    DATA LOGS
                </h3>
            </HorizontalParallax>
            
            <div className="relative border-l border-white/10 ml-4 md:ml-1/2 space-y-12">
                {history.map((log, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-12">
                        <div className="absolute -left-[5px] top-2 w-2 h-2 bg-black border border-cyan-500 rounded-full shadow-[0_0_10px_#00f3ff]" />
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                            <span className="text-cyan-500 font-mono text-xl font-bold">{log.year}</span>
                            <div className="flex-1">
                                <h4 className="text-white font-bold text-lg mb-2">{log.title}</h4>
                                <p className="text-gray-400 text-sm max-w-xl">{log.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* VALEURS (ADN) */}
        <div className="mb-32">
            <HorizontalParallax direction={-1} speed={40}>
                <h3 className="text-2xl md:text-5xl font-black text-white mb-16 text-center">NOTRE <span className="text-gray-500">ADN</span></h3>
            </HorizontalParallax>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {values.map((val, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group p-8 border border-white/10 bg-white/[0.02] rounded-3xl hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
                    >
                        <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500 transition-all">
                            <val.icon size={28} className="text-cyan-400" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-4">{val.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* TECH ARSENAL */}
        <div className="mb-32 py-12 border-y border-white/5 bg-white/[0.01]">
            <div className="text-center mb-12">
                <HorizontalParallax direction={1} speed={20}>
                    <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">INFRASTRUCTURE</h3>
                </HorizontalParallax>
                <HorizontalParallax direction={-1} speed={30}>
                    <p className="text-3xl font-black text-white">WEAPONRY</p>
                </HorizontalParallax>
            </div>
            <div className="flex flex-wrap justify-center gap-4 px-4">
                {stack.map((tech, idx) => (
                    <div key={idx} className="px-6 py-3 border border-white/10 rounded-full bg-black/50 text-xs md:text-sm font-mono text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors cursor-default">
                        {tech}
                    </div>
                ))}
            </div>
        </div>

        {/* ÉQUIPE (OPERATORS) */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <HorizontalParallax direction={1} speed={40}>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-4 flex items-center justify-center gap-4">
                        <Users size={32} className="text-cyan-500" />
                        LES OPÉRATEURS
                    </h3>
                </HorizontalParallax>
                <p className="text-gray-500 text-sm font-mono">UNITÉ D&apos;ÉLITE // ACCÈS RESTREINT</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-2xl font-black text-white mb-1 uppercase">{member.name}</h4>
                                    <p className="text-[10px] text-cyan-400 font-mono tracking-widest">{member.role}</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                </div>
                            </div>
                            
                            <p className="text-sm text-gray-400 mb-8 min-h-[80px] font-light leading-relaxed border-l border-white/10 pl-4">
                                {member.bio}
                            </p>
                            
                            <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                {member.stats.map((stat, i) => (
                                    <div key={i} className="flex items-center gap-3 text-[10px] font-mono text-gray-400">
                                        <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                                        {stat}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* CTA FINAL */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black p-12 text-center">
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <Globe size={200} className="text-cyan-500 animate-spin-slow" />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
                <HorizontalParallax direction={-1} speed={30}>
                    <h3 className="text-3xl font-black text-white mb-6">REJOINDRE L&apos;UNITÉ</h3>
                </HorizontalParallax>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Nous cherchons des anomalies. Des esprits qui ne rentrent pas dans les cases. Si vous pensez que le code est une forme d&apos;art et que l&apos;impossible est juste un challenge non résolu, vous avez votre place.
                </p>
                <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all text-sm tracking-widest"
                >
                    POSTULER MAINTENANT <ChevronRight size={16} />
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}
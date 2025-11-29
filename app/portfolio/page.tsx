'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// DONNÉES PROJETS (Showcase)
const projects = [
  {
    id: "01",
    title: "NEXUS AI FIT",
    category: "Mobile App • HealthTech",
    description: "L'application de fitness ultime pilotée par IA. Analyse biométrique en temps réel et coaching adaptatif.",
    tech: ["React Native", "TensorFlow", "Supabase"],
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=800", 
    link: "#"
  },
  {
    id: "02",
    title: "AERO STREAM",
    category: "Drone Control • IoT",
    description: "Interface de pilotage de drones industriels avec retour vidéo latence zéro et télémétrie 3D.",
    tech: ["Electron", "WebSockets", "Three.js"],
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800", 
    link: "#"
  },
  {
    id: "03",
    title: "QUANTUM FINANCE",
    category: "SaaS • Fintech",
    description: "Dashboard de trading haute fréquence. Visualisation de données boursières complexes en temps réel.",
    tech: ["Next.js", "D3.js", "Go"],
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    id: "04",
    title: "NEON MARKET",
    category: "E-commerce • Web3",
    description: "Marketplace NFT nouvelle génération. Expérience d'achat immersive et sécurisée par la blockchain.",
    tech: ["Solidity", "Wagmi", "Tailwind"],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-24 text-center md:text-left border-b border-white/10 pb-8 md:pb-12">
            <HorizontalParallax direction={-1} speed={20}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-2 md:mb-4">DÉPLOIEMENTS RÉCENTS</h2>
            </HorizontalParallax>
            
            <HorizontalParallax direction={1} speed={40}>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white leading-none flex flex-col md:block items-center md:items-start gap-1 md:gap-0">
                    <span>SHOWCASE</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:ml-4">.LOG</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* GRILLE PROJETS (Masonry Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
           {projects.map((project, index) => (
             <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${index % 2 !== 0 ? 'md:mt-24' : ''}`}
             >
                <Link href={project.link} className="group block relative">
                    
                    {/* CADRE IMAGE */}
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                        
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-sm">
                            <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300 px-6 py-3 border border-cyan-500 rounded-full text-cyan-400 font-bold tracking-widest text-sm flex items-center gap-2 bg-black/80">
                                EXPLORER <ExternalLink size={16} />
                            </div>
                        </div>

                        <Image 
                            src={project.image} 
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                            unoptimized
                        />
                    </div>

                    {/* INFOS PROJET */}
                    <div className="mt-6 md:mt-8 px-2">
                        <div className="flex justify-between items-start mb-2">
                            {/* CORRECTION ICI : {'//'} pour éviter l'erreur de commentaire */}
                            <div className="text-cyan-500 font-mono text-[10px] md:text-xs font-bold mb-2 tracking-widest">
                                {project.id} {'//'} {project.category}
                            </div>
                            <Layers size={18} className="text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                        
                        <h3 className="text-2xl md:text-4xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                        
                        <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-4 max-w-md">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 border border-white/10 bg-white/5 rounded text-[10px] md:text-xs font-bold text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                </Link>
             </motion.div>
           ))}
        </div>

        <div className="mt-20 md:mt-40 text-center border-t border-white/10 pt-12 md:pt-20">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-6">PLUS DE PROJETS SUR GITHUB</h3>
            <Link 
                href="https://github.com" 
                target="_blank"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all text-sm font-bold tracking-widest"
            >
                <Github size={20} />
                ACCÉDER AU REPO
            </Link>
        </div>

      </div>
    </div>
  );
}
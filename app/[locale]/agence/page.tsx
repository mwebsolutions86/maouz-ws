'use client';

import React, { useState, useEffect, useRef } from 'react';
// Pas de Background3D ici, il est dans le layout
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Zap, Trophy, Crosshair, Terminal, Globe, ChevronRight, User, Lock } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

// --- CODE TERMINAL ---
const codeSnippets = [
  "> INITIALIZING NEURAL LINK...",
  "> ACCESSING CORE ARCHITECTURE [V.15.0.2]",
  "> LOADING MODULE: NEXT.JS... [OK]",
  "> OPTIMIZING ASSETS... [100%]",
  "> DEPLOYING TO EDGE NETWORK...",
  "> SYSTEM CHECK: SECURE",
  "> RENDER MODE: CONCURRENT",
  "> HYDRATION: COMPLETE",
  "> ESTABLISHING SECURE CONNECTION...",
  "> USER DETECTED: ELITE STATUS",
  "> EXECUTING: build_future.tsx",
  "> COMPILING SHADERS...",
  "> ONE_MAN_ARMY_PROTOCOL: ACTIVE",
];

const CyberTerminal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setLines(prev => {
        const newLine = codeSnippets[index % codeSnippets.length];
        const newLines = [...prev, newLine].slice(-12); 
        return newLines;
      });
      index++;
    }, 400); 

    return () => clearInterval(interval);
  }, []); 

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[450px] bg-black/80 rounded-xl border border-white/10 overflow-hidden font-mono text-xs md:text-sm shadow-2xl group"
    >
      <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4 z-20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-gray-500 flex items-center gap-2">
          <Lock size={12} />
          <span>MAZOUZ_ROOT_ACCESS</span>
        </div>
      </div>

      <div className="absolute inset-0 pt-14 px-6 pb-6 flex flex-col justify-end z-10">
        <div className="space-y-2 text-green-400/80">
          {lines.map((line, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-cyan-500">➜</span>
              <span className={line.includes("ERROR") ? "text-red-500" : line.includes("ACTIVE") ? "text-yellow-400 font-bold" : ""}>
                {line} {i === lines.length - 1 && <span className="animate-pulse">_</span>}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SpotlightValueCard({ value, index }: { value: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative h-full bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-colors"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative p-8 h-full flex flex-col z-10">
        <div className="flex justify-between items-start mb-6">
            <div className="w-14 h-14 bg-black border border-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500 transition-all duration-500">
                <value.icon size={28} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </div>
        </div>
        <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{value.title}</h4>
        <p className="text-sm text-gray-400 leading-relaxed font-light">{value.desc}</p>
      </div>
    </motion.div>
  );
}

export default function AgencePage() {
  const t = useTranslations('AgencePage');

  const history = [
    { year: "2023", title: t('history_2023_title'), desc: t('history_2023_desc') },
    { year: "2024", title: t('history_2024_title'), desc: t('history_2024_desc') },
    { year: "2025", title: t('history_2025_title'), desc: t('history_2025_desc') }
  ];

  const values = [
    { icon: User, title: t('val_1_title'), desc: t('val_1_desc') },
    { icon: Crosshair, title: t('val_2_title'), desc: t('val_2_desc') },
    { icon: Zap, title: t('val_3_title'), desc: t('val_3_desc') }
  ];

  const team = [
    {
      name: "MOHCINE MAZOUZ",
      role: "FOUNDER / FULL STACK ARCHITECT",
      bio: t('bio'),
      stats: ["CLASS: ONE-MAN ARMY", "WEAPON: FULL STACK", "STATUS: ONLINE"],
      image: "/quantum.webp" 
    }
  ];

  const stack = ["NEXT.JS", "REACT NATIVE", "TYPESCRIPT", "PYTHON", "RUST", "SUPABASE", "AWS", "WEBGL", "SOLIDITY"];

  return (
    // CORRECTION : bg-transparent pour laisser voir les étoiles du layout
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-20 md:mb-32 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">{t('subtitle')}</h2>
            </HorizontalParallax>
            
            <HorizontalParallax direction={1} speed={40}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>{t('title_1')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">{t('title_2')}</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* MANIFESTE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 items-center">
            <div className="space-y-8 md:text-lg text-gray-300 font-light leading-relaxed">
                <div>
                    <HorizontalParallax direction={-1} speed={20}>
                        <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                            <span className="text-cyan-500">01.</span> {t('vision_title')}
                        </h3>
                    </HorizontalParallax>
                    <p>{t('vision_text')}</p>
                </div>
                <div>
                    <HorizontalParallax direction={1} speed={20}>
                        <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                            <span className="text-cyan-500">02.</span> {t('engagement_title')}
                        </h3>
                    </HorizontalParallax>
                    <p>{t('engagement_text')}</p>
                </div>
                <div className="pt-4">
                    <div className="inline-flex items-center gap-4 px-6 py-3 border border-cyan-500/30 bg-cyan-500/5 rounded-full backdrop-blur-md">
                        <Trophy className="text-cyan-400" size={20} />
                        <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-100">{t('badge')}</span>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center transform hover:scale-[1.02] transition-transform duration-500">
                <CyberTerminal />
            </div>
        </div>

        {/* DATA LOGS */}
        <div className="mb-32">
            <HorizontalParallax direction={1} speed={40}>
                <h3 className="text-2xl md:text-4xl font-black text-white mb-16 text-center flex items-center justify-center gap-3">
                    <Terminal size={32} className="text-cyan-500" />
                    {t('logs_title')}
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

        {/* VALEURS */}
        <div className="mb-32">
            <HorizontalParallax direction={-1} speed={40}>
                <h3 className="text-2xl md:text-5xl font-black text-white mb-16 text-center">{t('dna_title')} <span className="text-gray-500">{t('dna_subtitle')}</span></h3>
            </HorizontalParallax>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full md:h-[350px]">
                {values.map((val, idx) => (
                    <SpotlightValueCard key={idx} value={val} index={idx} />
                ))}
            </div>
        </div>

        {/* TECH ARSENAL */}
        <div className="mb-32 py-12 border-y border-white/5 bg-white/[0.01]">
            <div className="text-center mb-12">
                <HorizontalParallax direction={1} speed={20}>
                    <h3 className="text-sm font-bold tracking-widest text-gray-500 mb-2">{t('stack_subtitle')}</h3>
                </HorizontalParallax>
                <HorizontalParallax direction={-1} speed={30}>
                    <p className="text-3xl font-black text-white">{t('stack_title')}</p>
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

        {/* ÉQUIPE */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <HorizontalParallax direction={1} speed={40}>
                    <h3 className="text-2xl md:text-4xl font-black text-white mb-4 flex items-center justify-center gap-4">
                        <User size={32} className="text-cyan-500" />
                        {t('operator_title')}
                    </h3>
                </HorizontalParallax>
                <p className="text-gray-500 text-sm font-mono">{t('operator_subtitle')}</p>
            </div>
            <div className="max-w-4xl mx-auto">
                {team.map((member, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-600 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center md:items-start">
                            <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-cyan-500/50 transition-colors">
                                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                                <Image src={member.image} alt={member.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="text-center md:text-left">
                                <div className="mb-6">
                                    <h4 className="text-3xl md:text-4xl font-black text-white mb-2 uppercase">{member.name}</h4>
                                    <p className="text-sm text-cyan-400 font-mono tracking-widest">{member.role}</p>
                                </div>
                                <p className="text-base text-gray-300 mb-8 min-h-[80px] font-light leading-relaxed">{member.bio}</p>
                                <div className="flex flex-wrap justify-center md:justify-start gap-4 bg-white/5 p-6 rounded-xl border border-white/5">
                                    {member.stats.map((stat, i) => (
                                        <div key={i} className="flex items-center gap-3 text-xs font-mono text-gray-400 bg-black/50 px-3 py-1 rounded">
                                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                                            {stat}
                                        </div>
                                    ))}
                                </div>
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
                    <h3 className="text-3xl font-black text-white mb-6">{t('cta_title')}</h3>
                </HorizontalParallax>
                <p className="text-gray-400 mb-8 leading-relaxed">{t('cta_desc')}</p>
                <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-all text-sm tracking-widest">
                    {t('cta_button')} <ChevronRight size={16} />
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}
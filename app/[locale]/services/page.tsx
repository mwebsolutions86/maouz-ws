'use client';

import React from 'react';
// ON RETIRE Background3D CAR IL EST DÉJÀ DANS LE LAYOUT GLOBAL
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { 
  Smartphone, Brain, Globe, Layers, Cpu, Zap, Plus, Scan, TrendingUp, 
  ShieldCheck, Users, Lightbulb, Target, Rocket, AlertTriangle, Lock, 
  ArrowRight 
} from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

// --- TYPE DEFINITIONS ---
interface ServiceType {
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any; 
  title: string;
  description: string;
  specs: string[];
}

// --- COMPOSANT CARTE "SPOTLIGHT" ---
function SpotlightCard({ service, index }: { service: ServiceType, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      // FOND SEMI-TRANSPARENT (bg-black/40) pour voir les étoiles à travers les cartes
      className="group relative w-full h-full bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start mb-8">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-500">
                <service.icon size={32} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="text-right">
                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">{service.id}</span>
                <Scan size={16} className="text-cyan-500/50 ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>
        <div>
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-cyan-400 transition-colors">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4 group-hover:border-cyan-500/50 transition-colors">
                {service.description}
            </p>
        </div>
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
            {service.specs.map((spec: string, i: number) => (
                <span key={i} className="text-[10px] font-mono font-bold px-3 py-1 bg-white/5 rounded text-gray-500 border border-transparent group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                    {spec}
                </span>
            ))}
        </div>
        <Plus size={10} className="absolute top-4 right-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Plus size={10} className="absolute bottom-4 left-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');

  // --- DONNÉES TECHNIQUES ---
  const services: ServiceType[] = [
    {
      id: "01",
      icon: Smartphone,
      title: t('serv_1_title'),
      description: t('serv_1_desc'),
      specs: ["iOS & Android", "Biométrie", "Temps Réel"]
    },
    {
      id: "02",
      icon: Brain,
      title: t('serv_2_title'),
      description: t('serv_2_desc'),
      specs: ["RAG Systems", "Chatbots", "Analyse Data"]
    },
    {
      id: "03",
      icon: Globe,
      title: t('serv_3_title'),
      description: t('serv_3_desc'),
      specs: ["WebGL / 3D", "Shaders", "Performance"]
    },
    {
      id: "04",
      icon: Layers,
      title: t('serv_4_title'),
      description: t('serv_4_desc'),
      specs: ["Cloud Native", "Microservices", "Sécurité"]
    },
    {
      id: "05",
      icon: Cpu,
      title: t('serv_5_title'),
      description: t('serv_5_desc'),
      specs: ["Bluetooth", "MQTT", "Embedded"]
    },
    {
      id: "06",
      icon: Zap,
      title: t('serv_6_title'),
      description: t('serv_6_desc'),
      specs: ["SEO Technique", "Core Vitals", "Speed"]
    }
  ];

  // --- DONNÉES BUSINESS ---
  const businessImpacts = [
    {
      title: t('imp_1_title'),
      desc: t('imp_1_desc'),
      icon: Target
    },
    {
      title: t('imp_2_title'),
      desc: t('imp_2_desc'),
      icon: TrendingUp
    },
    {
      title: t('imp_3_title'),
      desc: t('imp_3_desc'),
      icon: Lightbulb
    }
  ];

  return (
    // CORRECTION MAJEURE : bg-transparent (au lieu de bg-[#050505])
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-20 border-b border-white/10 pb-8 md:pb-10 text-center md:text-left">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 md:mb-4">{t('subtitle')}</h2>
            </HorizontalParallax>
            
            <HorizontalParallax direction={1} speed={40}>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 leading-none flex flex-col md:block items-center md:items-start gap-2 md:gap-0">
                    <span>{t('title_1')}</span>
                    <span className="text-white md:ml-4">{t('title_2')}</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* GRILLE TECHNIQUE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
           {services.map((service, index) => (
             <div key={index} className="h-[400px]">
                <SpotlightCard service={service} index={index} />
             </div>
           ))}
        </div>

        {/* --- CTA 1 : DIAGNOSTIC SYSTEM --- */}
        <div className="mb-32">
            {/* Fond semi-transparent (bg-black/80) au lieu de to-black opaque */}
            <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-950/40 to-black/80 backdrop-blur-sm p-8 md:p-12 group">
                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                    <AlertTriangle size={120} className="text-red-500 rotate-12" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
                            <h3 className="text-red-400 font-mono text-xs font-bold tracking-widest">{t('diag_alert')}</h3>
                        </div>
                        
                        <HorizontalParallax direction={1} speed={30}>
                            <h2 className="text-2xl md:text-4xl font-black text-white mb-4">{t('diag_title')}</h2>
                        </HorizontalParallax>
                        
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                            {t('diag_desc')}
                        </p>
                    </div>
                    <Link 
                        href="/contact"
                        className="whitespace-nowrap px-8 py-4 bg-red-600/10 border border-red-500/50 text-red-400 font-bold rounded-xl hover:bg-red-600 hover:text-white transition-all flex items-center gap-3 text-sm md:text-base"
                    >
                        <Scan size={20} />
                        {t('diag_btn')}
                    </Link>
                </div>
            </div>
        </div>

        {/* --- SECTION IMPACT --- */}
        <div className="mb-32">
            <div className="text-center mb-16">
                <HorizontalParallax direction={1} speed={40}>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t('impact_title_1')} <span className="text-cyan-500">{t('impact_title_2')}</span> {t('impact_title_3')}</h2>
                </HorizontalParallax>
                <p className="text-gray-400 max-w-2xl mx-auto">{t('impact_sub')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {businessImpacts.map((impact, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        // Fond semi-transparent
                        className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/[0.05] transition-all"
                    >
                        <div className="w-14 h-14 bg-cyan-900/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center mb-6">
                            <impact.icon size={28} className="text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4">{impact.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{impact.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* --- CTA 2 : VISIONARY --- */}
        <div className="mb-32 relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-md text-center p-12 md:p-20">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shine_4s_linear_infinite]" />
            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-8">
                    <Lock size={12} className="text-cyan-400" />
                    <span className="text-[10px] font-bold text-cyan-300 tracking-widest">{t('vis_badge')}</span>
                </div>
                
                <HorizontalParallax direction={-1} speed={30}>
                    <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">
                        {t('vis_title')}
                    </h2>
                </HorizontalParallax>
                
                <p className="text-gray-400 text-lg mb-10">
                    {t('vis_desc')}
                </p>
                <Link 
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-full hover:bg-cyan-400 transition-all hover:scale-105"
                >
                    {t('vis_btn')} <ArrowRight size={20} />
                </Link>
            </div>
        </div>

        {/* --- SECTION VISION & PARTENARIAT --- */}
        <div className="mb-32 relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-10 opacity-10">
                <Users size={300} />
            </div>
            
            <div className="relative z-10 p-10 md:p-20 flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <HorizontalParallax direction={1} speed={30}>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 whitespace-pre-line">{t('vision_title')}</h2>
                    </HorizontalParallax>
                    
                    <div className="h-1 w-20 bg-cyan-500 mb-8 rounded-full"></div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6 font-bold">
                        {t('vision_subtitle')}
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        {t('vision_text')}
                    </p>
                </div>
                
                <div className="md:w-1/2 grid grid-cols-1 gap-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <ShieldCheck className="text-green-400 shrink-0" />
                        <span className="font-bold text-white">{t('vision_card_1')}</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <Rocket className="text-purple-400 shrink-0" />
                        <span className="font-bold text-white">{t('vision_card_2')}</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                        <Users className="text-blue-400 shrink-0" />
                        <span className="font-bold text-white">{t('vision_card_3')}</span>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 md:mt-32 text-center">
            <Link href="/contact" className="inline-block px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-xl tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                {t('vision_cta')}
            </Link>
        </div>

      </div>
    </div>
  );
}
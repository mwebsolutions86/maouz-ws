'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Smartphone, Brain, Globe, Layers, Cpu, Zap, Plus, Scan } from 'lucide-react'; // ArrowRight retiré
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';

// DÉFINITION DU TYPE (POUR CORRIGER L'ERREUR "ANY")
interface ServiceType {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  specs: string[];
}

// DONNÉES SERVICES
const services: ServiceType[] = [
  {
    id: "01",
    icon: Smartphone,
    title: "MOBILE ENGINEERING",
    description: "Apps natives React Native 60FPS. Architecture Offline-first. Haptique avancée.",
    specs: ["iOS & Android", "Biométrie", "Temps Réel"]
  },
  {
    id: "02",
    icon: Brain,
    title: "AI INTEGRATION",
    description: "Injection de LLM (GPT-4) et agents autonomes pour automatiser le business.",
    specs: ["RAG Systems", "Chatbots", "Analyse Data"]
  },
  {
    id: "03",
    icon: Globe,
    title: "IMMERSIVE WEB",
    description: "Expériences 3D WebGL (Three.js) qui convertissent et marquent les esprits.",
    specs: ["WebGL / 3D", "Shaders", "Performance"]
  },
  {
    id: "04",
    icon: Layers,
    title: "SAAS ARCHITECTURE",
    description: "Backends scalables et sécurisés pour encaisser des millions de requêtes.",
    specs: ["Cloud Native", "Microservices", "Sécurité"]
  },
  {
    id: "05",
    icon: Cpu,
    title: "IOT & HARDWARE",
    description: "Fusion du code et du métal. Pilotage de drones et objets connectés.",
    specs: ["Bluetooth", "MQTT", "Embedded"]
  },
  {
    id: "06",
    icon: Zap,
    title: "PERFORMANCE",
    description: "Optimisation radicale. Nous visons le score 100/100 sur Google Lighthouse.",
    specs: ["SEO Technique", "Core Vitals", "Speed"]
  }
];

// COMPOSANT CARTE "SPOTLIGHT"
// Correction : On utilise le type ServiceType au lieu de "any"
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
      className="group relative w-full h-full bg-black/40 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors"
    >
      {/* EFFET DE LUMIÈRE QUI SUIT LA SOURIS */}
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
      
      {/* CONTENU DE LA CARTE */}
      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        
        {/* En-tête Carte */}
        <div className="flex justify-between items-start mb-8">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/50 transition-all duration-500">
                <service.icon size={32} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <div className="text-right">
                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">{service.id}</span>
                <Scan size={16} className="text-cyan-500/50 ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
        </div>

        {/* Corps Carte */}
        <div>
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide group-hover:text-cyan-400 transition-colors">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4 group-hover:border-cyan-500/50 transition-colors">
                {service.description}
            </p>
        </div>

        {/* Footer Carte (Specs) */}
        <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
            {service.specs.map((spec: string, i: number) => (
                <span key={i} className="text-[10px] font-mono font-bold px-3 py-1 bg-white/5 rounded text-gray-500 border border-transparent group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all">
                    {spec}
                </span>
            ))}
        </div>

        {/* Décoration "Tech" Coins */}
        <Plus size={10} className="absolute top-4 right-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Plus size={10} className="absolute bottom-4 left-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-20 border-b border-white/10 pb-8 md:pb-10">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-2 md:mb-4">CAPACITÉS OPÉRATIONNELLES</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 leading-none">
                    NOTRE <span className="text-white">ARSENAL</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* GRILLE SPOTLIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {services.map((service, index) => (
             <div key={index} className="h-[400px]">
                <SpotlightCard service={service} index={index} />
             </div>
           ))}
        </div>

        {/* CTA FINAL */}
        <div className="mt-20 md:mt-32 text-center">
            <p className="text-gray-500 mb-4 md:mb-6 font-mono text-xs md:text-sm">PRÊT À DÉPLOYER ?</p>
            <Link href="/contact" className="inline-block px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-xl tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                LANCER L&apos;INITIATIVE
            </Link>
        </div>

      </div>
    </div>
  );
}
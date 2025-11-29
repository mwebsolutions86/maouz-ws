'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Smartphone, Brain, Cpu, Code, Layers, Zap, Search, PenTool, Rocket, Mail, TrendingUp, ShieldCheck, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Background3D from '@/app/components/3d/Background3D';

// --- PARALLAXE ---
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: number;
}

function Parallax({ children, speed = 50, className = "" }: ParallaxProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

function HorizontalParallax({ children, direction = 1, speed = 100, className = "" }: ParallaxProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-20 * direction, speed * direction]);
  return <motion.div ref={ref} style={{ x }} className={className}>{children}</motion.div>;
}

// --- COMPOSANTS UI ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ icon: Icon, title, desc }: any) => (
  <div className="group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-md hover:bg-white/5 transition-all duration-500 overflow-hidden h-full">
    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:border-cyan-500/50 group-hover:bg-cyan-500/10 transition-colors">
      <Icon size={24} className="text-gray-400 group-hover:text-cyan-400 transition-colors md:w-[28px] md:h-[28px]" />
    </div>
    <h3 className="text-lg md:text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StepCard = ({ number, title, desc, icon: Icon }: any) => (
  <div className="flex flex-col items-center text-center p-6 border border-white/5 rounded-xl bg-white/[0.02]">
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-900/50 to-blue-900/50 flex items-center justify-center border border-cyan-500/30 mb-4 md:mb-6 relative">
      <Icon size={24} className="text-cyan-400 md:w-[30px] md:h-[30px]" />
      <div className="absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-black border border-white/10 rounded-full flex items-center justify-center text-[10px] md:text-xs font-bold text-white">
        {number}
      </div>
    </div>
    <h4 className="text-base md:text-lg font-bold text-white mb-2">{title}</h4>
    <p className="text-xs md:text-sm text-gray-400">{desc}</p>
  </div>
);

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      <Background3D />

      {/* SECTION 1 : HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
        <div className="text-center max-w-7xl w-full">
          
          <HorizontalParallax direction={-1} speed={30}>
            <h2 className="text-cyan-500 text-[10px] md:text-sm font-bold tracking-[0.5em] md:tracking-[0.8em] mb-4 md:mb-8 text-center uppercase">
              Agence Digitale d&apos;Élite
            </h2>
          </HorizontalParallax>
          
          <div className="flex flex-col items-center mb-8 relative w-full">
            <HorizontalParallax direction={-1} speed={100} className="w-full">
              <h1 className="text-5xl sm:text-6xl md:text-9xl font-black leading-none tracking-tighter text-white/90 text-center">
                FORGING
              </h1>
            </HorizontalParallax>
            
            <HorizontalParallax direction={1} speed={100} className="w-full">
              <h1 className="text-5xl sm:text-6xl md:text-9xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 text-center">
                REALITY
              </h1>
            </HorizontalParallax>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed px-4 text-center"
          >
            Nous transformons des idées complexes en <span className="text-white font-medium">machines de guerre digitales</span>. Architecture robuste, design immersif et performance absolue pour dominer votre marché.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto relative px-8 py-4 bg-white text-black font-black text-xs md:text-sm tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center">
              DÉMARRER LE PROJET
            </Link>
            <Link href="/services" className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-widest text-gray-400 hover:text-white transition-colors">
              NOTRE EXPERTISE <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 : SERVICES (ARSENAL) */}
      <section id="services" className="relative z-10 py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-12 md:mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <HorizontalParallax direction={1} speed={80} className="w-full">
                <h2 className="text-3xl md:text-6xl font-black text-white mb-2">ARSENAL</h2>
                <p className="text-cyan-400 font-mono text-xs md:text-sm"> TECHNOLOGIES</p>
            </HorizontalParallax>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ServiceCard index={1} icon={Smartphone} title="Mobile Engineering" desc="Apps natives React Native haute performance. Fluidité 60FPS et usage hors-ligne." />
            <ServiceCard index={2} icon={Brain} title="AI Integration" desc="Intégration d'IA (GPT-4) pour automatiser vos processus et analyser vos données." />
            <ServiceCard index={3} icon={Globe} title="Immersive Web" desc="Sites 3D (Three.js) primés qui marquent les esprits et convertissent." />
            <ServiceCard index={4} icon={Layers} title="SaaS Architecture" desc="Plateformes cloud scalables capables de gérer des milliers d'utilisateurs." />
            <ServiceCard index={5} icon={Cpu} title="IoT & Hardware" desc="Connexion de vos logiciels au monde physique (Capteurs, Bluetooth)." />
            <ServiceCard index={6} icon={Zap} title="Performance Audit" desc="Optimisation radicale de la vitesse pour le SEO Google et l'expérience utilisateur." />
        </div>
      </section>

      {/* NOUVELLE SECTION : IMPACT STRATÉGIQUE (RASSURER LE CLIENT BUSINESS) */}
      <section className="relative z-10 py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-4xl font-black text-white mb-4">AU-DELÀ DU CODE</h2>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    La technologie n&apos;est qu&apos;un outil. Notre véritable métier est de générer de la croissance pour votre entreprise.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="p-6">
                    <TrendingUp size={40} className="text-cyan-400 mb-6 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold text-white mb-3">VITESSE = REVENUS</h3>
                    <p className="text-gray-400 text-sm">
                        Amazon a prouvé que 100ms de latence coûte 1% de ventes. Nous optimisons chaque milliseconde pour maximiser votre conversion.
                    </p>
                </div>
                <div className="p-6">
                    <ShieldCheck size={40} className="text-cyan-400 mb-6 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold text-white mb-3">FIABILITÉ ABSOLUE</h3>
                    <p className="text-gray-400 text-sm">
                        Pas de bugs critiques, pas de maintenance chaotique. Nous livrons des systèmes testés, sécurisés et prêts à scaler.
                    </p>
                </div>
                <div className="p-6">
                    <Clock size={40} className="text-cyan-400 mb-6 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold text-white mb-3">TIME-TO-MARKET</h3>
                    <p className="text-gray-400 text-sm">
                        Le marché n&apos;attend pas. Grâce à notre stack technique moderne, nous déployons vos MVP deux fois plus vite qu&apos;une agence classique.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SECTION 3 : NOTRE MÉTHODE */}
      <section id="process" className="relative z-10 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <HorizontalParallax direction={-1} speed={60}>
              <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6">NOTRE MÉTHODOLOGIE</h2>
            </HorizontalParallax>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              Pas de place pour le hasard. Nous appliquons un processus d&apos;ingénierie rigoureux pour garantir le succès.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <StepCard number="01" title="AUDIT & VISION" desc="Nous disséquons votre besoin pour construire une stratégie technique infaillible." icon={Search} />
            <StepCard number="02" title="ARCHITECTURE" desc="Design système robuste et UX/UI centrée sur la conversion et l&apos;émotion." icon={PenTool} />
            <StepCard number="03" title="DÉVELOPPEMENT" desc="Code propre, testé et optimisé. Sprints agiles et livraisons régulières." icon={Code} />
            <StepCard number="04" title="DÉPLOIEMENT" desc="Mise en production, monitoring et maintenance proactive." icon={Rocket} />
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section id="nexus" className="relative z-10 py-20 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="order-2 lg:order-1">
                    <HorizontalParallax direction={-1} speed={30}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-400 font-mono text-[10px] md:text-xs font-bold">PROJET SIGNATURE</span>
                        </div>
                    </HorizontalParallax>
                    <HorizontalParallax direction={1} speed={80}>
                        <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-none text-white">NEXUS <br/> <span className="text-cyan-500">AI FIT</span></h2>
                    </HorizontalParallax>
                    <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-8">
                        L&apos;application de fitness ultime. Fusionnant Bio-Tracking, Intelligence Artificielle et Design Système.
                        <br/><br/>
                        La preuve vivante de notre capacité à délivrer des produits complexes et grand public.
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        <div className="px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded border border-white/10 text-[10px] md:text-xs font-bold text-gray-400">REACT NATIVE</div>
                        <div className="px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded border border-white/10 text-[10px] md:text-xs font-bold text-gray-400">SUPABASE</div>
                        <div className="px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded border border-white/10 text-[10px] md:text-xs font-bold text-gray-400">GROQ AI</div>
                    </div>
                </div>
                <Parallax speed={20} className="relative h-[550px] md:h-[700px] w-full flex items-center justify-center order-1 lg:order-2">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] md:blur-[120px] rounded-full" />
                    <div className="relative z-10 w-full max-w-[280px] md:max-w-[350px] h-[550px] md:h-[700px] bg-black border-[6px] md:border-[8px] border-[#1a1a1a] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                        <div className="w-full h-full relative">
                             <Image src="/dashboardW.jpeg" alt="Nexus App" fill className="object-cover opacity-90" unoptimized />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </Parallax>
            </div>
        </div>
      </section>

      {/* NOUVELLE SECTION : ALLIANCE TECHNOLOGIQUE (PREUVE SOCIALE) */}
      <section className="py-12 border-t border-white/5 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] md:text-xs font-bold text-gray-600 tracking-[0.3em] mb-8">PROPULSÉ PAR LES MEILLEURS STANDARDS</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {/* On simule des logos avec du texte stylisé pour l'instant */}
                <span className="text-xl font-black text-white">NEXT.JS</span>
                <span className="text-xl font-black text-white">VERCEL</span>
                <span className="text-xl font-black text-white">REACT</span>
                <span className="text-xl font-black text-white">AWS</span>
                <span className="text-xl font-black text-white">SHOPIFY</span>
                <span className="text-xl font-black text-white">STRIPE</span>
            </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-20 md:py-40 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
            <HorizontalParallax direction={1} speed={100}>
                <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 text-white tracking-tighter leading-none">PRÊT À CODER <br/> <span className="text-cyan-500">L&apos;AVENIR ?</span></h2>
            </HorizontalParallax>
            <p className="text-gray-400 mb-8 md:mb-12 text-base md:text-xl leading-relaxed max-w-2xl mx-auto px-4 mt-4">
                Ne laissez pas vos idées rester des idées. Discutons de votre projet et créons quelque chose d&apos;exceptionnel.
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-3 md:gap-4 px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-lg tracking-widest rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                DÉMARRER LA MISSION
            </Link>
        </div>
      </section>
    </div>
  );
}
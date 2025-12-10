'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// CORRECTION ICI : Ajout de 'Code' et 'Mail' dans les imports
import { 
  ArrowRight, Smartphone, Brain, Globe, Layers, Cpu, Zap, Search, 
  PenTool, Rocket, TrendingUp, ShieldCheck, Clock, Activity, Server, 
  Lock, Wifi, FileText, Database, SmartphoneCharging, Code, Mail 
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Background3D from '@/app/components/3d/Background3D';
import { useTranslations } from 'next-intl';

// --- PARALLAXE ---
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: number;
}

function HorizontalParallax({ children, direction = 1, speed = 100, className = "" }: ParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-20 * direction, speed * direction]);
  return <motion.div ref={ref} style={{ x }} className={className}>{children}</motion.div>;
}

// --- COMPOSANTS UI ---
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ServiceCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string, index?: number }) => (
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
const StepCard = ({ number, title, desc, icon: Icon }: { number: string, title: string, desc: string, icon: any }) => (
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

// --- SYSTEM MONITOR ---
const SystemMonitor = () => {
  // FIX: Added memoryLoad state
  const [cpuLoad, setCpuLoad] = useState(45);
  const [memoryLoad, setMemoryLoad] = useState(62); 
  const [netSpeed, setNetSpeed] = useState(840);
  
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCpuLoad(prev => Math.min(99, Math.max(20, prev + (Math.random() * 20 - 10))));
      // FIX: Updating memoryLoad randomly
      setMemoryLoad(prev => Math.min(99, Math.max(30, prev + (Math.random() * 10 - 5))));
      setNetSpeed(prev => Math.min(999, Math.max(500, prev + (Math.random() * 100 - 50))));
    }, 800);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return <div className="w-full h-[300px] bg-white/5 rounded-xl animate-pulse" />;

  return (
    <div className="w-full max-w-4xl mx-auto bg-black/80 border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center gap-3">
            <Activity size={16} className="text-green-500 animate-pulse" />
            <span className="text-xs font-mono font-bold text-white tracking-widest">MAZOUZ_CORE // MONITOR</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-green-500">LIVE</span>
        </div>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
            <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-cyan-400">
                    <span>CPU_LOAD</span>
                    <span>{Math.round(cpuLoad)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" animate={{ width: `${cpuLoad}%` }} transition={{ ease: "linear", duration: 0.5 }} />
                </div>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-purple-400">
                    <span>MEMORY_ALLOC</span>
                    {/* FIX: Using memoryLoad here */}
                    <span>{Math.round(memoryLoad)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
                    {/* FIX: Animating width with memoryLoad */}
                    <motion.div className="h-full bg-purple-500 shadow-[0_0_10px_#a855f7]" animate={{ width: `${memoryLoad}%` }} transition={{ ease: "linear", duration: 0.5 }} />
                </div>
            </div>
            <div className="flex items-center justify-between p-4 border border-white/10 rounded-lg bg-white/[0.02]">
                <div className="flex items-center gap-3">
                    <Wifi size={20} className="text-white/50" />
                    <span className="text-xs font-mono text-gray-400">BANDWIDTH</span>
                </div>
                <span className="text-xl font-black text-white font-mono">{Math.round(netSpeed)} <span className="text-xs text-gray-600">MB/S</span></span>
            </div>
        </div>
        <div className="font-mono text-xs space-y-2 h-[150px] overflow-hidden relative text-green-500/70">
            <div>&gt; SYSTEM INTEGRITY: 100%</div>
            <div>&gt; ENCRYPTING DATA PACKETS...</div>
            <div>&gt; SYNCING GLOBAL STATE...</div>
            <div>&gt; OPTIMIZING RENDER CYCLES...</div>
            <div className="text-white font-bold">&gt; USER_AGENT: ELITE DETECTED</div>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const t = useTranslations('HomePage');
  const servicesT = useTranslations('ServicesPage');
  const methodeT = useTranslations('MethodePage');

  return (
    <div className="relative w-full min-h-screen bg-transparent text-white overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* SECTION 1 : HERO */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4 pt-20 overflow-hidden">
        <div className="text-center max-w-7xl w-full">
          
          <HorizontalParallax direction={-1} speed={30}>
            <h2 className="text-cyan-500 text-[10px] md:text-sm font-bold tracking-[0.5em] md:tracking-[0.8em] mb-4 md:mb-8 text-center uppercase">
              {t('title')}
            </h2>
          </HorizontalParallax>
          
          <div className="flex flex-col items-center mb-8 relative w-full">
            <HorizontalParallax direction={-1} speed={100} className="w-full">
              <h1 className="text-5xl sm:text-6xl md:text-9xl font-black leading-none tracking-tighter text-white/90 text-center">
                {t('hero').split(' ')[0] || "FORGING"}
              </h1>
            </HorizontalParallax>
            
            <HorizontalParallax direction={1} speed={100} className="w-full">
              <h1 className="text-5xl sm:text-6xl md:text-9xl font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400 text-center">
                {t('hero').split(' ')[1] || "REALITY"}
              </h1>
            </HorizontalParallax>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed px-4 text-center"
          >
            {t('description')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4"
          >
            <Link href="/contact" className="w-full sm:w-auto relative px-8 py-4 bg-white text-black font-black text-xs md:text-sm tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center">
              {t('cta_start')}
            </Link>
            <Link href="/services" className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold tracking-widest text-gray-400 hover:text-white transition-colors">
              {t('cta_services')} <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 : SERVICES (ARSENAL) */}
      <section id="services" className="relative z-10 py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-12 md:mb-20 border-b border-white/10 pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <HorizontalParallax direction={1} speed={80} className="w-full">
                <h2 className="text-3xl md:text-6xl font-black text-white mb-2">{t('arsenal_title')}</h2>
                <p className="text-cyan-400 font-mono text-xs md:text-sm"> {t('arsenal_sub')}</p>
            </HorizontalParallax>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <ServiceCard index={1} icon={Smartphone} title={servicesT('serv_1_title')} desc={servicesT('serv_1_desc')} />
            <ServiceCard index={2} icon={Brain} title={servicesT('serv_2_title')} desc={servicesT('serv_2_desc')} />
            <ServiceCard index={3} icon={Globe} title={servicesT('serv_3_title')} desc={servicesT('serv_3_desc')} />
            <ServiceCard index={4} icon={Layers} title={servicesT('serv_4_title')} desc={servicesT('serv_4_desc')} />
            <ServiceCard index={5} icon={Cpu} title={servicesT('serv_5_title')} desc={servicesT('serv_5_desc')} />
            <ServiceCard index={6} icon={Zap} title={servicesT('serv_6_title')} desc={servicesT('serv_6_desc')} />
        </div>
      </section>

      {/* NOUVELLE SECTION : IMPACT STRATÉGIQUE */}
      <section className="relative z-10 py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <HorizontalParallax direction={1} speed={40}>
                  <h2 className="text-2xl md:text-4xl font-black text-white mb-4">{t('impact_title')}</h2>
                </HorizontalParallax>
                <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                    {t('impact_desc')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="p-6">
                    <TrendingUp size={40} className="text-cyan-400 mb-6 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold text-white mb-3">{t('imp_1_title')}</h3>
                    <p className="text-gray-400 text-sm">{t('imp_1_desc')}</p>
                </div>
                <div className="p-6">
                    <ShieldCheck size={40} className="text-cyan-400 mb-6 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold text-white mb-3">{t('imp_2_title')}</h3>
                    <p className="text-gray-400 text-sm">{t('imp_2_desc')}</p>
                </div>
                <div className="p-6">
                    <Clock size={40} className="text-cyan-400 mb-6 mx-auto md:mx-0" />
                    <h3 className="text-xl font-bold text-white mb-3">{t('imp_3_title')}</h3>
                    <p className="text-gray-400 text-sm">{t('imp_3_desc')}</p>
                </div>
            </div>
        </div>
      </section>

      {/* SYSTEM MONITOR */}
      <section className="relative z-10 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center mb-12">
             <HorizontalParallax direction={1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4">{t('monitor_sub')}</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={-1} speed={50}>
              <h3 className="text-3xl md:text-5xl font-black text-white">{t('monitor_title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">{t('monitor_title_2')}</span></h3>
            </HorizontalParallax>
          </div>
          <div className="px-4 md:px-0">
              <SystemMonitor />
          </div>
      </section>

      {/* NOUVELLE SECTION : INTELLIGENCE STRATÉGIQUE */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-20">
            <HorizontalParallax direction={-1} speed={20}>
                <h2 className="text-cyan-500 font-mono text-xs tracking-widest mb-4 flex items-center gap-2">
                    <Database size={14} /> {t('intel_sub')}
                </h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
              <h3 className="text-3xl md:text-6xl font-black text-white">{t('intel_title_1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{t('intel_title_2')}</span></h3>
            </HorizontalParallax>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FileText size={60} />
                </div>
                <div className="text-[10px] font-mono text-purple-500 mb-4 tracking-widest">{t('art_1_tag')}</div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{t('art_1_title')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{t('art_1_desc')}</p>
             </div>

             <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <SmartphoneCharging size={60} />
                </div>
                <div className="text-[10px] font-mono text-cyan-500 mb-4 tracking-widest">{t('art_2_tag')}</div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{t('art_2_title')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{t('art_2_desc')}</p>
             </div>

             <div className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-green-500/30 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe size={60} />
                </div>
                <div className="text-[10px] font-mono text-green-500 mb-4 tracking-widest">{t('art_3_tag')}</div>
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">{t('art_3_title')}</h4>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">{t('art_3_desc')}</p>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION METHODOLOGIE */}
      <section id="process" className="relative z-10 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <HorizontalParallax direction={-1} speed={60}>
              <h2 className="text-2xl md:text-5xl font-black mb-4 md:mb-6">{t('method_title')}</h2>
            </HorizontalParallax>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
              {t('method_desc')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {/* ICI, ajout de l'import 'Code' utilisé dans StepCard */}
            <StepCard number="01" title={methodeT('step_1_title')} desc={methodeT('step_1_desc')} icon={Search} />
            <StepCard number="02" title={methodeT('step_2_title')} desc={methodeT('step_2_desc')} icon={PenTool} />
            <StepCard number="03" title={methodeT('step_3_title')} desc={methodeT('step_3_desc')} icon={Code} />
            <StepCard number="04" title={methodeT('step_4_title')} desc={methodeT('step_4_desc')} icon={Rocket} />
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
                            <span className="text-green-400 font-mono text-[10px] md:text-xs font-bold">{t('nexus_badge')}</span>
                        </div>
                    </HorizontalParallax>
                    <HorizontalParallax direction={1} speed={80}>
                        <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-none text-white">{t('nexus_title_1')} <br/> <span className="text-cyan-500">{t('nexus_title_2')}</span></h2>
                    </HorizontalParallax>
                    <p className="text-base md:text-xl text-gray-300 leading-relaxed mb-8">
                        {t('nexus_desc')}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                        <div className="px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded border border-white/10 text-[10px] md:text-xs font-bold text-gray-400">REACT NATIVE</div>
                        <div className="px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded border border-white/10 text-[10px] md:text-xs font-bold text-gray-400">SUPABASE</div>
                        <div className="px-3 py-1 md:px-4 md:py-2 bg-white/5 rounded border border-white/10 text-[10px] md:text-xs font-bold text-gray-400">GROQ AI</div>
                    </div>
                </div>
                <div className="relative h-[550px] md:h-[700px] w-full flex items-center justify-center order-1 lg:order-2">
                    <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] md:blur-[120px] rounded-full" />
                    <div className="relative z-10 w-full max-w-[280px] md:max-w-[350px] h-[550px] md:h-[700px] bg-black border-[6px] md:border-[8px] border-[#1a1a1a] rounded-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden ring-1 ring-white/10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
                        <div className="w-full h-full relative">
                             <Image src="/dashboardW.webp" alt="Nexus App" fill className="object-cover opacity-90" unoptimized />
                             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-20 md:py-40 px-6 text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
            <HorizontalParallax direction={1} speed={100}>
                <h2 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 text-white tracking-tighter leading-none">{t('contact_title_1')} <br/> <span className="text-cyan-500">{t('contact_title_2')}</span></h2>
            </HorizontalParallax>
            <p className="text-gray-400 mb-8 md:mb-12 text-base md:text-xl leading-relaxed max-w-2xl mx-auto px-4 mt-4">
                {t('contact_desc')}
            </p>
            <Link href="/contact" className="group inline-flex items-center gap-3 md:gap-4 px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-lg tracking-widest rounded-full hover:bg-cyan-400 transition-all shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                {/* ICI, ajout de l'import 'Mail' utilisé */}
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                {t('contact_btn')}
            </Link>
        </div>
      </section>
    </div>
  );
}
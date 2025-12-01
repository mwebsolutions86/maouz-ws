'use client';

import React from 'react';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Search, PenTool, Code, Rocket, ShieldCheck, CheckCircle2, FileCode, Trello, GitBranch, Server, Eye, Lock, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function MethodePage() {
  const t = useTranslations('MethodePage');

  const steps = [
    { id: "01", phase: "INITIATION", title: t('step_1_title'), icon: Search, desc: t('step_1_desc'), inputs: ["Brief Client", "Audit", "KPI"], outputs: ["Cahier des Charges", "Roadmap", "Stack"] },
    { id: "02", phase: "BLUEPRINT", title: t('step_2_title'), icon: PenTool, desc: t('step_2_desc'), inputs: ["Wireframes", "UI", "User Stories"], outputs: ["Figma Validé", "DB Schema", "Design System"] },
    { id: "03", phase: "PRODUCTION", title: t('step_3_title'), icon: Code, desc: t('step_3_desc'), inputs: ["Maquettes", "Assets", "Contenu"], outputs: ["Staging", "GitHub", "Unit Tests"] },
    { id: "04", phase: "QUALITÉ", title: t('step_4_title'), icon: ShieldCheck, desc: t('step_4_desc'), inputs: ["Beta", "Scénarios"], outputs: ["Rapport Audit", "Lighthouse 100%", "Validation"] },
    { id: "05", phase: "DÉPLOIEMENT", title: t('step_5_title'), icon: Rocket, desc: t('step_5_desc'), inputs: ["Validation", "DNS", "API Keys"], outputs: ["Live Site", "Admin", "Doc"] }
  ];

  const qualityStandards = [
    { title: t('std_1_title'), desc: t('std_1_desc'), icon: FileCode },
    { title: t('std_2_title'), desc: t('std_2_desc'), icon: Lock },
    { title: t('std_3_title'), desc: t('std_3_desc'), icon: Server }
  ];

  return (
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      <div className="max-w-6xl mx-auto relative z-10 pb-20">
        
        <div className="mb-20 md:mb-32 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">{t('subtitle')}</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={50}>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>{t('title_1')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">{t('title_2')}</span>
                </h1>
            </HorizontalParallax>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto mt-8 leading-relaxed">{t('intro')}</p>
        </div>

        <div className="relative mb-32">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 md:-translate-x-1/2" />
            <div className="space-y-16 md:space-y-24">
                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-0`}>
                            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-[#050505] border-2 border-cyan-500 rounded-full translate-y-2 md:-translate-x-1/2 z-10 shadow-[0_0_15px_#06b6d4] -ml-[7px] md:ml-0" />
                            <div className={`pl-16 md:pl-0 w-full md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 text-left'}`}>
                                <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-5xl md:text-7xl font-black text-white/5 select-none absolute -top-6 md:-top-10 z-0">{step.id}</span>
                                        <div className="relative z-10 px-3 py-1 border border-cyan-500/30 bg-cyan-950/30 rounded text-[10px] font-bold text-cyan-400 tracking-widest">{step.phase}</div>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 relative z-10">{step.desc}</p>
                                    <div className={`relative z-10 w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 flex flex-col md:flex-row gap-6 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                        <div>
                                            <p className="text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-wider flex items-center gap-2"><ArrowRight size={10} className="rotate-90 md:rotate-0" /> {t('input')}</p>
                                            <ul className={`text-xs text-gray-400 space-y-1 font-mono ${isEven ? 'md:text-right' : 'text-left'}`}>{step.inputs.map((item, i) => <li key={i}>• {item}</li>)}</ul>
                                        </div>
                                        <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-white/10"></div>
                                        <div>
                                            <p className="text-[10px] font-bold text-green-500 mb-2 uppercase tracking-wider flex items-center gap-2"><CheckCircle2 size={10} /> {t('output')}</p>
                                            <ul className={`text-xs text-white space-y-1 font-mono font-bold ${isEven ? 'md:text-right' : 'text-left'}`}>{step.outputs.map((item, i) => <li key={i}>• {item}</li>)}</ul>
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

        <div className="mb-32">
            <div className="text-center mb-16">
                <HorizontalParallax direction={1} speed={30}>
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-4">{t('standards_title')}</h2>
                </HorizontalParallax>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">{t('standards_subtitle')}</p>
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

        <div className="mb-32 relative rounded-3xl overflow-hidden border border-white/10 bg-black p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
             <div className="relative z-10 md:w-1/2">
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 mb-6">
                    <Eye size={12} className="text-green-400" />
                    <span className="text-[10px] font-bold text-green-300 tracking-widest">{t('transparency_badge')}</span>
                 </div>
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{t('transparency_title')}</h2>
                 <p className="text-gray-400 leading-relaxed mb-6">{t('transparency_desc')}</p>
             </div>
             <div className="relative z-10 md:w-1/2 h-[300px] w-full bg-gray-900 rounded-xl border border-white/10 flex items-center justify-center shadow-2xl">
                 <div className="text-center">
                     <Activity size={64} className="text-white/10 mx-auto mb-4" />
                     <p className="text-xs font-mono text-gray-600">CLIENT_DASHBOARD_PREVIEW.EXE</p>
                 </div>
             </div>
        </div>

        <div className="text-center">
            <p className="text-gray-500 mb-6 font-mono text-xs md:text-sm">{t('cta_text')}</p>
            <Link href="/contact" className="inline-block px-8 py-4 md:px-12 md:py-6 bg-white text-black font-black text-sm md:text-xl tracking-widest rounded-full hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                {t('cta_btn')}
            </Link>
        </div>

      </div>
    </div>
  );
}
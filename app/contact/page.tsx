'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-6xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-20 text-center">
            <HorizontalParallax direction={-1} speed={20}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4">CANAL SÉCURISÉ</h2>
            </HorizontalParallax>
            
            <HorizontalParallax direction={1} speed={40}>
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>INITIER LE</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">SIGNAL</span>
                </h1>
            </HorizontalParallax>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            
            {/* FORMULAIRE */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl"
            >
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">IDENTIFIANT</label>
                            <input 
                                type="text" 
                                placeholder="Votre Nom" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">FRÉQUENCE (EMAIL)</label>
                            <input 
                                type="email" 
                                placeholder="votre@email.com" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">TYPE DE MISSION</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all appearance-none cursor-pointer text-sm">
                            <option className="bg-black">Développement Mobile (React Native)</option>
                            <option className="bg-black">Site Web Immersif (3D)</option>
                            <option className="bg-black">Architecture SaaS & Cloud</option>
                            <option className="bg-black">Audit & Performance</option>
                            <option className="bg-black">Autre / Partenariat</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 tracking-widest ml-1">DONNÉES DU PROJET</label>
                        <textarea 
                            rows={5}
                            placeholder="Décrivez votre vision, vos contraintes et vos objectifs..." 
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all resize-none text-sm"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="w-full group bg-white text-black font-black text-base md:text-lg py-4 md:py-5 rounded-xl hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,243,255,0.3)]"
                    >
                        TRANSMETTRE LA DEMANDE <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </motion.div>

            {/* INFOS */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col justify-center gap-8 md:gap-10 md:pl-10"
            >
                <div>
                    <h3 className="text-xl md:text-2xl font-black text-white mb-4 md:mb-6 flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        STATUT OPÉRATIONNEL
                    </h3>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
                        Nous sommes actuellement ouverts aux nouveaux projets pour le <span className="text-white font-bold">Q1 2026</span>. 
                        Notre équipe analyse chaque demande sous 24h pour garantir une adéquation technique parfaite.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start gap-4 p-4 md:p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                        <div className="bg-cyan-500/10 p-2 md:p-3 rounded-lg">
                            <Mail className="text-cyan-400" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-[10px] md:text-sm tracking-widest mb-1">COMMUNICATION DIRECTE</h4>
                            <a href="mailto:contact@mazouzws.com" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm md:text-lg break-all">contact@mazouzws.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 md:p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                        <div className="bg-purple-500/10 p-2 md:p-3 rounded-lg">
                            <MapPin className="text-purple-400" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-[10px] md:text-sm tracking-widest mb-1">BASE OPÉRATIONNELLE</h4>
                            <p className="text-gray-400 text-sm md:text-lg">Digital HQ • Worldwide</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 md:p-6 border border-white/5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                        <div className="bg-blue-500/10 p-2 md:p-3 rounded-lg">
                            <MessageSquare className="text-blue-400" size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-[10px] md:text-sm tracking-widest mb-1">RÉSEAUX SOCIAUX</h4>
                            <div className="flex gap-4 mt-2">
                                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-bold">LINKEDIN</a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-bold">TWITTER / X</a>
                                <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-bold">GITHUB</a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </div>
  );
}
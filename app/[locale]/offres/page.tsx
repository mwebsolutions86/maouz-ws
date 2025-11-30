'use client';

import React, { useState } from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Check, Key, RefreshCcw, Settings, ArrowRight, ShieldCheck, Zap, Database, MessageCircle, CreditCard, FileSignature, PenTool, Rocket, Lock, Lightbulb, Search, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// --- DÉFINITION DES TYPES (CORRIGÉE) ---
interface OfferType {
  title: string;
  price: string;
  period: string;
  desc: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  features: string[];
  cta: string;
  highlight: boolean;
  setup?: string;  // Optionnel : Frais d'entrée (Abonnement)
  detail?: string; // Optionnel : Détail supplémentaire
}

// --- DONNÉES DES OFFRES ---
const acquisitionData: OfferType[] = [
  {
    title: "PACK VITRINE",
    price: "1 750 DH",
    period: "PAIEMENT UNIQUE",
    desc: "La solution idéale pour lancer votre présence en ligne. Vous payez une fois, le site vous appartient à 100%.",
    icon: Key,
    features: [
      "Site Vitrine (1 à 5 pages)",
      "Design Responsive (Mobile & PC)",
      "Référencement Naturel (SEO) de base",
      "Formulaire de Contact sécurisé",
      "Livraison du Code Source complet"
    ],
    cta: "COMMANDER SUR WHATSAPP",
    highlight: false
  },
  {
    title: "PACK BUSINESS",
    price: "3 500 DH",
    period: "PAIEMENT UNIQUE",
    desc: "Pour les entreprises établies. Plus de contenu, plus de fonctionnalités, plus d'impact.",
    icon: Key,
    features: [
      "Site complet (jusqu'à 10 pages)",
      "CMS inclus (Admin panneau)",
      "Blog / Actualités",
      "SEO Technique Avancé",
      "Google Analytics & Maps"
    ],
    cta: "COMMANDER SUR WHATSAPP",
    highlight: true
  },
  {
    title: "E-COMMERCE",
    price: "DÈS 8 000 DH",
    period: "PAIEMENT UNIQUE",
    desc: "Votre boutique en ligne clé en main. Vendez vos produits 24/7.",
    icon: Key,
    features: [
      "Boutique complète (Woo/Shopify)",
      "Paiement en ligne (CMI/Stripe)",
      "Gestion Stocks & Commandes",
      "Formation Admin incluse",
      "Jusqu'à 50 produits intégrés"
    ],
    cta: "DISCUTER SUR WHATSAPP",
    highlight: false
  }
];

const subscriptionData: OfferType[] = [
  {
    title: "START",
    setup: "900 DH (FRAIS D'ENTRÉE)",
    price: "250 DH",
    period: "/ MOIS",
    desc: "L'essentiel pour exister sans se ruiner. Idéal pour tester le marché.",
    icon: RefreshCcw,
    features: [
      "Site Vitrine (Base Essential)",
      "Hébergement & Nom de Domaine",
      "Certificat SSL (Cadenas)",
      "Maintenance Technique",
      "1 modification mineure / mois"
    ],
    cta: "S'ABONNER VIA WHATSAPP",
    highlight: false
  },
  {
    title: "GROWTH",
    setup: "1 500 DH (FRAIS D'ENTRÉE)",
    price: "500 DH",
    period: "/ MOIS",
    desc: "Pour ceux qui veulent de la performance et de la sécurité active.",
    icon: RefreshCcw,
    features: [
      "Site Business (Base Business)",
      "Serveur Haute Performance",
      "Rapport de Trafic Mensuel",
      "Sécurité & Mises à jour Proactives",
      "2h de modifications / mois"
    ],
    cta: "S'ABONNER VIA WHATSAPP",
    highlight: true
  },
  {
    title: "ELITE",
    setup: "2 500 DH (FRAIS D'ENTRÉE)",
    price: "900 DH",
    period: "/ MOIS",
    desc: "Le service VIP. Une équipe technique dédiée à votre croissance.",
    icon: RefreshCcw,
    features: [
      "E-commerce ou WebApp",
      "Serveur Dédié / VPS",
      "Sauvegardes Journalières",
      "Support Prioritaire (WhatsApp)",
      "Conseil Stratégique Trimestriel"
    ],
    cta: "S'ABONNER VIA WHATSAPP",
    highlight: false
  }
];

// Fusion des données pour l'affichage conditionnel
const pricingData = {
  acquisition: acquisitionData,
  subscription: subscriptionData
};

// --- DONNÉES DU PARCOURS PROJET (NOUVEAU) ---
const journeySteps = [
  {
    id: "01",
    title: "SYNC & STRATEGY",
    desc: "Appel de découverte (Visio ou Tel). Nous définissons vos objectifs, votre cible et verrouillons le cahier des charges.",
    icon: Search,
    color: "text-blue-400",
    border: "border-blue-500/50"
  },
  {
    id: "02",
    title: "DESIGN BLUEPRINT",
    desc: "Conception des maquettes et de l'architecture. Vous validez le visuel avant que la moindre ligne de code ne soit écrite.",
    icon: PenTool,
    color: "text-purple-400",
    border: "border-purple-500/50"
  },
  {
    id: "03",
    title: "CODE FORGE",
    desc: "Phase de développement intensif. Intégration du contenu, optimisation SEO et tests de performance sur serveurs de pré-production.",
    icon: Code,
    color: "text-cyan-400",
    border: "border-cyan-500/50"
  },
  {
    id: "04",
    title: "IGNITION (LAUNCH)",
    desc: "Mise en ligne officielle. Indexation Google immédiate. Remise des clés (Accès Admin) et formation à l'utilisation.",
    icon: Rocket,
    color: "text-green-400",
    border: "border-green-500/50"
  }
];

export default function OffresPage() {
  const [mode, setMode] = useState<'acquisition' | 'subscription'>('acquisition');

  // Fonction pour générer le lien WhatsApp
  const getWhatsAppLink = (offerTitle: string) => {
    const message = `Bonjour MazouzWS, je suis intéressé par l'offre : ${offerTitle}. Pouvons-nous en discuter ?`;
    return `https://wa.me/212664814768?text=${encodeURIComponent(message)}`;
  };

  const customQuoteLink = `https://wa.me/212664814768?text=${encodeURIComponent("Bonjour MazouzWS, j'ai un projet spécifique (Sur Mesure) et je souhaiterais un devis.")}`;

  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center">
            <HorizontalParallax direction={-1} speed={20}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">Modèles Économiques</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={30}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>CHOISISSEZ</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">VOTRE VECTEUR</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* SWITCHER (ONGLETS) */}
        <div className="flex justify-center mb-16">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex relative">
                <motion.div 
                    className="absolute top-1 bottom-1 bg-cyan-500 rounded-full z-0"
                    initial={false}
                    animate={{ 
                        left: mode === 'acquisition' ? '4px' : '50%', 
                        width: 'calc(50% - 4px)' 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                
                <button 
                    onClick={() => setMode('acquisition')}
                    className={`relative z-10 px-4 md:px-10 py-3 rounded-full text-[10px] md:text-sm font-bold tracking-widest transition-colors ${mode === 'acquisition' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                    ACQUISITION
                </button>
                <button 
                    onClick={() => setMode('subscription')}
                    className={`relative z-10 px-4 md:px-10 py-3 rounded-full text-[10px] md:text-sm font-bold tracking-widest transition-colors ${mode === 'subscription' ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                >
                    ABONNEMENT
                </button>
            </div>
        </div>

        {/* GRILLE DES PRIX */}
        <div className="min-h-[600px] mb-24">
            <AnimatePresence mode='wait'>
                <motion.div 
                    key={mode}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                    {pricingData[mode].map((offer, index) => (
                        <div 
                            key={index}
                            className={`relative p-8 rounded-3xl border transition-all duration-500 group ${
                                offer.highlight 
                                ? "bg-white/[0.05] border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.1)] scale-100 md:scale-105 z-10" 
                                : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/[0.02]"
                            }`}
                        >
                            {offer.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-[10px] font-black tracking-widest rounded-full whitespace-nowrap">
                                    RECOMMANDÉ
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-colors ${
                                    offer.highlight ? "bg-cyan-500 text-black" : "bg-white/5 text-gray-400 group-hover:text-white"
                                }`}>
                                    <offer.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-2">{offer.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed min-h-[40px]">{offer.desc}</p>
                            </div>

                            <div className="mb-8 text-center py-6 border-y border-white/5 bg-black/20 rounded-xl">
                                {offer.setup && (
                                    <div className="text-[10px] text-gray-500 font-mono mb-1">
                                        {offer.setup}
                                    </div>
                                )}
                                <div className="text-3xl md:text-4xl font-black text-white">{offer.price}</div>
                                <div className="text-xs font-bold text-cyan-400 mt-1 tracking-wider">{offer.period}</div>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {offer.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check size={16} className={`shrink-0 mt-0.5 ${offer.highlight ? "text-cyan-400" : "text-gray-600"}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={getWhatsAppLink(offer.title)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all ${
                                    offer.highlight 
                                    ? "bg-white text-black hover:bg-cyan-400 hover:scale-[1.02] shadow-lg" 
                                    : "bg-white/5 text-white hover:bg-white hover:text-black border border-white/10"
                                }`}
                            >
                                <MessageCircle size={18} /> {offer.cta}
                            </a>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* SECTION PROTOCOLE FINANCIER (PAIEMENT) */}
        <div className="mb-32">
             <div className="text-center mb-12">
                 <HorizontalParallax direction={1} speed={20}>
                    <h2 className="text-2xl md:text-4xl font-black text-white flex items-center justify-center gap-3">
                        <CreditCard className="text-cyan-500" /> PROTOCOLE DE PAIEMENT
                    </h2>
                 </HorizontalParallax>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                 {/* MODE PROJET */}
                 <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-white/5 text-[10px] font-bold text-gray-400 rounded-bl-2xl uppercase tracking-widest">
                        Acquisition & Sur Mesure
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-8 mt-4">ÉCHELONNEMENT STRATÉGIQUE</h3>
                    
                    <div className="space-y-6 relative">
                        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10 z-0"></div>

                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                                <FileSignature size={18} className="text-cyan-400" />
                            </div>
                            <div>
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="text-2xl font-black text-white">40%</span>
                                    <span className="text-xs font-bold text-cyan-500 tracking-widest">SIGNATURE</span>
                                </div>
                                <p className="text-xs text-gray-400">Lancement du projet, réservation des ressources et initialisation du serveur.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black border border-purple-500/50 flex items-center justify-center shrink-0">
                                <PenTool size={18} className="text-purple-400" />
                            </div>
                            <div>
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="text-2xl font-black text-white">30%</span>
                                    <span className="text-xs font-bold text-purple-500 tracking-widest">VALIDATION DESIGN</span>
                                </div>
                                <p className="text-xs text-gray-400">Après validation des maquettes graphiques et de l&apos;architecture.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black border border-green-500/50 flex items-center justify-center shrink-0">
                                <Rocket size={18} className="text-green-400" />
                            </div>
                            <div>
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="text-2xl font-black text-white">30%</span>
                                    <span className="text-xs font-bold text-green-500 tracking-widest">LIVRAISON FINALE</span>
                                </div>
                                <p className="text-xs text-gray-400">À la mise en ligne du site et remise des accès administrateur.</p>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* MODE ABONNEMENT */}
                 <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-white/5 text-[10px] font-bold text-gray-400 rounded-bl-2xl uppercase tracking-widest">
                        Mode Abonnement
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-8 mt-4">ACTIVATION RAPIDE</h3>
                    
                    <div className="flex items-center gap-6 mb-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                            <Lock size={28} className="text-cyan-400" />
                        </div>
                        <div>
                            <div className="text-3xl font-black text-white mb-1">100%</div>
                            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">DES FRAIS DE DOSSIER</p>
                            <p className="text-[10px] text-gray-500 mt-2">À payer à la commande pour lancer la production.</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-xs text-gray-400 mb-2">Ensuite, prélèvement automatique mensuel</p>
                        <div className="inline-block px-4 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded-full">
                            ABONNEMENT SANS ENGAGEMENT
                        </div>
                    </div>

                 </div>

             </div>
        </div>

        {/* NOUVELLE SECTION : TRAJECTOIRE DE DÉPLOIEMENT (JOURNEY) */}
        <div className="mb-32">
            <div className="text-center mb-16">
                 <HorizontalParallax direction={-1} speed={30}>
                    <h2 className="text-2xl md:text-4xl font-black text-white">TRAJECTOIRE DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">DÉPLOIEMENT</span></h2>
                 </HorizontalParallax>
            </div>

            <div className="relative">
                {/* Ligne centrale desktop */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden md:block rounded-full"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {journeySteps.map((step, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`group relative p-6 rounded-2xl border bg-black/80 backdrop-blur-md z-10 hover:-translate-y-2 transition-transform duration-300 ${step.border} border-opacity-30 hover:border-opacity-80`}
                        >
                            <div className={`absolute -top-3 left-6 px-2 bg-black text-[10px] font-black ${step.color} tracking-widest border border-white/10 rounded`}>
                                STEP {step.id}
                            </div>
                            <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${step.color}`}>
                                <step.icon size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* SECTION RASSURANCE */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-12">
            <div className="flex gap-4 items-start">
                <ShieldCheck className="text-green-500 shrink-0" />
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">GARANTIE CONTRATUELLE</h4>
                    <p className="text-xs text-gray-400">Chaque mission est encadrée par un contrat clair. Délais et livrables garantis.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <Zap className="text-yellow-500 shrink-0" />
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">DÉMARRAGE RAPIDE</h4>
                    <p className="text-xs text-gray-400">Une fois le devis validé, le sprint de développement commence sous 48h.</p>
                </div>
            </div>
            <div className="flex gap-4 items-start">
                <Database className="text-purple-500 shrink-0" />
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">PROPRIÉTÉ TOTALE</h4>
                    <p className="text-xs text-gray-400">Que ce soit en achat ou après l&apos;abonnement, vos données vous appartiennent.</p>
                </div>
            </div>
        </div>

        {/* BOUTON VERS LE SUR-MESURE */}
        <div className="mt-16 p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                        <Settings className="text-purple-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">BESOIN DE SUR-MESURE ?</h3>
                </div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    Pour les projets d&apos;envergure (SaaS, Marketplaces complexes, Intégrations API lourdes). 
                    Nous élaborons un cahier des charges précis et un devis personnalisé.
                </p>
            </div>
            <a 
                href={customQuoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-8 py-4 bg-purple-600/10 border border-purple-500/50 text-purple-400 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all flex items-center gap-2"
            >
                <MessageCircle size={18} /> DEMANDER UN DEVIS
            </a>
        </div>

      </div>
    </div>
  );
}
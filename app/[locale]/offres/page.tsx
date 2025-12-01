'use client';

import React, { useState, useEffect } from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { 
  Check, Key, RefreshCcw, Settings, ShieldCheck, Zap, 
  Database, MessageCircle, CreditCard, FileSignature, 
  PenTool, Rocket, Lock 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

// --- DÉFINITION DU TYPE (CORRIGÉE) ---
// On rend 'setup' optionnel (?) pour que ça marche avec les offres d'acquisition qui n'en ont pas.
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
  setup?: string; 
}

// --- CONFIGURATION DES PRIX (Maroc vs Monde) ---
const PRICING_TIERS = {
  MA: { // MAROC
    currency: "DH",
    vitrine: "1 750", business: "3 500", ecommerce: "DÈS 8 000",
    sub_start: "250", sub_growth: "500", sub_elite: "900",
    setup_start: "900", setup_growth: "1 500", setup_elite: "2 500"
  },
  EU: { // EUROPE / INTERNATIONAL
    currency: "€",
    vitrine: "490", business: "990", ecommerce: "FROM 1 990",
    sub_start: "49", sub_growth: "99", sub_elite: "199",
    setup_start: "150", setup_growth: "250", setup_elite: "450"
  }
};

export default function OffresPage() {
  const t = useTranslations('OffresPage');
  const [mode, setMode] = useState<'acquisition' | 'subscription'>('acquisition');
  
  // État initial (Maroc par défaut pour éviter les erreurs d'hydratation)
  const [pricing, setPricing] = useState(PRICING_TIERS.MA);

  // --- DÉTECTION INTELLIGENTE DE LA ZONE (CORRIGÉE) ---
  useEffect(() => {
    // Le setTimeout permet d'attendre que le composant soit monté pour éviter l'erreur "setState during render"
    const timer = setTimeout(() => {
        // On vérifie d'abord s'il y a un cookie de préférence
        const getCookie = (name: string) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop()?.split(';').shift();
        };
        const savedRegion = getCookie('MAZOUZ_REGION');

        if (savedRegion === 'EU') {
             setPricing(PRICING_TIERS.EU);
        } else if (savedRegion === 'MA') {
             setPricing(PRICING_TIERS.MA);
        } else {
             // Sinon, détection automatique via fuseau horaire
             const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
             if (!timeZone.startsWith('Africa')) {
                 setPricing(PRICING_TIERS.EU);
                 document.cookie = "MAZOUZ_REGION=EU; path=/; max-age=31536000; SameSite=Lax"; 
             } else {
                 document.cookie = "MAZOUZ_REGION=MA; path=/; max-age=31536000; SameSite=Lax";
             }
        }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  // --- DONNÉES DYNAMIQUES (Construction des tableaux) ---
  const acquisitionData: OfferType[] = [
    {
      title: t('pack_vitrine_title'),
      price: `${pricing.vitrine} ${pricing.currency}`,
      period: t('price_once'),
      desc: t('pack_vitrine_desc'),
      icon: Key,
      features: ["Site Vitrine (1-5 pages)", "Design Responsive", "SEO Base", "Formulaire Sécurisé", "Code Source"],
      cta: t('cta_whatsapp'),
      highlight: false
    },
    {
      title: t('pack_business_title'),
      price: `${pricing.business} ${pricing.currency}`,
      period: t('price_once'),
      desc: t('pack_business_desc'),
      icon: Key,
      features: ["Site Complet (10 pages)", "CMS Admin", "Blog / News", "SEO Avancé", "Analytics & Maps"],
      cta: t('cta_whatsapp'),
      highlight: true
    },
    {
      title: t('pack_ecommerce_title'),
      price: `${pricing.ecommerce} ${pricing.currency}`,
      period: t('price_once'),
      desc: t('pack_ecommerce_desc'),
      icon: Key,
      features: ["Boutique Woo/Shopify", "Paiement CMI/Stripe", "Gestion Stocks", "Formation Admin", "50 Produits"],
      cta: t('cta_whatsapp'),
      highlight: false
    }
  ];

  const subscriptionData: OfferType[] = [
    {
      title: t('pack_sub_start_title'),
      setup: `${pricing.setup_start} ${pricing.currency} (${t('setup_fee')})`,
      price: `${pricing.sub_start} ${pricing.currency}`,
      period: t('price_month'),
      desc: t('pack_sub_start_desc'),
      icon: RefreshCcw,
      features: ["Site Vitrine", "Hébergement & Domaine", "Certificat SSL", "Maintenance", "1 update/mois"],
      cta: t('cta_sub_whatsapp'),
      highlight: false
    },
    {
      title: t('pack_sub_growth_title'),
      setup: `${pricing.setup_growth} ${pricing.currency} (${t('setup_fee')})`,
      price: `${pricing.sub_growth} ${pricing.currency}`,
      period: t('price_month'),
      desc: t('pack_sub_growth_desc'),
      icon: RefreshCcw,
      features: ["Site Business", "Serveur High Perf", "Rapport Trafic", "Sécurité Proactive", "2h updates/mois"],
      cta: t('cta_sub_whatsapp'),
      highlight: true
    },
    {
      title: t('pack_sub_elite_title'),
      setup: `${pricing.setup_elite} ${pricing.currency} (${t('setup_fee')})`,
      price: `${pricing.sub_elite} ${pricing.currency}`,
      period: t('price_month'),
      desc: t('pack_sub_elite_desc'),
      icon: RefreshCcw,
      features: ["E-commerce / WebApp", "Serveur Dédié", "Backups J", "Support Prioritaire", "Conseil Stratégique"],
      cta: t('cta_sub_whatsapp'),
      highlight: false
    }
  ];

  // Sélection des données selon le mode (Onglet)
  const currentData = mode === 'acquisition' ? acquisitionData : subscriptionData;

  // Helpers pour les liens
  const getWhatsAppLink = (offerTitle: string) => {
    return `https://wa.me/212664814768?text=${encodeURIComponent(`Bonjour, je suis intéressé par l'offre ${offerTitle} (Tarif: ${pricing.currency === '€' ? 'International' : 'Maroc'}).`)}`;
  };

  const customQuoteLink = `https://wa.me/212664814768?text=${encodeURIComponent("Bonjour MazouzWS, j'ai un projet spécifique (Sur Mesure) et je souhaiterais un devis.")}`;

  return (
    // CORRECTION : bg-transparent pour ne pas cacher le fond étoilé global
    <div className="relative min-h-screen bg-transparent text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      
      {/* Le Background3D est géré globalement dans le layout, on ne le remet pas ici */}
      
      <div className="max-w-7xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16 text-center">
            <HorizontalParallax direction={-1} speed={20}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">{t('subtitle')}</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={30}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-none flex flex-col md:block items-center justify-center gap-2 md:gap-0">
                    <span>{t('title_1')}</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 md:ml-4">{t('title_2')}</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* SWITCHER (ONGLETS) */}
        <div className="flex justify-center mb-16">
            <div className="bg-white/5 p-1 rounded-full border border-white/10 flex relative">
                <motion.div 
                    className="absolute top-1 bottom-1 bg-cyan-500 rounded-full z-0"
                    initial={false}
                    animate={{ left: mode === 'acquisition' ? '4px' : '50%', width: 'calc(50% - 4px)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <button onClick={() => setMode('acquisition')} className={`relative z-10 px-4 md:px-10 py-3 rounded-full text-[10px] md:text-sm font-bold tracking-widest transition-colors ${mode === 'acquisition' ? 'text-black' : 'text-gray-400 hover:text-white'}`}>
                    {t('switcher_acq')}
                </button>
                <button onClick={() => setMode('subscription')} className={`relative z-10 px-4 md:px-10 py-3 rounded-full text-[10px] md:text-sm font-bold tracking-widest transition-colors ${mode === 'subscription' ? 'text-black' : 'text-gray-400 hover:text-white'}`}>
                    {t('switcher_sub')}
                </button>
            </div>
        </div>

        {/* GRILLE PRIX */}
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
                    {currentData.map((offer, index) => (
                        <div key={index} className={`relative p-8 rounded-3xl border transition-all duration-500 group ${offer.highlight ? "bg-white/[0.05] border-cyan-500/50 shadow-[0_0_50px_rgba(6,182,212,0.1)] scale-100 md:scale-105 z-10" : "bg-black/40 border-white/10 hover:border-white/30 hover:bg-white/[0.02]"}`}>
                            {offer.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-black text-[10px] font-black tracking-widest rounded-full whitespace-nowrap">RECOMMANDÉ</div>}
                            
                            <div className="mb-6 text-center">
                                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-colors ${offer.highlight ? "bg-cyan-500 text-black" : "bg-white/5 text-gray-400 group-hover:text-white"}`}><offer.icon size={32} /></div>
                                <h3 className="text-2xl font-black text-white mb-2">{offer.title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed min-h-[40px]">{offer.desc}</p>
                            </div>

                            <div className="mb-8 text-center py-6 border-y border-white/5 bg-black/20 rounded-xl">
                                {/* Correction : dir="ltr" pour l'affichage Arabe correct des chiffres */}
                                {offer.setup && <div className="text-[10px] text-gray-500 font-mono mb-1" dir="ltr">{offer.setup}</div>}
                                <div className="text-3xl md:text-4xl font-black text-white" dir="ltr">{offer.price}</div>
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

                            <a href={getWhatsAppLink(offer.title)} target="_blank" rel="noopener noreferrer" className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all ${offer.highlight ? "bg-white text-black hover:bg-cyan-400 hover:scale-[1.02] shadow-lg" : "bg-white/5 text-white hover:bg-white hover:text-black border border-white/10"}`}>
                                <MessageCircle size={18} /> {offer.cta}
                            </a>
                        </div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
        
        {/* PROTOCOLE FINANCIER */}
        <div className="mb-32">
             <div className="text-center mb-12">
                 <HorizontalParallax direction={1} speed={20}>
                    <h2 className="text-2xl md:text-4xl font-black text-white flex items-center justify-center gap-3">
                        <CreditCard className="text-cyan-500" /> {t('protocol_title')}
                    </h2>
                 </HorizontalParallax>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {/* MODE PROJET */}
                 <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-white/5 text-[10px] font-bold text-gray-400 rounded-bl-2xl uppercase tracking-widest">Acquisition & Sur Mesure</div>
                    <h3 className="text-xl font-bold text-white mb-8 mt-4">ÉCHELONNEMENT STRATÉGIQUE</h3>
                    <div className="space-y-6 relative">
                        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-white/10 z-0"></div>
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.2)]"><FileSignature size={18} className="text-cyan-400" /></div>
                            <div><div className="flex items-baseline gap-3 mb-1"><span className="text-2xl font-black text-white">40%</span><span className="text-xs font-bold text-cyan-500 tracking-widest">{t('step_sign')}</span></div></div>
                        </div>
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black border border-purple-500/50 flex items-center justify-center shrink-0"><PenTool size={18} className="text-purple-400" /></div>
                            <div><div className="flex items-baseline gap-3 mb-1"><span className="text-2xl font-black text-white">30%</span><span className="text-xs font-bold text-purple-500 tracking-widest">{t('step_design')}</span></div></div>
                        </div>
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-black border border-green-500/50 flex items-center justify-center shrink-0"><Rocket size={18} className="text-green-400" /></div>
                            <div><div className="flex items-baseline gap-3 mb-1"><span className="text-2xl font-black text-white">30%</span><span className="text-xs font-bold text-green-500 tracking-widest">{t('step_final')}</span></div></div>
                        </div>
                    </div>
                 </div>

                 {/* MODE ABONNEMENT */}
                 <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 px-4 py-2 bg-white/5 text-[10px] font-bold text-gray-400 rounded-bl-2xl uppercase tracking-widest">Mode Abonnement</div>
                    <h3 className="text-xl font-bold text-white mb-8 mt-4">ACTIVATION RAPIDE</h3>
                    <div className="flex items-center gap-6 mb-8 p-6 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0"><Lock size={28} className="text-cyan-400" /></div>
                        <div><div className="text-3xl font-black text-white mb-1">100%</div><p className="text-xs font-bold text-gray-400 tracking-widest uppercase">DES FRAIS DE DOSSIER</p></div>
                    </div>
                    <div className="text-center"><div className="inline-block px-4 py-1 bg-green-500/10 text-green-400 text-[10px] font-bold rounded-full">ABONNEMENT SANS ENGAGEMENT</div></div>
                 </div>
             </div>
        </div>

        {/* RASSURANCE & SUR-MESURE */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-12">
            <div className="flex gap-4 items-start"><ShieldCheck className="text-green-500 shrink-0" /><div><h4 className="font-bold text-white text-sm mb-1">{t('guarantee_title')}</h4><p className="text-xs text-gray-400">{t('guarantee_desc')}</p></div></div>
            <div className="flex gap-4 items-start"><Zap className="text-yellow-500 shrink-0" /><div><h4 className="font-bold text-white text-sm mb-1">{t('speed_title')}</h4><p className="text-xs text-gray-400">{t('speed_desc')}</p></div></div>
            <div className="flex gap-4 items-start"><Database className="text-purple-500 shrink-0" /><div><h4 className="font-bold text-white text-sm mb-1">{t('ownership_title')}</h4><p className="text-xs text-gray-400">{t('ownership_desc')}</p></div></div>
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-4"><div className="p-2 bg-purple-500/20 rounded-lg"><Settings className="text-purple-400" size={24} /></div><h3 className="text-xl font-bold text-white">{t('custom_title')}</h3></div>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{t('custom_desc')}</p>
            </div>
            <a href={customQuoteLink} target="_blank" rel="noopener noreferrer" className="whitespace-nowrap px-8 py-4 bg-purple-600/10 border border-purple-500/50 text-purple-400 font-bold rounded-xl hover:bg-purple-600 hover:text-white transition-all flex items-center gap-2"><MessageCircle size={18} /> {t('custom_btn')}</a>
        </div>

      </div>
    </div>
  );
}
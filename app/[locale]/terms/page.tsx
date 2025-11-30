'use client';

import React from 'react';
import Background3D from '@/app/components/3d/Background3D';
import { HorizontalParallax } from '@/app/components/ui/Parallax';
import { Scale, AlertTriangle, Copyright, Globe } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white pt-28 md:pt-32 px-4 md:px-6 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      <Background3D />
      
      <div className="max-w-4xl mx-auto relative z-10 pb-20">
        
        {/* HEADER */}
        <div className="mb-16 md:mb-24 text-center">
            <HorizontalParallax direction={-1} speed={30}>
                <h2 className="text-cyan-500 text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.5em] mb-4 uppercase">Règles d&apos;engagement</h2>
            </HorizontalParallax>
            <HorizontalParallax direction={1} speed={60}>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-none">
                    CONDITIONS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">GÉNÉRALES</span>
                </h1>
            </HorizontalParallax>
        </div>

        {/* CONTENU */}
        <div className="space-y-8">
            
            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Scale size={20} className="text-cyan-500" /> 1. OBJET
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les modalités de mise à disposition des services du site <strong>MAZOUZ WS</strong> et les conditions d&apos;utilisation par l&apos;Utilisateur. Tout accès et/ou utilisation du site suppose l&apos;acceptation et le respect de l&apos;ensemble des termes des présentes conditions.
                </p>
            </section>

            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Copyright size={20} className="text-cyan-500" /> 2. PROPRIÉTÉ INTELLECTUELLE
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    La structure générale du site <strong>MAZOUZ WS</strong>, ainsi que les textes, graphiques, images, sons et vidéos la composant, sont la propriété de l&apos;éditeur ou de ses partenaires. Toute représentation et/ou reproduction et/ou exploitation partielle ou totale des contenus et services proposés par le site, par quelque procédé que ce soit, sans l&apos;autorisation préalable et par écrit de <strong>STE MAZOUZ WEB SOLUTIONS</strong> est strictement interdite.
                </p>
            </section>

            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <AlertTriangle size={20} className="text-cyan-500" /> 3. RESPONSABILITÉS
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    Les informations et/ou documents figurant sur ce site et/ou accessibles par ce site proviennent de sources considérées comme étant fiables. Toutefois, ces informations et/ou documents sont susceptibles de contenir des inexactitudes techniques et des erreurs typographiques.
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                    L&apos;éditeur se réserve le droit de les corriger, dès que ces erreurs sont portées à sa connaissance. L&apos;utilisation des informations et/ou documents disponibles sur ce site se fait sous l&apos;entière et seule responsabilité de l&apos;utilisateur.
                </p>
            </section>

            <section className="group p-8 border border-white/10 rounded-3xl hover:border-cyan-500/30 transition-all bg-black/40 backdrop-blur-md">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <Globe size={20} className="text-cyan-500" /> 4. DROIT APPLICABLE
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Tant le présent site que les modalités et conditions de son utilisation sont régis par le droit marocain, quel que soit le lieu d&apos;utilisation. En cas de contestation éventuelle, et après l&apos;échec de toute tentative de recherche d&apos;une solution amiable, les tribunaux marocains seront seuls compétents pour connaître de ce litige.
                </p>
            </section>

        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Clock, Award, Users, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner */}
      <section className="relative h-[100vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2000"
            alt="Evento de Luxo em Maragogi"
            className="w-full h-full object-cover opacity-50 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="flex items-center justify-center space-x-2 text-gold mb-6 tracking-[0.5em] uppercase text-sm animate-pulse">
            <MapPin size={16} />
            <span>Maragogi • Alagoas</span>
          </div>
          <h1 className="text-5xl md:text-9xl font-serif font-bold mb-8 text-gold-gradient tracking-tight leading-none uppercase">
            Garçons <br/> Class Gold
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-light tracking-wide italic">
            Excelência e Sofisticação para o seu Evento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/orcamento"
              className="bg-gold hover:bg-gold-dark text-black px-12 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Solicitar Orçamento
              <ChevronRight className="ml-2" />
            </Link>
            <Link
              to="/servicos"
              className="backdrop-blur-sm border border-gold/50 text-white hover:bg-gold/20 px-12 py-5 rounded-full font-bold text-lg transition-all"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Institutional Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1 border border-gold/30 rounded-full text-gold text-xs font-bold tracking-widest uppercase">
                Premium Hospitality
              </div>
              <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                Olá! Somos os garçons <br/><span className="text-gold">Class Gold.</span>
              </h3>
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Sabemos que você precisa de uma equipe profissional, educada e preparada para o seu evento em Maragogi.
                Trabalhamos com excelência, elegância e compromisso para tornar cada momento inesquecível.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-900 p-3 rounded-lg text-gold border border-gold/10"><ShieldCheck /></div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-wide uppercase text-sm">Profissionalismo</h4>
                    <p className="text-sm text-gray-500">Treinamento constante e etiqueta.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-neutral-900 p-3 rounded-lg text-gold border border-gold/10"><Clock /></div>
                  <div>
                    <h4 className="font-bold text-white text-lg tracking-wide uppercase text-sm">Pontualidade</h4>
                    <p className="text-sm text-gray-500">Compromisso rigoroso com horários.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 border border-gold/10 rounded-3xl transition-all group-hover:border-gold/30"></div>
              <img
                src="https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200"
                alt="Serviço Premium"
                className="rounded-2xl relative z-10 shadow-2xl transition-all duration-1000 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-neutral-950 border-y border-gold/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <Award className="w-10 h-10 text-gold mx-auto" />
              <h5 className="text-white font-bold uppercase tracking-tighter">Alto Padrão</h5>
            </div>
            <div className="space-y-4">
              <Users className="w-10 h-10 text-gold mx-auto" />
              <h5 className="text-white font-bold uppercase tracking-tighter">Equipe Impecável</h5>
            </div>
            <div className="space-y-4">
              <MapPin className="w-10 h-10 text-gold mx-auto" />
              <h5 className="text-white font-bold uppercase tracking-tighter">Especialistas em Maragogi</h5>
            </div>
            <div className="space-y-4">
              <ShieldCheck className="w-10 h-10 text-gold mx-auto" />
              <h5 className="text-white font-bold uppercase tracking-tighter">Confiança Total</h5>
            </div>
          </div>
        </div>
      </section>
      
      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Home;

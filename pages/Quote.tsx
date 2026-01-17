
import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Users, MapPin, Clock } from 'lucide-react';

const Quote: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center p-12 bg-neutral-950 rounded-3xl border border-gold shadow-2xl animate-fade-in">
          <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
            <CheckCircle className="text-black w-10 h-10" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-gold mb-4">Obrigado pelo contato!</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Em breve a equipe <span className="text-gold font-bold">Garçons Class Gold</span> de Maragogi entrará em contato com você via WhatsApp para finalizar seu orçamento.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-8 text-gold border border-gold px-8 py-2 rounded-full hover:bg-gold hover:text-black transition-all"
          >
            Fazer outro pedido
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-bold tracking-[0.4em] uppercase mb-4">Proposta</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">Solicite seu Orçamento</h1>
          <p className="text-gray-400 font-light text-lg">Receba uma proposta personalizada para sua celebração em Alagoas.</p>
        </div>

        <div className="bg-neutral-950 p-8 md:p-12 rounded-3xl border border-gold/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-3xl -mr-16 -mt-16"></div>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="md:col-span-2">
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3">Nome Completo</label>
              <input
                required
                type="text"
                placeholder="Ex: João da Silva"
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div>
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3">WhatsApp</label>
              <input
                required
                type="tel"
                placeholder="(82) 98755-3087"
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div>
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3">Tipo de Evento</label>
              <select className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all">
                <option>Casamento (Beach Wedding)</option>
                <option>Evento Corporativo</option>
                <option>Festa Particular</option>
                <option>Aniversário</option>
                <option>Confraternização</option>
                <option>Evento na Praia</option>
                <option>Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center">
                <Calendar size={14} className="mr-2" /> Data
              </label>
              <input
                required
                type="date"
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div>
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center">
                <Clock size={14} className="mr-2" /> Horário
              </label>
              <input
                required
                type="time"
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div>
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center">
                <Users size={14} className="mr-2" /> Convidados
              </label>
              <input
                required
                type="number"
                placeholder="Ex: 50"
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div>
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center">
                <Users size={14} className="mr-2" /> Qtd. de Garçons
              </label>
              <input
                required
                type="number"
                placeholder="Ex: 4"
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gold text-xs font-bold uppercase tracking-widest mb-3 flex items-center">
                <MapPin size={14} className="mr-2" /> Local em Maragogi ou Região
              </label>
              <input
                required
                type="text"
                placeholder="Ex: Pousada X, Antunes, Barra Grande..."
                className="w-full bg-neutral-900 border border-gold/10 text-white p-4 rounded-xl focus:outline-none focus:border-gold transition-all"
              />
            </div>

            <div className="md:col-span-2 text-center pt-8">
              <button
                disabled={loading}
                type="submit"
                className={`w-full md:w-auto px-20 py-5 rounded-full font-bold text-lg flex items-center justify-center mx-auto transition-all ${loading ? 'bg-gold/50 cursor-not-allowed' : 'bg-gold hover:bg-gold-dark hover:scale-105 text-black shadow-2xl shadow-gold/20'}`}
              >
                {loading ? 'Processando...' : (
                  <>
                    <Send size={20} className="mr-2" /> Solicitar Orçamento Grátis
                  </>
                )}
              </button>
              <p className="mt-6 text-sm text-gray-500 font-light">Seu evento merece a assinatura Class Gold.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;

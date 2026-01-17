
import React from 'react';
import { Target, Eye, Gem, CheckCircle2, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm font-bold tracking-[0.4em] uppercase mb-4">A nossa essência</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Quem Somos</h1>
          <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-8 text-gray-300 text-lg leading-relaxed">
            <p>
              A <span className="text-gold font-bold">Class Gold Garçons</span> foi criada a partir da observação de uma necessidade real. Durante uma festa, percebemos a ausência de garçons, o que gerou diversas reclamações e insatisfação entre os convidados. Diante daquela situação, passamos a observar atentamente o evento e, de forma espontânea, nos prontificamos a ajudar no serviço.
            </p>
            <p>
              Com organização, atenção e dedicação, o atendimento começou a fluir naturalmente, trazendo conforto aos convidados e melhorando a experiência do evento. A partir desse momento, nasceu a ideia de transformar aquela iniciativa em algo profissional.
            </p>
            <p>
              Foi assim que surgiu a <span className="text-gold font-bold">Class Gold Garçons</span>, fundada por <span className="text-white font-medium">Erivaldo e Miqueias</span>, CEOs da empresa, com o propósito de oferecer um atendimento de qualidade, baseado em educação, responsabilidade, boa apresentação e compromisso com a excelência em cada evento.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-gold/10 rounded-2xl"></div>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <img src="https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=600" alt="Equipe em serviço" className="rounded-lg shadow-lg w-full h-80 object-cover" />
              <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=600" alt="Excelência no atendimento" className="rounded-lg shadow-lg w-full h-80 object-cover mt-12" />
            </div>
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-neutral-900 p-10 rounded-2xl border border-gold/10 hover:border-gold/40 transition-all text-center group">
            <div className="inline-block p-4 bg-gold/5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Target className="text-gold w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Missão</h3>
            <p className="text-gray-400">Proporcionar tranquilidade aos anfitriões através de um serviço de excelência, garantindo que cada convidado seja tratado com a máxima elegância.</p>
          </div>
          <div className="bg-neutral-900 p-10 rounded-2xl border border-gold/10 hover:border-gold/40 transition-all text-center group">
            <div className="inline-block p-4 bg-gold/5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Eye className="text-gold w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Visão</h3>
            <p className="text-gray-400">Ser a referência nacional em atendimento premium para eventos, consolidando nossa marca como sinônimo de sofisticação e luxo.</p>
          </div>
          <div className="bg-neutral-900 p-10 rounded-2xl border border-gold/10 hover:border-gold/40 transition-all text-center group">
            <div className="inline-block p-4 bg-gold/5 rounded-full mb-6 group-hover:scale-110 transition-transform">
              <Gem className="text-gold w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Valores</h3>
            <p className="text-gray-400">Educação, responsabilidade, boa apresentação e compromisso absoluto com a satisfação do cliente.</p>
          </div>
        </div>

        {/* Highlight Checklist */}
        <div className="bg-gold px-8 py-12 rounded-3xl text-black flex flex-wrap justify-center gap-10 items-center shadow-xl">
           <div className="flex items-center space-x-2 font-bold text-xl">
             <CheckCircle2 /> <span>Profissionalismo</span>
           </div>
           <div className="flex items-center space-x-2 font-bold text-xl">
             <CheckCircle2 /> <span>Pontualidade</span>
           </div>
           <div className="flex items-center space-x-2 font-bold text-xl">
             <CheckCircle2 /> <span>Boa Apresentação</span>
           </div>
           <div className="flex items-center space-x-2 font-bold text-xl">
             <CheckCircle2 /> <span>Alto Padrão</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;

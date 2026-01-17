
import React from 'react';
import { GlassWater, Heart, Briefcase, PartyPopper, Cake, Palmtree } from 'lucide-react';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
  <div className="group bg-neutral-900/40 p-8 rounded-2xl border border-gold/10 hover:bg-neutral-800 transition-all hover:-translate-y-2">
    <div className="text-gold mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-2xl font-serif font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      icon: <GlassWater size={40} />,
      title: "Festas Particulares",
      description: "Serviço discreto e elegante para jantares ou celebrações em sua residência, com foco no seu conforto."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Eventos Corporativos",
      description: "Equipe preparada para representar sua marca com a máxima seriedade e eficiência em congressos e reuniões."
    },
    {
      icon: <Heart size={40} />,
      title: "Casamentos",
      description: "Um dia inesquecível exige um atendimento impecável. Cuidamos dos seus convidados com todo o carinho."
    },
    {
      icon: <Cake size={40} />,
      title: "Aniversários",
      description: "Celebre cada ano com estilo. Nossa equipe garante que você aproveite cada momento da sua festa."
    },
    {
      icon: <PartyPopper size={40} />,
      title: "Confraternizações",
      description: "Reuniões de amigos ou família onde a única preocupação deve ser a diversão e a boa conversa."
    },
    {
      icon: <Palmtree size={40} />,
      title: "Eventos na Praia",
      description: "Logística especializada para atender com excelência mesmo em ambientes externos e litorâneos."
    }
  ];

  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm font-bold tracking-[0.4em] uppercase mb-4">O que oferecemos</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Nossos Serviços</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic">Excelência em cada detalhe, em qualquer ocasião.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>

        <div className="mt-20 p-12 rounded-3xl bg-neutral-900 border border-gold/20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 p-4 text-gold opacity-10">
            <GlassWater size={120} />
          </div>
          <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Precisa de um serviço personalizado?</h3>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto relative z-10">Se o seu evento tem necessidades específicas ou um formato diferenciado, nossa equipe está pronta para desenhar uma solução sob medida.</p>
          <a 
            href="https://wa.me/5582987553087" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-gold text-black font-bold px-10 py-4 rounded-full transition-transform hover:scale-105 relative z-10 shadow-lg shadow-gold/20"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

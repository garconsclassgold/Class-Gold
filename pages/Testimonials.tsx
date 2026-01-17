
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mariana Silveira",
      event: "Casamento no Litoral",
      comment: "Equipe extremamente educada e profissional. Meu evento foi um sucesso! O cuidado com os detalhes superou minhas expectativas.",
      rating: 5
    },
    {
      name: "Roberto Almeida",
      event: "Evento Corporativo",
      comment: "Os garçons da Class Gold fizeram toda a diferença na festa. Recomendo demais pela pontualidade e pela postura impecável!",
      rating: 5
    },
    {
      name: "Juliana Mendes",
      event: "Aniversário de 50 Anos",
      comment: "Pontuais, bem vestidos e muito atenciosos. Contratarei novamente com certeza. Todos os convidados elogiaram o serviço.",
      rating: 5
    },
    {
      name: "Carlos Ferreira",
      event: "Jantar Privativo",
      comment: "A discrição e a etiqueta foram fundamentais para o nosso jantar. Um serviço nota 10 em todos os aspectos.",
      rating: 5
    },
    {
      name: "Amanda Costa",
      event: "Festa de Noivado",
      comment: "Excelente atendimento! O compromisso com a excelência é visível desde o primeiro contato até o final do evento.",
      rating: 5
    },
    {
      name: "Fernando Souza",
      event: "Evento Empresarial",
      comment: "Responsabilidade e educação definem essa equipe. Transformaram a logística do nosso coquetel em algo fluido e prazeroso.",
      rating: 5
    }
  ];

  return (
    <div className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold text-sm font-bold tracking-[0.4em] uppercase mb-4">Reconhecimento</h2>
          <h1 className="text-4xl md:text-6xl font-serif font-bold">Depoimentos</h1>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto italic font-light">A maior recompensa do nosso trabalho é a satisfação e o elogio espontâneo dos nossos clientes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div key={index} className="bg-black p-8 rounded-2xl border border-gold/10 relative group hover:border-gold/40 transition-all flex flex-col justify-between">
              <Quote className="absolute top-6 right-8 text-gold/5 group-hover:text-gold/10 transition-colors" size={50} />
              
              <div>
                <div className="flex mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-300 text-md italic mb-8 relative z-10 leading-relaxed">"{rev.comment}"</p>
              </div>
              
              <div className="flex items-center pt-6 border-t border-white/5">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center font-bold text-gold mr-3">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                  <p className="text-gold/60 text-[10px] uppercase tracking-wider font-medium">{rev.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-neutral-900/50 py-16 px-4 rounded-3xl border border-gold/10">
          <div className="flex flex-col items-center">
               <div className="flex mb-4">
                 <Star size={24} className="text-gold fill-gold" />
                 <Star size={24} className="text-gold fill-gold" />
                 <Star size={24} className="text-gold fill-gold" />
                 <Star size={24} className="text-gold fill-gold" />
                 <Star size={24} className="text-gold fill-gold" />
               </div>
               <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide">Excelência Comprovada</h3>
               <p className="text-gray-400 max-w-lg mx-auto italic">
                 "Nossa reputação é construída evento a evento, mantendo sempre o padrão Class Gold de qualidade e responsabilidade."
               </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

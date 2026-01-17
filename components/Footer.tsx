
import React from 'react';
import { Instagram, Smartphone, Mail, MapPin, Star } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-gold/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="text-gold w-6 h-6" />
              <span className="text-xl font-serif font-bold text-gold tracking-widest">GARÇONS CLASS GOLD</span>
            </div>
            <p className="text-gray-400 max-w-xs italic">
              "Seu evento em Maragogi merece atendimento de alto padrão."
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/garconsvip.gold/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5582987553087" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-neutral-900 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all">
                <Smartphone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-6 tracking-widest uppercase text-sm">Navegação</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#/" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#/sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#/servicos" className="hover:text-gold transition-colors">Serviços</a></li>
              <li><a href="#/depoimentos" className="hover:text-gold transition-colors">Depoimentos</a></li>
              <li><a href="#/orcamento" className="hover:text-gold transition-colors">Solicitar Orçamento</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-bold mb-6 tracking-widest uppercase text-sm">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <Smartphone size={18} className="text-gold" />
                <span>(82) 98755-3087</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-gold" />
                <span className="text-sm">garconsclassgold@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-gold" />
                <span>Maragogi, AL</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Garçons Class Gold. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

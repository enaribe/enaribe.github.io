import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-nafar-border">
      <div className="max-w-container mx-auto flex justify-between items-center px-12 py-6">
        <div className="flex items-center">
          <img src="/images/logo-figma.svg" alt="Nafar AI" className="h-7" />
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#" className="font-nunito text-sm font-medium text-nafar-text-3 hover:text-nafar-purple transition-colors">
            Contactez-nous
          </a>
          
          <button className="bg-nafar-purple text-white px-6 py-3 rounded-2xl font-open-sans text-sm font-semibold border border-nafar-purple hover:bg-white hover:text-nafar-purple transition-all">
            Télécharger l'application
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 
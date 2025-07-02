import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-nafar-light-2 py-16">
      <div className="max-w-container mx-auto px-12">
        <div className="flex justify-between items-center">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <img src="/images/logo-figma.svg" alt="Nafar AI" className="h-14" />
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-12">
            <a href="#" className="font-nunito text-sm font-semibold text-nafar-text-2 hover:text-nafar-purple transition-colors">
              CGU
            </a>
            <a href="#" className="font-nunito text-sm font-semibold text-nafar-text-2 hover:text-nafar-purple transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="font-nunito text-sm font-semibold text-nafar-text-2 hover:text-nafar-purple transition-colors">
              Contact
            </a>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-11 h-11 bg-nafar-light-2 rounded-full flex items-center justify-center hover:bg-nafar-purple transition-colors group">
              <img src="/images/fb.svg" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 bg-nafar-light-2 rounded-full flex items-center justify-center hover:bg-nafar-purple transition-colors group">
              <img src="/images/insta.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" className="w-11 h-11 bg-nafar-light-2 rounded-full flex items-center justify-center hover:bg-nafar-purple transition-colors group">
              <img src="/images/link.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="font-open-sans text-[11px] font-medium text-nafar-text-2 leading-7">
            Ensemble pour un futur où tout le monde peut apprendre
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
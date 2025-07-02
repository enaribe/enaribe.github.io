import React, { useState } from 'react';

const OptionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('apprendre');

  const tabs = [
    { id: 'apprendre', label: 'Apprendre' },
    { id: 'exercice', label: 'Faire un exercice' },
    { id: 'evaluation', label: 'Faire une evaluation' },
    { id: 'digitaliser', label: 'Digitaliser des cours' }
  ];

  const content = {
    apprendre: {
      description: "Choisissez entre des formats audio ou écrits pour maximiser votre compréhension.",
      icon: "/images/audio.svg"
    },
    exercice: {
      description: "Sélectionnez les durées (15 min, 45 min) et niveaux (Facile, Moyen, Difficile) qui conviennent à votre emploi du temps.",
      icon: "/images/sett.svg"
    },
    evaluation: {
      description: "Prenez en photo ou importer vos cours et documents pour générer des révisions interactives",
      icon: "/images/upload.svg"
    },
    digitaliser: {
      description: "Prenez en photo ou importer vos cours et documents pour générer des révisions interactives",
      icon: "/images/upload.svg"
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-container mx-auto px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className="font-nunito text-9 font-bold leading-6 mb-4"
            style={{
              fontSize: '36px',
              background: 'linear-gradient(90.35deg, #192C4D -17.95%, #704ED9 110.67%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Utiliser nafar c'est tres simple
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <img src="/images/light.svg" alt="" className="w-8 h-7" />
          </div>
        </div>

        {/* Section with blue background */}
        <div className="bg-nafar-dark rounded-[30px] p-16 relative overflow-hidden">
          {/* Vision content */}
          <div className="text-center mb-12">
            <h3 
              className="font-nunito text-9 font-bold leading-7 mb-4"
              style={{
                fontSize: '36px',
                background: 'linear-gradient(90.22deg, #FFFFFF -8.4%, #704ED9 154.35%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Nafar optimise l'apprentissage
            </h3>
            <p className="font-nunito text-sm font-medium text-white leading-7">
              Votre parcours vers la réussite commence par trois choix simples.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <img src="/images/light.svg" alt="" className="w-8 h-7" />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-[30px] font-nunito font-bold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-nafar-purple text-white'
                      : 'bg-nafar-light-2 text-nafar-text-3'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-nunito text-sm font-medium text-nafar-text-2 leading-7 max-w-sm">
                {content[activeTab as keyof typeof content].description}
              </p>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="w-20 h-19">
                <img 
                  src={content[activeTab as keyof typeof content].icon} 
                  alt="" 
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Character image positioned outside */}
          <div className="absolute -right-16 bottom-0">
            <img src="/images/vision-character.svg" alt="" className="w-64 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsSection; 
import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-container mx-auto px-12">
        {/* Vision Container */}
        <div 
          className="bg-nafar-dark rounded-[30px] relative overflow-hidden"
          style={{
            width: '1224px',
            height: '477px',
            margin: '0 auto'
          }}
        >
          <div className="p-16 text-center">
            {/* Title */}
            <h2 
              className="font-nunito text-[38px] font-bold leading-7 mb-6"
              style={{
                background: 'linear-gradient(90.22deg, #FFFFFF -8.4%, #704ED9 154.35%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Notre vision pour l'éducation
            </h2>

            {/* Quote */}
            <p className="font-open-sans text-sm font-medium text-white leading-7 mb-8">
              "Ensemble, construisons un futur où tout le monde peut apprendre."
            </p>

            {/* Description */}
            <div className="max-w-3xl mx-auto mb-12">
              <p className="font-nunito text-sm font-bold text-white leading-7">
                Chez NAFAR, nous croyons que l'éducation doit être accessible, engageante et adaptée à chacun. 
                C'est pourquoi nous travaillons également avec les enseignants et les écoles pour définir la nouvelle 
                façon d'apprendre.<br/><br/>
                Vous êtes enseignant ou représentant d'une école ?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6">
              <button className="border border-white text-white px-11 py-3 rounded-2xl font-open-sans text-sm font-semibold hover:bg-white hover:text-nafar-dark transition-all">
                Demander une démo
              </button>
              <button className="border border-white text-white px-16 py-3 rounded-2xl font-open-sans text-sm font-semibold hover:bg-white hover:text-nafar-dark transition-all">
                Contactez-nous
              </button>
            </div>
          </div>

          {/* Character Image positioned to extend outside */}
          <div className="absolute -right-32 bottom-0">
            <img 
              src="/images/vision-character.svg" 
              alt="Vision Character" 
              className="w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="max-w-container mx-auto px-12 py-16">
        {/* EdTech Product Badge */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-nafar-bg rounded-full px-4 py-2">
            <img src="/images/flag.svg" alt="Sénégal" className="w-5 h-4" />
            <span className="font-nunito text-xs font-bold text-nafar-text-2">
              EdTech Product
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="col-span-6">
            <h1 className="font-nunito text-[42px] font-bold leading-[54px] mb-6">
              <span 
                className="bg-gradient-to-r from-[#192C4D] to-[#704ED9] bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90.35deg, #192C4D -17.95%, #704ED9 110.67%)'
                }}
              >
                L'apprentissage simple, accessible, personnalisé.
              </span>
            </h1>
            
            <p className="font-open-sans text-sm text-nafar-text leading-7 mb-8">
              Avec Nafar, l'IA transforme votre façon d'apprendre.
            </p>

            {/* Download Buttons */}
            <div className="flex gap-6">
              {/* App Store Button */}
              <div className="relative">
                <button className="bg-nafar-purple border border-nafar-purple text-white px-8 py-4 rounded-2xl flex flex-col items-center hover:bg-white hover:text-nafar-purple transition-all">
                  <span className="font-open-sans text-[10px] font-semibold leading-7">
                    Télécharger l'application
                  </span>
                  <span className="font-open-sans text-[22px] font-bold leading-7">
                    App Store
                  </span>
                </button>
                <img src="/images/store.svg" alt="" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-9" />
              </div>

              {/* Play Store Button */}
              <div className="relative">
                <button className="border border-nafar-purple text-nafar-purple px-8 py-4 rounded-2xl flex flex-col items-center hover:bg-nafar-purple hover:text-white transition-all">
                  <span className="font-open-sans text-[10px] font-semibold leading-7">
                    Télécharger l'application
                  </span>
                  <span className="font-open-sans text-[22px] font-bold leading-7">
                    Play Store
                  </span>
                </button>
                <img src="/images/play.svg" alt="" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-9" />
              </div>
            </div>

            {/* Learn More */}
            <div className="mt-8">
              <button className="font-open-sans text-xl font-bold text-nafar-dark hover:text-nafar-purple transition-colors">
                Apprendre
              </button>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="col-span-6">
            <div className="relative">
              <img 
                src="/images/hero-phone.svg" 
                alt="Nafar App Interface" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner; 
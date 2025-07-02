import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <section className="w-full bg-nafar-light-2 py-24">
      <div className="max-w-container mx-auto px-12">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="font-nunito text-[64px] font-bold text-nafar-dark leading-[27px] mb-4">
            Télécharger nafar
          </h2>
          <p className="font-nunito text-base font-semibold text-nafar-text-3 leading-7">
            Commencer a apprendre autrement
          </p>
        </div>

        {/* Download Buttons */}
        <div className="flex justify-center gap-9">
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
      </div>
    </section>
  );
};

export default DownloadSection; 
import React from 'react';

const ApprSection: React.FC = () => {
  const cards = [
    {
      id: 'apprendre',
      title: 'Apprendre',
      image: '/images/appr1-figma.svg',
      bgColor: 'bg-white',
      textColor: 'text-nafar-yellow',
      borderColor: 'border-white/20'
    },
    {
      id: 'sexercer', 
      title: 'S\'exercer',
      image: '/images/appr2-figma.svg',
      bgColor: 'bg-white',
      textColor: 'text-nafar-yellow',
      borderColor: 'border-white/20'
    },
    {
      id: 'sevaluer',
      title: 'S\'évaluer', 
      image: '/images/appr3-figma.svg',
      bgColor: 'bg-white',
      textColor: 'text-nafar-yellow',
      borderColor: 'border-white/20'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-container mx-auto px-12">
        {/* Three Cards */}
        <div className="grid grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} ${card.borderColor} border rounded-2xl p-8 flex flex-col items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-black/20`}
              style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '20px'
              }}
            >
              {/* Title */}
              <div className="mb-4">
                <h3 className={`font-nunito text-2xl font-bold ${card.textColor} text-center leading-[54px]`}>
                  {card.title}
                </h3>
              </div>

              {/* Phone Image */}
              <div className="w-36 h-60">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApprSection; 
import React from 'react';

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <div className="left">
        <div className="sign">
          <img src="/images/flag.svg" alt="" />
          <span>EdTech Product</span>
        </div>
        <h1>
          L'apprentissage <br />
          plus simple, plus accessible,<br />
          plus personnalisé.
        </h1>
        <p>Avec Nafar, l'IA transforme votre façon d'apprendre.</p>
        <div className="buttons">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOABtRTgfcsFyvADZoJXjOccatjPVzSStPSLLPyk8eL8la-Q/viewform?usp=header">
            <img src="/images/store.svg" alt="App Store" />
          </a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScpZbSBaAPxKGqFwlagPjv-gCF7U4n70ikcq1QzfsSETggGyg/viewform?usp=header">
            <img src="/images/play.svg" alt="Google Play" />
          </a>
        </div>
      </div>
      <div className="right">
        <img src="/images/banner.svg" alt="Nafar AI Banner" />
      </div>
    </section>
  );
};

export default Banner; 
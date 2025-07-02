import React from 'react';

const DownloadSection: React.FC = () => {
  return (
    <section className="telecharger reveal">
      <h1>Télécharger Nafar</h1>
      <p>Commencez à apprendre autrement</p>
      <div className="buttons">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOABtRTgfcsFyvADZoJXjOccatjPVzSStPSLLPyk8eL8la-Q/viewform?usp=header">
          <img src="/images/store.svg" alt="App Store" />
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScpZbSBaAPxKGqFwlagPjv-gCF7U4n70ikcq1QzfsSETggGyg/viewform?usp=header">
          <img src="/images/play.svg" alt="Google Play" />
        </a>
      </div>
    </section>
  );
};

export default DownloadSection; 
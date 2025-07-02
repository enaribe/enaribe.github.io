import React from 'react';

const ApprSection: React.FC = () => {
  return (
    <section className="appr reveal">
      <h1>Nafar optimise l'apprentissage</h1>
      <p>Votre parcours vers la réussite commence par trois choix simples.</p>
      <div className="cards">
        <div className="card">
          <h2>Apprendre</h2>
          <img src="/images/appr1.svg" alt="Apprendre" />
          <div className="appr-det">
            <p>
              Contenu interactif en quelques secondes
              Sessions adaptées pour différent niveau (15, 30 minutes)
              Format audio ou écrit selon vos préférences
            </p>
            <span>"Gagnez 2h de révision par jour"</span>
          </div>
        </div>
        <div className="card">
          <h2>S'exercer</h2>
          <img src="/images/appr2.svg" alt="S'exercer" />
          <div className="appr-det">
            <p>
              Exercices générés selon votre niveau
              Progression adaptative
              Correction instantanée
            </p>
            <span>"Progressez à votre rythme optimal"</span>
          </div>
        </div>
        <div className="card">
          <h2>S'évaluer</h2>
          <img src="/images/appr3.svg" alt="S'évaluer" />
          <div className="appr-det">
            <p>
              Tests personnalisés
              Analyse détaillée des résultats
              Recommandations ciblées
            </p>
            <span>"Comprendre ses forces et faiblesses pour mieux progresser"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApprSection; 
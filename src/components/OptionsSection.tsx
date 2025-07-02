import React, { useState } from 'react';

const OptionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('apprendre-content');

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section className="options reveal">
      <h1>Utiliser nafar c'est très simple</h1>
      <div className="menu">
        <div 
          className={`item ${activeTab === 'apprendre-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('apprendre-content')}
        >
          Apprendre
        </div>
        <div 
          className={`item ${activeTab === 'exercice-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('exercice-content')}
        >
          Faire un exercice
        </div>
        <div 
          className={`item ${activeTab === 'evaluation-content' ? 'active' : ''}`}
          onClick={() => handleTabClick('evaluation-content')}
        >
          Faire une évaluation
        </div>
      </div>
      <div className="content">
        <div 
          id="apprendre-content" 
          className="content-section" 
          style={{ display: activeTab === 'apprendre-content' ? 'flex' : 'none' }}
        >
          <div className="line1">
            <div className="contenu">
              <img src="/images/media.svg" alt="Media" />
              <p>Prenez en photo ou importez vos cours et documents pour générer des révisions interactives</p>
            </div>
            <div className="contenu">
              <img src="/images/audio.svg" alt="Audio" />
              <p>Choisissez entre des formats audio ou écrits pour maximiser votre compréhension.</p>
            </div>
          </div>
          <div className="line2">
            <img src="/images/phone.svg" alt="Phone" />
          </div>
          <div className="line3">
            <div className="contenu">
              <img src="/images/sett.svg" alt="Settings" />
              <p>Sélectionnez les durées (15 min, 45 min) et niveaux (Facile, Moyen, Difficile) qui vous conviennent.</p>
            </div>
          </div>
        </div>

        <div 
          id="exercice-content" 
          className="content-section" 
          style={{ display: activeTab === 'exercice-content' ? 'flex' : 'none' }}
        >
          <div className="exo">
            <div className="image">
              <img src="/images/upload.svg" alt="Upload" />
            </div>
            <div className="texte">
              <p>Choisissez parmi vos cours ou un nouveau document pour générer un exercice de type QCM</p>
            </div>
          </div>
          <div className="exo">
            <div className="image">
              <img src="/images/personaliser.svg" alt="Personnaliser" />
            </div>
            <div className="texte">
              <p>Personnaliser selon votre niveau</p>
            </div>
          </div>
          <div className="exo">
            <div className="image">
              <img src="/images/audiogenerate.svg" alt="Audio Generate" />
            </div>
            <div className="texte">
              <p>Corriger vos évaluations et demander un suivi pour l'atteinte des objectifs</p>
            </div>
          </div>
        </div>

        <div 
          id="evaluation-content" 
          className="content-section" 
          style={{ display: activeTab === 'evaluation-content' ? 'flex' : 'none' }}
        >
          <div className="exo">
            <div className="image">
              <img src="/images/upload.svg" alt="Upload" />
            </div>
            <div className="texte">
              <p>Choisissez parmi vos cours ou un nouveau document pour générer des examens</p>
            </div>
          </div>
          <div className="exo">
            <div className="image">
              <img src="/images/personaliser.svg" alt="Personnaliser" />
            </div>
            <div className="texte">
              <p>Personnaliser selon votre niveau</p>
            </div>
          </div>
          <div className="exo">
            <div className="image">
              <img src="/images/audiogenerate.svg" alt="Audio Generate" />
            </div>
            <div className="texte">
              <p>Corriger vos évaluations et demander un suivi pour l'atteinte des objectifs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptionsSection; 
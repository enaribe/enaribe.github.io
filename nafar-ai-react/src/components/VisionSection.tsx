import React from 'react';

const VisionSection: React.FC = () => {
  return (
    <section className="appr vision reveal">
      <h1>Notre vision pour l'éducation</h1>
      <p>"Ensemble, construisons un futur où tout le monde peut apprendre."</p>
      <div className="appr-contenu">
        <div className="left">
          <img src="/images/vision.svg" alt="Vision" />
        </div>
        <div className="right">
          <p>
            Chez NAFAR, nous croyons que l'éducation doit être accessible, engageante et adaptée à chacun. 
            C'est pourquoi nous travaillons également avec les enseignants et les écoles pour définir la nouvelle façon d'apprendre. 
            Vous êtes enseignant ou représentant d'une école ?
          </p>
          <div className="go">
            <a 
              href="#" 
              data-cal-link="ramatoulaye-gaye-ifmsi2/15min" 
              data-cal-namespace="15min"
            >
              Demander une démo
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUjVn0AxWX8GLJzJg8cKbF_RGWSxApEp6HXwlwRXdjwvdQ5A/viewform?usp=preview">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 
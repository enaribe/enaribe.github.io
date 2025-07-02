import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="reveal">
      <div className="left">
        <div className="logo">
          <img src="/images/logo.svg" alt="Nafar AI" />
        </div>
        <p>Ensemble pour un futur où tout le monde peut apprendre</p>
      </div>
      <div className="right">
        <div className="links">
          <a href="#">CGU</a>
          <a href="/privacy-policy.html">Politique de confidentialité</a>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUjVn0AxWX8GLJzJg8cKbF_RGWSxApEp6HXwlwRXdjwvdQ5A/viewform?usp=preview">
            Contact
          </a>
        </div>
        <div className="socials">
          <a href="#">
            <img src="/images/insta.svg" alt="Instagram" />
          </a>
          <a href="#">
            <img src="/images/fb.svg" alt="Facebook" />
          </a>
          <a href="#">
            <img src="/images/link.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
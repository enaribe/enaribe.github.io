import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <img src="/images/logo.svg" alt="Nafar AI" />
      <nav>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfUjVn0AxWX8GLJzJg8cKbF_RGWSxApEp6HXwlwRXdjwvdQ5A/viewform?usp=preview">
          Contactez-nous
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScpZbSBaAPxKGqFwlagPjv-gCF7U4n70ikcq1QzfsSETggGyg/viewform?usp=header" className="download">
          Télécharger l'application
        </a>
        <div className="light">
          <img src="/images/light.svg" alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header; 
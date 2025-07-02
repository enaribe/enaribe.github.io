import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour traiter l'inscription à la newsletter
    console.log('Email inscrit:', email);
    setEmail('');
    alert('Merci pour votre inscription à notre newsletter !');
  };

  return (
    <section className="newsletter reveal">
      <p>
        Rejoignez notre newsletter pour être informé<br />
        des évolutions de Nafar
      </p>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </section>
  );
};

export default Newsletter; 
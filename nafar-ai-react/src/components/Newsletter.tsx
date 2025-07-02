import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-nafar-light-2 py-16">
      <div className="max-w-container mx-auto px-12">
        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left Side - Newsletter Content */}
          <div className="col-span-5">
            <h2 className="font-nunito text-xl font-bold text-nafar-dark leading-9 mb-4">
              Rejoignez notre newsletter pour être informer<br/>
              des évolutions de Nafar
            </h2>
          </div>

          {/* Right Side - Newsletter Form */}
          <div className="col-span-7">
            <form onSubmit={handleSubmit} className="flex gap-4">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse mail"
                  className="w-full px-6 py-3 border border-nafar-border rounded-2xl font-open-sans text-sm text-nafar-text-3 placeholder-nafar-text-3 focus:outline-none focus:border-nafar-purple"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className="bg-nafar-purple text-white px-8 py-3 rounded-2xl font-open-sans text-sm font-semibold hover:bg-nafar-dark transition-all disabled:opacity-70"
              >
                {isSubmitted ? '✓ Inscrit!' : 'S\'inscrire'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 
import { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="mt-stack-lg px-margin-mobile py-stack-lg bg-surface-container-high mx-margin-mobile rounded-2xl text-center">
      <span className="material-symbols-outlined text-secondary text-4xl mb-4" data-icon="mail" data-weight="fill" style={{ fontVariationSettings: '"FILL" 1' }}>
        mail
      </span>
      <h2 className="font-headline-md text-headline-md text-primary mb-2">Mantente informado</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
        Recibe mensualmente las últimas tendencias en desarrollo y cloud directamente en tu bandeja.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-secondary/50 font-body-md text-body-md"
          placeholder="Tu correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-3 rounded-xl font-label-md text-label-md transition-all active:scale-95"
          disabled={submitted}>
          {submitted ? '¡Suscrito!' : 'Suscribirse'}
        </button>
      </form>
      <p className="mt-4 text-[10px] text-on-surface-variant opacity-60">
        Al suscribirte, aceptas nuestra Política de Privacidad.
      </p>
    </section>
  );
}
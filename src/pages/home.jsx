import { useNavigate } from 'react-router-dom';
import { CategoryPills } from '../components/CategoryPills';
import { ArticleList } from '../components/articleCard';
import { NewsletterForm } from '../components/NewsletterForm';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="pt-20 pb-stack-lg">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center px-margin-mobile pt-stack-md">
        <div className="lg:col-span-6 space-y-stack-sm pr-8">
          <div className="inline-flex items-center bg-surface-container text-primary font-semibold text-xs px-3 py-1 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary mr-2"></span>
            {' '}
Destacado
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-on-surface leading-tight">
            El Futuro del Software
          </h1>
          <p className="text-lg text-on-surface-variant">
            Explora c&oacute;mo la inteligencia artificial, la computaci&oacute;n cu&aacute;ntica y las arquitecturas distribuidas est&aacute;n redefiniendo los l&iacute;mites del desarrollo tecnol&oacute;gico empresarial.
          </p>
          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-outline-variant/30">
            <img
              alt="Autor"
              className="w-12 h-12 rounded-full border-2 border-surface-container-highest"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4R9GXxytO_XEHO80qHTW1igUsEhCD4cq4ojw4xuwQLGqwKjcf9CTFKRKQZ7qgFsX71kNacSbIeGZ6g3FPeUfqdVEV4lnv6gPy7tlWbdhZj2VEMEQWJCYDrFajEfbCxyzr5t3jLFwd25Ep5lcefD16gllMBQwmzS742sUR7esiVnALNRq94FSqBmAP-snH81ovIS1IG0atYHAn5CIlLpG58fOfIeYVPw9CJsdTlRhfpqLqxlKmM3KZ4rNFAc5A4PKvZUMqg8qhgZzI"
            />
            <div>
              <p className="font-semibold text-sm text-on-surface">Carlos Mendoza</p>
              <p className="text-xs text-on-surface-variant flex items-center gap-1">
                <span className="material-symbols-outlined" style={{fontSize: '14px'}}>schedule</span>
                {' '}
8 min de lectura
              </p>
            </div>
          </div>
        </div>
        <div
          className="lg:col-span-6 h-[300px] lg:h-[400px] rounded-xl overflow-hidden relative shadow-[0_8px_30px_rgba(49,107,243,0.15)] group cursor-pointer mt-6 lg:mt-0"
          onClick={() => navigate('/articulo/futuro-software-ia')}>
          <img
            alt="Tecnolog&iacute;a"
            className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_g6KJtzi539hJoTN3thPKfAHzr2vX_hHj8neGr5bxdeZ0pHDneD9miX3P_lRnqpLnKDwZSl0YCxYGjIqNuUk1A0p1CwHgTFPd2X1qXnU-njFOAC4VDKpjx7j1_kp2ERxaPN0ExQe5di7OTDENMP0SLt2NlaK-WDIsB8bVg4wndi6oIQ_FUuWzA0ZhD6-WiQNYqTL2WDNGX72ECVzyuTJI36VBWG6P039liSCkwDgGz0zRibQFAyPzu2FM6w0rEUiwePRl4FnQNfJt"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-transparent to-transparent"></div>
        </div>
      </section>

      <CategoryPills activeCategory="" onCategoryChange={() => {}} />

      <ArticleList />

      <NewsletterForm />
    </main>
  );
}

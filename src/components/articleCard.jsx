import { Link } from 'react-router-dom';

const articles = [
  {
    slug: 'futuro-software-ia',
    category: 'Tecnolog\u00eda & IA',
    date: 'Oct 24, 2024',
    title: 'El Futuro del Software: C\u00f3mo la IA est\u00e1 Redefiniendo la Arquitectura de C\u00f3digo',
    excerpt: 'Explora c\u00f3mo la inteligencia artificial, la computaci\u00f3n cu\u00e1ntica y las arquitecturas distribuidas est\u00e1n redefiniendo los l\u00edmites del desarrollo tecnol\u00f3gico empresarial.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_g6KJtzi539hJoTN3thPKfAHzr2vX_hHj8neGr5bxdeZ0pHDneD9miX3P_lRnqpLnKDwZSl0YCxYGjIqNuUk1A0p1CwHgTFPd2X1qXnU-njFOAC4VDKpjx7j1_kp2ERxaPN0ExQe5di7OTDENMP0SLt2NlaK-WDIsB8bVg4wndi6oIQ_FUuWzA0ZhD6-WiQNYqTL2WDNGX72ECVzyuTJI36VBWG6P039liSCkwDgGz0zRibQFAyPzu2FM6w0rEUiwePRl4FnQNfJt',
    imageAlt: 'Tecnolog\u00eda futurista IA'
  },
  {
    slug: 'infraestructura-critica',
    category: 'Ciberseguridad',
    date: 'Mar 12, 2024',
    title: 'Infraestructura Cr\u00edtica: Protegiendo el Core de tu Negocio',
    excerpt: 'Exploramos las mejores pr\u00e1cticas para blindar sistemas empresariales en la era del teletrabajo y ataques automatizados.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO3WdMiBTTIAGlOifjhtEqIVN2eAcgds5E9dqhV5Eau_u2cd50HgTgtQf90JUlsK7tfEP0jatkO3K67wZxwAPJKTBaUnUxTLpOMOpGJNlk-7QoibuWHHkSBh8CNyNgu-COd99BgwGHDiffvSOsXL2-JNx-HSMmfeb2jnJj9fxeN2XMJXos529JKR5euAb_8c8EUqMx6f4Xl_c63DOY5IjTWyRa0CPbaBIstsjFjlszLA2a80dqameuoPZnflXmvsW-83G7lWxK5KAC',
    imageAlt: 'Workspace con monitores mostrando c\u00f3digo'
  },
  {
    slug: 'agile-2',
    category: 'Metodolog\u00edas',
    date: 'Mar 08, 2024',
    title: 'Agile 2.0: M\u00e1s all\u00e1 del Scrum tradicional',
    excerpt: 'C\u00f3mo adaptar los marcos de trabajo \u00e1giles a equipos distribuidos y proyectos de alta complejidad t\u00e9cnica.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqSgSunEgCabA-ELE-bXPqToNGn499E_WNpvP-ST1o62BrsmcyxF867qM0aW6LCqk371MC71RtH84l-IQZIklTMaLCek75zov3OVDRF22uJ4DQLYP7-gjTCb9c1_w5sUkXZwUJE4SJxAId6bAMGMW59NtEuxkqHImtFuXlo6aNmHSB_7QjP7W6jXhKMGGkdvw3K_CYhKwnxzGosznq4vjoTB6068QUjrVOaCObo_Cs3vI_DciJfqNBdhTNngceGK9x5-KbDWL6kN2T',
    imageAlt: 'Pantalla con c\u00f3digo en oficina moderna'
  },
  {
    slug: 'zero-trust',
    category: 'Ciberseguridad',
    date: '15 Oct 2024',
    title: 'Zero Trust: El nuevo est\u00e1ndar en seguridad empresarial',
    excerpt: 'Descubre c\u00f3mo el modelo Zero Trust est\u00e1 revolucionando la seguridad empresarial en la era del teletrabajo y las amenazas avanzadas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGRVHPE4xbnN9LV5Ovy8Ttt6--BDcXEkdC3XixEOUe3HVIi6HLhlTgUOTdPn4Oc4HuOKoofXfDgOxdLGi-_43h1D59nRdGV7NzOh6BCLc7oFUjjKzT9oUFoU0eBKTn9yvYKIS_5_Saz8GH8c3mmbonCY7Kb9woqbNte8o_TCjJEvkWqDi0AjGOtHD3ECkYUhVz8Ivq2_2p3JEl67rOQFDNXT-LhWIYyfsnog_y0NUR9CmP5_efCTqmyt16m6OeSEhMO1oFwe8M9XMt',
    imageAlt: 'Seguridad inform\u00e1tica Zero Trust'
  },
  {
    slug: 'agile-vs-devops',
    category: 'Metodolog\u00edas',
    date: '15 Oct 2024',
    title: 'Agile vs DevOps: Sinergias para el desarrollo moderno',
    excerpt: 'Aprende c\u00f3mo combinar Agile y DevOps para maximizar la eficiencia de tus equipos de desarrollo y entrega continua.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5nq2lgBUOrHQMCXnc0O5D85Bn04nwET16ME2cm3f5BebkTjTg9HQMxqF9aLpo2Q8zCRlcMWwvVxXEt2KBoYxaYlf0iBPz9JCoea-VhljeGHAuKOalNl6pTlOrjtYDtefoassB6snf0FF4U0dHFAa_c9eq9ZtyOmdqHiFr7Shtk5rXt0Mqvg3yHTVsNH7HPiFov5O3Vlal7zI65Kr7SOwFhe3JEahMPKFp0O-orOk222R_zSbSjWJL3BKHqVaJp1mO2-TpJDv1Q4fi',
    imageAlt: 'Metodolog\u00edas \u00e1giles'
  },
  {
    slug: 'migracion-nube',
    category: 'Cloud',
    date: '15 Oct 2024',
    title: 'Migraci\u00f3n a la Nube: Estrategias para empresas legacy',
    excerpt: 'Gu\u00eda completa para migrar infraestructuras legacy a la nube con estrategias probadas y mejores practices.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAImOOlaQjbLDy8zjgqHn3q-Fy4Tb1V6elKPBKe19gu0x9zh5PilUR5QNWkmefaN6nabLhnhGKREUGIv19ji87WA20PJCOdtXJmR4Y-n2MI5VgB5HL70GX82-6Fe0_w-LCWzBTGK_SqJ5i1J0acRQMMF8vpBgxq1a0aMU9b2V1JUMlRkl_JpbTpAjECRispg2Ujratf88HzVz9h-DVwBaCiUZT-QNEe95rKOThffeb7LmX6xBgFA5x84EsouquuPkNg0Q8_vLsv4IM7',
    imageAlt: 'Cloud computing'
  },
];

export function ArticleCard({ article }) {
  const data = article || articles[0];
  return (
    <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm">
      <div className="h-48 relative">
        <img
          className="w-full h-full object-cover"
          src={data.image}
          alt={data.imageAlt}
        />
      </div>
      <div className="p-margin-mobile">
        <div className="flex justify-between items-center mb-2">
          <span className="text-label-sm font-label-sm text-secondary uppercase tracking-wider">
            {data.category}
          </span>
          <span className="text-body-sm font-body-sm text-on-surface-variant">
            {data.date}
          </span>
        </div>
        <Link to={`/articulo/${data.slug}`} className="block">
          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3 line-clamp-2">
            {data.title}
          </h3>
        </Link>
        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
          {data.excerpt}
        </p>
      </div>
    </article>
  );
}

export function ArticleList() {
  return (
    <section className="px-margin-mobile mt-stack-lg flex flex-col gap-stack-md">
      <h2 className="font-headline-sm text-headline-sm text-primary flex items-center gap-2">
        <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
        Artículos Recientes
      </h2>
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
      <button className="w-full py-4 border-2 border-outline-variant rounded-xl font-label-md text-label-md text-on-surface-variant flex items-center justify-center gap-2 active:bg-surface-container-high transition-colors">
        Ver más artículos
        <span className="material-symbols-outlined" data-icon="expand_more">expand_more</span>
      </button>
    </section>
  );
}

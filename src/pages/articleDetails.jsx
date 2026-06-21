import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const articles = {
  'futuro-software-ia': {
    category: 'Tecnolog\u00eda & IA',
    title: 'El Futuro del Software: C\u00f3mo la IA est\u00e1 Redefiniendo la Arquitectura de C\u00f3digo',
    author: 'Carlos Mendoza',
    role: 'Chief Technical Officer',
    date: 'Oct 24, 2024',
    readTime: '8 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHSPU1cltyYHn8BVYv3s_ywjMStPWkrpfE4MfcNWzM4TaGNz2zmatntcpFPYM5F5_jADW91PKkeLp5k7XV7ivekBO1cBHvXR8Kjp_xgqaxCwDaEjuMTihSYddSiqEO3bmX9RPunpPMgcss98iWpIpgwsnM-LCdADK7loRRJJrDEt551xmbyDzcGwv1P4lry8Ocqlv708dLl3iQ6sR_RCDS6z3mnnH2KIcwrYxyk2WXB14MmQnXV-tPVBuE0FloeYxzSVx976cV-qt',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          En el panorama actual del desarrollo de software, la arquitectura no es solo una elecci\u00f3n t\u00e9cnica, sino el cimiento sobre el cual se construye la longevidad de un producto.
        </p>
        <h2 className="text-xl font-bold text-primary">El Desaf\u00edo de la Deuda T\u00e9cnica</h2>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;La simplicidad es el prerrequisito para la fiabilidad, pero la arquitectura es el mapa para la evoluci\u00f3n.&rdquo;
        </blockquote>
        <div className="bg-tertiary p-4 rounded-lg overflow-x-auto shadow-inner">
          <pre className="code-block text-tertiary-fixed-dim text-sm leading-relaxed">
            <code>{`public class OrderService {
    private final CommandBus bus;

    public void createOrder(OrderRequest req) {
        bus.send(new CreateOrderCommand(req));
        log.info("Command dispatched ID: {}", req.getId());
    }
}`}</code>
          </pre>
        </div>
        <img className="rounded-xl shadow-sm border border-outline-variant w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCjU6NauWbO9jeB4CHvYU4pcZ2ndiG9tEBKznQnPmnXxesN_m9fWIbOfe8N9BpkZ8zYeUVeg0zssZr0PodDge5l0SgPt8eyCC7-pxNvSglQp9mlB-DPmqQHa1Fb_cwpQA4mzc0dVzczyyxqJ1zSLkpLzeeK4Q3SocuKhyTwh2D7wbKtA5Km3n9ns0bv1AFBfFrg1_srRt2yDpn7lgHjPmp_lMINDWX6Rx362pcIVPIryosSS-Qu-fnigskq5KpVL6myELYDK9jMPw" alt="Diagram" />
      </>
    ),
  },
  'infraestructura-critica': {
    category: 'Ciberseguridad',
    title: 'Infraestructura Cr\u00edtica: Protegiendo el Core de tu Negocio',
    author: 'Carlos Mendoza',
    role: 'Chief Technical Officer',
    date: 'Mar 12, 2024',
    readTime: '6 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHSPU1cltyYHn8BVYv3s_ywjMStPWkrpfE4MfcNWzM4TaGNz2zmatntcpFPYM5F5_jADW91PKkeLp5k7XV7ivekBO1cBHvXR8Kjp_xgqaxCwDaEjuMTihSYddSiqEO3bmX9RPunpPMgcss98iWpIpgwsnM-LCdADK7loRRJJrDEt551xmbyDzcGwv1P4lry8Ocqlv708dLl3iQ6sR_RCDS6z3mnnH2KIcwrYxyk2WXB14MmQnXV-tPVBuE0FloeYxzSVx976cV-qt',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Exploramos las mejores pr\u00e1cticas para blindar sistemas empresariales en la era del teletrabajo y ataques automatizados.
        </p>
        <h2 className="text-xl font-bold text-primary">El Panorama de Amenazas Actual</h2>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;La seguridad no es un producto, sino un proceso.&rdquo;
        </blockquote>
        <img className="rounded-xl shadow-sm border border-outline-variant w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCjU6NauWbO9jeB4CHvYU4pcZ2ndiG9tEBKznQnPmnXxesN_m9fWIbOfe8N9BpkZ8zYeUVeg0zssZr0PodDge5l0SgPt8eyCC7-pxNvSglQp9mlB-DPmqQHa1Fb_cwpQA4mzc0dVzczyyxqJ1zSLkpLzeeK4Q3SocuKhyTwh2D7wbKtA5Km3n9ns0bv1AFBfFrg1_srRt2yDpn7lgHjPmp_lMINDWX6Rx362pcIVPIryosSS-Qu-fnigskq5KpVL6myELYDK9jMPw" alt="Security Diagram" />
      </>
    ),
  },
  'agile-2': {
    category: 'Metodolog\u00edas',
    title: 'Agile 2.0: M\u00e1s all\u00e1 del Scrum tradicional',
    author: 'Carlos Mendoza',
    role: 'Chief Technical Officer',
    date: 'Mar 08, 2024',
    readTime: '5 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQHSPU1cltyYHn8BVYv3s_ywjMStPWkrpfE4MfcNWzM4TaGNz2zmatntcpFPYM5F5_jADW91PKkeLp5k7XV7ivekBO1cBHvXR8Kjp_xgqaxCwDaEjuMTihSYddSiqEO3bmX9RPunpPMgcss98iWpIpgwsnM-LCdADK7loRRJJrDEt551xmbyDzcGwv1P4lry8Ocqlv708dLl3iQ6sR_RCDS6z3mnnH2KIcwrYxyk2WXB14MmQnXV-tPVBuE0FloeYxzSVx976cV-qt',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          C\u00f3mo adaptar los marcos de trabajo \u00e1giles a equipos distribuidos y proyectos de alta complejidad t\u00e9cnica.
        </p>
        <h2 className="text-xl font-bold text-primary">La Evoluci\u00f3n de lo \u00c1gil</h2>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;No se trata de hacer m\u00e1s r\u00e1pido, sino de aprender m\u00e1s r\u00e1pido.&rdquo;
        </blockquote>
        <img className="rounded-xl shadow-sm border border-outline-variant w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCjU6NauWbO9jeB4CHvYU4pcZ2ndiG9tEBKznQnPmnXxesN_m9fWIbOfe8N9BpkZ8zYeUVeg0zssZr0PodDge5l0SgPt8eyCC7-pxNvSglQp9mlB-DPmqQHa1Fb_cwpQA4mzc0dVzczyyxqJ1zSLkpLzeeK4Q3SocuKhyTwh2D7wbKtA5Km3n9ns0bv1AFBfFrg1_srRt2yDpn7lgHjPmp_lMINDWX6Rx362pcIVPIryosSS-Qu-fnigskq5KpVL6myELYDK9jMPw" alt="Agile Diagram" />
      </>
    ),
  },
  'zero-trust': {
    category: 'Ciberseguridad',
    title: 'Zero Trust: El nuevo est\u00e1ndar en seguridad empresarial',
    author: 'Carlos Mendoza',
    role: 'Lead Solutions Architect, SIO',
    date: '15 Oct 2024',
    readTime: '7 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGRVHPE4xbnN9LV5Ovy8Ttt6--BDcXEkdC3XixEOUe3HVIi6HLhlTgUOTdPn4Oc4HuOKoofXfDgOxdLGi-_43h1D59nRdGV7NzOh6BCLc7oFUjjKzT9oUFoU0eBKTn9yvYKIS_5_Saz8GH8c3mmbonCY7Kb9woqbNte8o_TCjJEvkWqDi0AjGOtHD3ECkYUhVz8Ivq2_2p3JEl67rOQFDNXT-LhWIYyfsnog_y0NUR9CmP5_efCTqmyt16m6OeSEhMO1oFwe8M9XMt',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          El modelo Zero Trust ha pasado de ser una tendencia a convertirse en el est\u00e1ndar de seguridad empresarial. \u00bfC\u00f3mo implementarlo correctamente?
        </p>
        <h2 className="text-xl font-bold text-primary">Nunca Confiar, Siempre Verificar</h2>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;En Zero Trust, la confianza es una vulnerabilidad. Cada acceso debe ser verificado, autenticado y autorizado.&rdquo;
        </blockquote>
        <p className="text-base text-on-surface-variant leading-relaxed">
          La implementaci\u00f3n de Zero Trust requiere un cambio de mentalidad: pasar de la seguridad perimetral a una arquitectura donde cada solicitud se valida en tiempo real, independientemente de su origen.
        </p>
        <img className="rounded-xl shadow-sm border border-outline-variant w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCjU6NauWbO9jeB4CHvYU4pcZ2ndiG9tEBKznQnPmnXxesN_m9fWIbOfe8N9BpkZ8zYeUVeg0zssZr0PodDge5l0SgPt8eyCC7-pxNvSglQp9mlB-DPmqQHa1Fb_cwpQA4mzc0dVzczyyxqJ1zSLkpLzeeK4Q3SocuKhyTwh2D7wbKtA5Km3n9ns0bv1AFBfFrg1_srRt2yDpn7lgHjPmp_lMINDWX6Rx362pcIVPIryosSS-Qu-fnigskq5KpVL6myELYDK9jMPw" alt="Zero Trust Diagram" />
      </>
    ),
  },
  'agile-vs-devops': {
    category: 'Metodolog\u00edas',
    title: 'Agile vs DevOps: Sinergias para el desarrollo moderno',
    author: 'Carlos Mendoza',
    role: 'Lead Solutions Architect, SIO',
    date: '15 Oct 2024',
    readTime: '6 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5nq2lgBUOrHQMCXnc0O5D85Bn04nwET16ME2cm3f5BebkTjTg9HQMxqF9aLpo2Q8zCRlcMWwvVxXEt2KBoYxaYlf0iBPz9JCoea-VhljeGHAuKOalNl6pTlOrjtYDtefoassB6snf0FF4U0dHFAa_c9eq9ZtyOmdqHiFr7Shtk5rXt0Mqvg3yHTVsNH7HPiFov5O3Vlal7zI65Kr7SOwFhe3JEahMPKFp0O-orOk222R_zSbSjWJL3BKHqVaJp1mO2-TpJDv1Q4fi',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Agile y DevOps no son rivales, sino complementos. Descubre c\u00f3mo su integraci\u00f3n crea equipos de alto rendimiento.
        </p>
        <h2 className="text-xl font-bold text-primary">La Sinergia Perfecta</h2>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;Agile pregunta &iquest;estamos construyendo lo correcto? DevOps pregunta &iquest;podemos entregarlo de forma confiable? Ambas preguntas son necesarias.&rdquo;
        </blockquote>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Mientras Agile optimiza la planificaci\u00f3n y la entrega de valor incremental, DevOps automatiza la integraci\u00f3n y el despliegue continuo. Juntos, reducen el time-to-market y mejoran la calidad del software.
        </p>
        <img className="rounded-xl shadow-sm border border-outline-variant w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCjU6NauWbO9jeB4CHvYU4pcZ2ndiG9tEBKznQnPmnXxesN_m9fWIbOfe8N9BpkZ8zYeUVeg0zssZr0PodDge5l0SgPt8eyCC7-pxNvSglQp9mlB-DPmqQHa1Fb_cwpQA4mzc0dVzczyyxqJ1zSLkpLzeeK4Q3SocuKhyTwh2D7wbKtA5Km3n9ns0bv1AFBfFrg1_srRt2yDpn7lgHjPmp_lMINDWX6Rx362pcIVPIryosSS-Qu-fnigskq5KpVL6myELYDK9jMPw" alt="DevOps Diagram" />
      </>
    ),
  },
  'migracion-nube': {
    category: 'Cloud',
    title: 'Migraci\u00f3n a la Nube: Estrategias para empresas legacy',
    author: 'Carlos Mendoza',
    role: 'Lead Solutions Architect, SIO',
    date: '15 Oct 2024',
    readTime: '8 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAImOOlaQjbLDy8zjgqHn3q-Fy4Tb1V6elKPBKe19gu0x9zh5PilUR5QNWkmefaN6nabLhnhGKREUGIv19ji87WA20PJCOdtXJmR4Y-n2MI5VgB5HL70GX82-6Fe0_w-LCWzBTGK_SqJ5i1J0acRQMMF8vpBgxq1a0aMU9b2V1JUMlRkl_JpbTpAjECRispg2Ujratf88HzVz9h-DVwBaCiUZT-QNEe95rKOThffeb7LmX6xBgFA5x84EsouquuPkNg0Q8_vLsv4IM7',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          La migraci\u00f3n a la nube es uno de los desaf\u00edos m\u00e1s cr\u00edticos para empresas con infraestructura legacy. Te guiamos paso a paso.
        </p>
        <h2 className="text-xl font-bold text-primary">Estrategias de Migraci\u00f3n</h2>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;Migrar a la nube no es un proyecto de TI, es una transformaci\u00f3n de negocio. La estrategia correcta determina el \u00e9xito.&rdquo;
        </blockquote>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Desde el lift-and-shift hasta la re-arquitectura completa, cada enfoque tiene sus ventajas. La clave est\u00e1 en evaluar correctamente las cargas de trabajo y priorizar la migraci\u00f3n por impacto de negocio.
        </p>
        <img className="rounded-xl shadow-sm border border-outline-variant w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCjU6NauWbO9jeB4CHvYU4pcZ2ndiG9tEBKznQnPmnXxesN_m9fWIbOfe8N9BpkZ8zYeUVeg0zssZr0PodDge5l0SgPt8eyCC7-pxNvSglQp9mlB-DPmqQHa1Fb_cwpQA4mzc0dVzczyyxqJ1zSLkpLzeeK4Q3SocuKhyTwh2D7wbKtA5Km3n9ns0bv1AFBfFrg1_srRt2yDpn7lgHjPmp_lMINDWX6Rx362pcIVPIryosSS-Qu-fnigskq5KpVL6myELYDK9jMPw" alt="Cloud Migration Diagram" />
      </>
    ),
  },
};

export default function ArticleDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const article = articles[slug] || {
    category: 'Arquitectura',
    title: 'La Arquitectura del C\u00f3digo: Escalabilidad en Sistemas Enterprise',
    author: 'Carlos Mendoza',
    role: 'Lead Solutions Architect, SIO',
    date: '24 Oct, 2023',
    readTime: '8 min lectura',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXHsMBcn0cSgKhTBmEJSKNABSIcyy8lpJjHYuf7OiRMEibj3tRhGME2FQlF9t2wpAum4U9B46xaRWKIFtrx2IZx9a0nw8B4PPimDRtdDqvG-L6D6fgcXvVYvZVOQtqr70l3cvE3VFdy_WYfgvJNgusY1_P2_RTcZOl7XWnrO8JrF-bSIrimnOjDCT8eSdvZ2LRkFVEyO2hfGkruEZwqmsbVyCeat3M927UyFVSisJFzeagCIdM5iv2Od4JDZ9IuckAdzR5ullzRkOx',
    authorImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfzquyaQMtVw-p0e4L6Q8TPgN7-5envrKD6eH4sZn18RLCEAUP8SVsMupmIXdPIeaWig1FLIJ-32TMYi5bFpM_0DZJDqVoBjUtj-q5Ygz_qT7ofUJmqbOPobqtDSFjg8goB0Qy0WOP_WQYcopLItSWPP4eumJzZSaT-P9cloECxXCq27YtuXBPfARNz-Q6lws3bBNWTbmDnVWwIfWkkqoKS4eIpAoSDGFs_J8ET0y7j-djR7ZaPjQJSvRPHwIDkc2tRJi0EoH7Ap9g',
    content: (
      <>
        <p className="text-base text-on-surface-variant leading-relaxed">
          En el mundo del desarrollo de software enterprise, la escalabilidad no es una caracter\u00edstica opcional; es el cimiento sobre el cual se construyen los sistemas resilientes.
        </p>
        <h2 className="text-xl font-bold text-primary">De Monolitos a Microservicios</h2>
        <p className="text-base text-on-surface-variant leading-relaxed">
          La transici\u00f3n de arquitecturas monol\u00edticas a microservicios ha sido el cambio de paradigma dominante. Este enfoque modular permite a los equipos desplegar componentes de manera independiente.
        </p>
        <blockquote className="border-l-4 border-secondary pl-4 py-2 italic text-lg text-secondary bg-surface-container-low rounded-r-lg">
          &ldquo;La simplicidad es el prerrequisito para la fiabilidad en sistemas a gran escala.&rdquo;
          <footer className="text-sm text-on-surface-variant mt-2">&mdash; Edsger W. Dijkstra</footer>
        </blockquote>
        <div className="bg-inverse-surface p-4 rounded-lg overflow-x-auto shadow-inner border border-outline/20">
          <pre className="code-block text-primary-fixed-dim text-sm leading-relaxed">
            <code>{`class CircuitBreaker {
  constructor(request, options = {}) {
    this.request = request;
    this.state = 'CLOSED';
    this.failureThreshold = options.failureThreshold || 3;
    this.failureCount = 0;
  }

  async execute(...args) {
    if (this.state === 'OPEN') throw new Error('Circuit is OPEN');
    // ... logic
  }
}`}</code>
          </pre>
        </div>
        <p className="text-base text-on-surface-variant leading-relaxed">
          Al adoptar una mentalidad modular y priorizar la observabilidad, las organizaciones pueden construir plataformas verdaderamente escalables preparadas para el futuro.
        </p>
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-outline-variant">
          {['#Microservicios', '#Escalabilidad', '#NodeJS', '#Enterprise'].map(tag => (
            <span key={tag} className="px-3 py-1 rounded text-xs text-on-surface-variant border border-outline-variant/50 hover:bg-surface-container-high cursor-pointer transition-colors">{tag}</span>
          ))}
        </div>
      </>
    ),
  };

  return (
    <div className="pt-20">
      <section className="relative">
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img className="w-full h-full object-cover" src={article.image} alt={article.title} />
        </div>
        <div className="px-margin-mobile -mt-12 relative z-10">
          <div className="glass-card p-stack-md rounded-xl shadow-lg">
            <span className="inline-block px-3 py-1 bg-secondary-container text-white rounded-full text-xs font-bold mb-3">{article.category.toUpperCase()}</span>
            <h1 className="text-2xl font-bold text-primary mb-3 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-3 text-on-surface-variant text-sm">
              <img className="w-10 h-10 rounded-full object-cover border-2 border-surface" src={article.authorImg} alt={article.author} />
              <div>
                <p className="font-bold text-on-surface">{article.author}</p>
                <p>{article.date} &bull; {article.readTime}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="px-margin-mobile py-8 flex flex-col gap-6">
        {article.content}
      </article>

      <section className="px-margin-mobile py-8 bg-surface-container">
        <div className="glass-card p-4 rounded-xl flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img className="w-16 h-16 rounded-full object-cover" src={article.authorImg} alt={article.author} />
            <div>
              <h4 className="text-lg font-bold text-primary">{article.author}</h4>
              <p className="text-xs font-bold text-secondary">{article.role}</p>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant">Arquitecto de sistemas con m&aacute;s de 15 a&ntilde;os de experiencia dise&ntilde;ando soluciones empresariales.</p>
        </div>
      </section>

      <section className="px-margin-mobile py-8 bg-surface-container-low border-t border-outline-variant">
        <h3 className="text-xl font-bold text-primary mb-6">Comentarios (2)</h3>
        <div className="flex flex-col gap-6">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-surface-dim flex items-center justify-center text-primary font-bold">LM</div>
            <div>
              <p className="text-sm font-bold text-on-surface">Laura Martínez <span className="text-outline font-normal ml-2">Hace 2 horas</span></p>
              <p className="text-sm text-on-surface-variant mt-1">Excelente artículo. ¿Cómo recomiendan manejar la migración de un monolito?</p>
            </div>
          </div>
        </div>
        <form className="mt-8 flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
          <textarea className="w-full rounded-lg border-outline-variant focus:ring-1 focus:ring-secondary bg-surface-container-lowest text-sm" placeholder="Tu opinión nos importa..." rows="4" />
          <button className="w-full py-4 bg-primary text-on-primary rounded-lg font-bold shadow-md active:opacity-80 transition-opacity">Publicar Comentario</button>
        </form>
      </section>
    </div>
  );
}

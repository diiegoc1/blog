import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ServicesContact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="pt-20">
      <section className="max-w-container-max mx-auto px-margin-desktop py-stack-lg md:py-24 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
        <div>
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">Soluciones Digitales que Impulsan tu Futuro</h1>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            Aceleramos tu transformaci&oacute;n digital con arquitecturas escalables, dise&ntilde;o de experiencia de usuario de vanguardia y desarrollo de software a medida. Construimos plataformas robustas que optimizan tus procesos.
          </p>
        </div>
        <div className="relative h-72 lg:h-96 w-full rounded-xl overflow-hidden shadow-lg border border-outline-variant mt-6 md:mt-0">
          <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArjU_VHm2oBK9mFDxi54lyKKIbR4Hkx4FfBvGGoVtsMuR-RfKl5YQ5f7xtsOCNyCxminZ8dnM2rTOV5NEzZOdQSssJRzIARo2eKQDPxxZb8XKm6DaQGhqqFd4Y8YpQhhcupUTsCel1UlHLYpVQXZGfjLqaias4agQJs5yX5eVsTfvd4U612gr8WQfKtEG-PeF0SZf01QSGGdhsiwetTUe-8kF-CMNPf1fTTIsNtmdTGO84hlftKzXkaXWbScZ5267owkYIdH3TBGKr" alt="Network" />
        </div>
      </section>

      <section className="bg-surface-container-low py-16 border-y border-outline-variant">
        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: 'location_on', title: 'Oficina Central', desc: 'Torre Mayor, Av. Reforma 505, CDMX' },
            { icon: 'mail', title: 'Correo Electrónico', desc: 'contacto@sio-software.com' },
            { icon: 'phone', title: 'Teléfono', desc: '+52 (55) 1234 5678' }
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-8 rounded-lg border border-outline-variant hover:border-secondary transition-all shadow-sm">
              <span className="material-symbols-outlined text-4xl text-secondary mb-4">{item.icon}</span>
              <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form-section" className="max-w-[800px] mx-auto px-margin-desktop py-20">
        <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl shadow-lg border border-outline-variant">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Inicia tu Proyecto</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Nombre Completo</label>
                <input className="w-full bg-surface-container-low border-outline-variant rounded px-4 py-2 focus:ring-secondary transition-all" placeholder="Ej. Juan Pérez" type="text" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-on-surface-variant mb-1">Correo Electrónico</label>
                <input className="w-full bg-surface-container-low border-outline-variant rounded px-4 py-2 focus:ring-secondary transition-all" placeholder="juan@empresa.com" type="email" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant mb-1">Detalles del Proyecto</label>
              <textarea className="w-full bg-surface-container-low border-outline-variant rounded px-4 py-2 h-32 focus:ring-secondary transition-all outline-none resize-none" placeholder="Describe tus necesidades..."></textarea>
            </div>
            <button className="w-full bg-primary text-on-primary font-bold py-3 rounded hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2">
              Enviar Mensaje <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

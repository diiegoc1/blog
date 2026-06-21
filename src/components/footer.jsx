export function Footer() {
  return (
    <footer className="bg-primary w-full mt-stack-lg text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-container-max mx-auto px-margin-desktop py-stack-md">
        <div className="space-y-4">
          <div className="text-2xl font-bold">SIO</div>
          <p className="text-sm opacity-80">Software Solutions que impulsan tu negocio hacia el futuro tecnológico.</p>
        </div>
        <div className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-8">
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-colors">Aviso de Privacidad</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Comunidad</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-colors">GitHub</a></li>
              <li><a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-secondary-fixed transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-on-primary/10 max-w-container-max mx-auto px-margin-desktop py-6 text-center md:text-left">
        <p className="text-sm opacity-80">&copy; 2024 SIO Software Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

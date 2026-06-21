import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, open, close } = useMobileMenu();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="bg-surface-container-lowest shadow-sm border-b border-outline-variant w-full fixed top-0 z-50">
        <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-20">
          <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate('/')}>
            SIO
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              to="/"
              className={`${isActive('/') ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-200 px-3 py-2 rounded-md font-semibold text-sm`}>
              Inicio
            </Link>
            <Link
              to="/"
              className={`${isActive('/') ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-200 px-3 py-2 rounded-md font-semibold text-sm`}>
              Blog
            </Link>
            <Link
              to="/servicios"
              className={`${isActive('/servicios') ? 'text-secondary border-b-2 border-secondary' : 'text-on-surface-variant hover:text-primary'} transition-all duration-200 px-3 py-2 rounded-md font-semibold text-sm`}>
              Servicios
            </Link>
          </nav>
          <div className="hidden md:flex items-center">
            <div className="flex items-center bg-surface-container-low border border-outline-variant rounded-full px-3 py-1.5 mr-4 focus-within:border-secondary transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-2">search</span>
              <input
                type="text"
                placeholder="Buscar..."
                className="bg-transparent border-none outline-none text-sm w-32 focus:ring-0 p-0"
              />
            </div>
            <Link
              to="/servicios"
              className="bg-secondary-container text-on-secondary-container font-semibold text-sm px-6 py-2 rounded-lg hover:bg-secondary hover:text-on-secondary transition-colors duration-200 active:scale-95 shadow-[0_4px_16px_rgba(49,107,243,0.15)]">
              Cotizar Proyecto
            </Link>
          </div>
          <button className="md:hidden text-on-surface p-2" onClick={open} aria-label="Abrir menú">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </header>

      <MobileDrawer isOpen={isOpen} onClose={close} />
    </>
  );
}

function MobileDrawer({ isOpen, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
      aria-hidden={!isOpen}>
      <div
        className={`absolute right-0 top-0 h-full w-4/5 bg-surface p-margin-mobile flex flex-col shadow-xl transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-stack-lg">
          <span className="text-headline-sm font-bold text-primary">SIO Menu</span>
          <button className="p-2 text-on-surface-variant" onClick={onClose} aria-label="Cerrar menú">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          <Link
            to="/servicios"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            onClick={onClose}>
            Servicios
          </Link>
          <Link
            to="/"
            className="font-label-md text-label-md text-secondary font-bold border-l-4 border-secondary pl-4"
            onClick={onClose}>
            Blog
          </Link>
          <Link
            to="#nosotros"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            onClick={onClose}>
            Nosotros
          </Link>
          <Link
            to="/servicios#contacto"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
            onClick={onClose}>
            Contacto
          </Link>
        </nav>
        <div className="mt-auto pt-stack-md border-t border-outline-variant">
          <Link
            to="/servicios#contacto"
            className="block w-full bg-primary text-on-primary py-4 px-6 rounded-lg font-label-md text-label-md text-center transition-all active:scale-95 shadow-lg"
            onClick={onClose}>
            Cotizar Proyecto
          </Link>
        </div>
      </div>
    </div>
  );
}

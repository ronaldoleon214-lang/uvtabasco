import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/uvtData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [offerDropdown, setOfferDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Promociones y Becas', href: '#ofertas' },
    { label: 'Oferta Educativa', href: '#carreras', hasDropdown: true },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#admision' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Cinta de Convocatoria y Promoción Activa */}
      <div className="bg-uvt-navy-dark text-white text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="w-3.5 h-3.5 text-uvt-gold shrink-0" />
            <p className="truncate font-medium">
              <span className="text-uvt-gold font-bold">ADMISIONES ENERO 2027:</span>{' '}
              Inscripción Gratis por tiempo limitado · Pregunta por nuestras becas por convenio
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 shrink-0 text-slate-300">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-white font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-uvt-gold" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-1.5 hover:text-white"
            >
              <Mail className="w-3.5 h-3.5 text-uvt-cyan" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation con el Logo Oficial UVT */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
            : 'bg-white border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <a href="#inicio" className="flex items-center shrink-0 py-1">
            <img
              src="/assets/logo-uvt.png"
              alt="Universidad Vasconcelos de Tabasco — Secundaria, Bachillerato, Universidad"
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOfferDropdown(true)}
                  onMouseLeave={() => setOfferDropdown(false)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold text-uvt-navy hover:text-uvt-blue hover:bg-blue-50/70 transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </a>
                  {offerDropdown && (
                    <div className="absolute left-0 top-full pt-2 w-64">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2">
                        <a
                          href="#niveles"
                          className="block px-3 py-2 rounded-lg text-sm text-uvt-navy hover:bg-blue-50 hover:text-uvt-blue font-medium"
                        >
                          Preparatoria Abierta (14 meses)
                        </a>
                        <a
                          href="#carreras"
                          className="block px-3 py-2 rounded-lg text-sm text-uvt-navy hover:bg-blue-50 hover:text-uvt-blue font-medium"
                        >
                          Ingenierías (4 programas)
                        </a>
                        <a
                          href="#carreras"
                          className="block px-3 py-2 rounded-lg text-sm text-uvt-navy hover:bg-blue-50 hover:text-uvt-blue font-medium"
                        >
                          Licenciaturas (4 programas)
                        </a>
                        <a
                          href="#niveles"
                          className="block px-3 py-2 rounded-lg text-sm text-uvt-navy hover:bg-blue-50 hover:text-uvt-blue font-medium"
                        >
                          Maestrías Ejecutivas
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-2 rounded-lg text-sm font-semibold text-uvt-navy hover:text-uvt-blue hover:bg-blue-50/70 transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* CTA Desktop + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#admision"
              className="hidden sm:inline-flex items-center gap-2 bg-uvt-gold hover:bg-amber-400 text-uvt-navy-dark text-sm font-extrabold px-5 py-2.5 rounded-full shadow-sm transition-all duration-200"
            >
              <span>Inscríbete Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-uvt-navy hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1 shadow-lg">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-semibold text-uvt-navy hover:bg-blue-50 hover:text-uvt-blue"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href="#admision"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-uvt-gold text-uvt-navy-dark font-extrabold py-3 rounded-full"
              >
                <span>Inscríbete Ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

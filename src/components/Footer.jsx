import { CONTACT_INFO, PROGRAMS } from '../data/uvtData';

export default function Footer() {
  return (
    <footer className="bg-uvt-navy-dark text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Logo Oficial UVT en contenedor nítido + Redes */}
          <div className="space-y-4">
            <div className="inline-block bg-white rounded-xl px-3.5 py-2 shadow-sm">
              <img
                src="/assets/logo-uvt.png"
                alt="Universidad Vasconcelos de Tabasco"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              20 años de experiencia formando profesionales con valores, visión productiva y
              validez oficial ante la Secretaría de Educación Pública (SEP).
            </p>
            <div className="pt-1">
              <p className="text-xs font-semibold text-white mb-2.5">Síguenos en:</p>
              <div className="flex items-center gap-2.5">
                <a
                  href={CONTACT_INFO.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook UVT"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-uvt-blue text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.3l.7-3H13v-1.5c0-.28.22-.5.5-.5z" />
                  </svg>
                </a>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram UVT"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-uvt-blue text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </a>
                <a
                  href={CONTACT_INFO.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube UVT"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-uvt-blue text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81zM10 15V9l5.2 3-5.2 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Oferta Académica */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Carreras Universitarias
            </h4>
            <ul className="space-y-2 text-xs">
              {PROGRAMS.slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a href="#carreras" className="hover:text-white transition-colors">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Normativa y Trámites */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Trámites y Normativa
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://uvtabasco.edu.mx/nosotros/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Nosotros · Grupo CEDAR
                </a>
              </li>
              <li>
                <a
                  href="https://uvtabasco.edu.mx/servicios/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Requisitos de Titulación y Cédula
                </a>
              </li>
              <li>
                <a
                  href="https://uvtabasco.edu.mx/bibliotecavirtual/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Biblioteca Virtual
                </a>
              </li>
              <li>
                <a
                  href="https://uvtabasco.edu.mx/seaes/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Evaluación SEAES
                </a>
              </li>
              <li>
                <a
                  href="https://uvtabasco.edu.mx/contacto/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Info Contacto */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>{CONTACT_INFO.address}</li>
              <li>
                Tel:{' '}
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-white font-semibold hover:underline"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                Correo:{' '}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white hover:underline break-all"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© 2026 Universidad Vasconcelos de Tabasco (UVT). Todos los derechos reservados.</p>
          <p>Paraíso, Tabasco · México</p>
        </div>
      </div>
    </footer>
  );
}

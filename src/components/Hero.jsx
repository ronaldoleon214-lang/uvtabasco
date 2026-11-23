import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-uvt-navy-dark text-white overflow-hidden"
    >
      {/* Fotografía protagonista a ancho completo, limpia y luminosa */}
      <div className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-end sm:items-center">
        <img
          src="/images/hero-students.jpg"
          alt="Estudiantes universitarios de la Universidad Vasconcelos de Tabasco"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Degradado lateral sutil solo para dar lectura al texto sin apagar toda la foto */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061534]/90 via-[#061534]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061534]/85 via-transparent to-[#061534]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-uvt-gold">
              Admisión Enero 2027 · Paraíso, Tabasco
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.08]">
              20 años formando profesionales con visión de futuro
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
              Universidad Vasconcelos de Tabasco: Preparatoria Abierta, Licenciaturas, Ingenierías
              y Maestrías con validez oficial SEP y vinculación directa con el sector productivo.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#admision"
                className="inline-flex items-center gap-2.5 bg-uvt-gold hover:bg-amber-400 text-uvt-navy-dark font-extrabold px-7 py-3.5 rounded-lg shadow-lg transition-colors text-sm sm:text-base"
              >
                <span>Inscríbete ahora</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#carreras"
                className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/20 text-white border border-white/30 backdrop-blur-xs font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm sm:text-base"
              >
                <span>Explorar oferta educativa</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra institucional inferior limpia (sin cajitas flotantes) */}
      <div className="relative z-10 bg-uvt-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="border-l-2 border-uvt-gold pl-4">
              <p className="text-xs font-bold uppercase tracking-wider text-uvt-gold">
                Promoción Vigente
              </p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                Inscripción Gratis*
              </p>
            </div>
            <div className="border-l-2 border-uvt-cyan pl-4">
              <p className="text-xs font-bold uppercase tracking-wider text-uvt-cyan">
                Apoyo Estudiantil
              </p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                Becas y Convenios
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Modalidades
              </p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                Escolarizada y Sabatina
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Respaldo Académico
              </p>
              <p className="text-sm sm:text-base font-bold text-white mt-0.5">
                100% Validez Oficial SEP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

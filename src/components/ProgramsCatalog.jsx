import { useState } from 'react';
import { Clock, CalendarDays, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { PROGRAMS } from '../data/uvtData';

const CARD_THEMES = {
  'ing-petrolera': {
    bar: 'bg-purple-700',
    headerBg: 'bg-gradient-to-b from-purple-50 to-white',
    badge: 'text-purple-800 bg-purple-100/80',
  },
  'ing-industrial': {
    bar: 'bg-teal-600',
    headerBg: 'bg-gradient-to-b from-teal-50 to-white',
    badge: 'text-teal-800 bg-teal-100/80',
  },
  'ing-ambiental': {
    bar: 'bg-emerald-600',
    headerBg: 'bg-gradient-to-b from-emerald-50 to-white',
    badge: 'text-emerald-800 bg-emerald-100/80',
  },
  'ing-logistica': {
    bar: 'bg-amber-600',
    headerBg: 'bg-gradient-to-b from-amber-50 to-white',
    badge: 'text-amber-800 bg-amber-100/80',
  },
  'lic-administracion': {
    bar: 'bg-amber-500',
    headerBg: 'bg-gradient-to-b from-yellow-50 to-white',
    badge: 'text-amber-800 bg-amber-100/80',
  },
  'lic-derecho': {
    bar: 'bg-rose-800',
    headerBg: 'bg-gradient-to-b from-rose-50 to-white',
    badge: 'text-rose-900 bg-rose-100/80',
  },
  'lic-psicopedagogia': {
    bar: 'bg-pink-600',
    headerBg: 'bg-gradient-to-b from-pink-50 to-white',
    badge: 'text-pink-800 bg-pink-100/80',
  },
  'lic-enfermeria': {
    bar: 'bg-emerald-500',
    headerBg: 'bg-gradient-to-b from-teal-50 to-white',
    badge: 'text-emerald-800 bg-emerald-100/80',
  },
};

export default function ProgramsCatalog({ onSelectProgram }) {
  const [filter, setFilter] = useState('all');
  const [activeProgram, setActiveProgram] = useState(null);

  const filtered =
    filter === 'all' ? PROGRAMS : PROGRAMS.filter((p) => p.category === filter);

  const tabs = [
    { id: 'all', label: 'Todas (8)' },
    { id: 'ingenierias', label: 'Ingenierías (4)' },
    { id: 'licenciaturas', label: 'Licenciaturas (4)' },
  ];

  return (
    <section id="carreras" className="py-8 sm:py-10 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-uvt-blue mb-2">
              Oferta Académica UVT
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-uvt-navy tracking-tight">
              Licenciaturas e Ingenierías
            </h2>
            <p className="text-slate-600 mt-1.5 max-w-2xl text-sm sm:text-base">
              Programas con reconocimiento oficial SEP diseñados para el mercado laboral de
              Tabasco. Selecciona una carrera para ver su plan y solicitar informes.
            </p>
          </div>

          <div className="inline-flex flex-wrap gap-1 bg-white p-1.5 rounded-xl border border-slate-200 shadow-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-uvt-navy text-white shadow-xs'
                    : 'text-slate-600 hover:text-uvt-navy hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid con escudos protagonistas grandes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((program) => {
            const theme = CARD_THEMES[program.id] || {
              bar: 'bg-uvt-navy',
              headerBg: 'bg-slate-50',
              badge: 'text-uvt-navy bg-slate-100',
            };
            return (
              <article
                key={program.id}
                onClick={() => setActiveProgram(program)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-uvt-navy shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className={`h-1.5 w-full ${theme.bar}`} />

                  {/* Cabecera visual protagonista con el escudo oficial en grande */}
                  <div className={`relative px-5 pt-4 pb-3 flex flex-col items-center ${theme.headerBg}`}>
                    <div className="w-full flex items-center justify-between mb-1">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${theme.badge}`}
                      >
                        {program.categoryLabel}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700">
                        Enero 2027
                      </span>
                    </div>

                    <img
                      src={program.emblem}
                      alt={`Escudo oficial de ${program.title}`}
                      className="w-32 h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="px-5 pb-4 pt-1 text-left">
                    <h3 className="font-display font-bold text-base sm:text-lg text-uvt-navy group-hover:text-uvt-blue transition-colors leading-snug mb-1.5">
                      {program.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {program.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-semibold">{program.duration}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-uvt-blue group-hover:translate-x-0.5 transition-transform">
                    <span>Ver plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Banner Posgrado y Laboratorio con imagen protagonista */}
        <div className="mt-8 relative rounded-2xl overflow-hidden bg-uvt-navy text-white shadow-xl">
          <div className="grid lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-6 p-7 sm:p-9 flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src="/assets/escudo-8.jpg"
                  alt="Escudo Maestría en Ingeniería Petrolera"
                  className="w-16 h-16 rounded-full object-contain bg-white p-0.5 shrink-0"
                />
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-uvt-gold block">
                    Posgrado UVT · Validez SEP
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold leading-tight">
                    Maestría en Ingeniería Petrolera
                  </h3>
                </div>
              </div>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Especialízate en el corredor energético de Paraíso, Tabasco. Modalidad ejecutiva
                diseñada para profesionistas en activo con enfoque práctico e industrial.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <a
                  href="#admision"
                  className="inline-flex items-center gap-2 bg-uvt-gold hover:bg-amber-400 text-uvt-navy-dark font-extrabold text-sm px-6 py-3 rounded-lg transition-colors"
                >
                  <span>Solicitar Plan de Posgrado</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[240px]">
              <img
                src="/images/engineering-lab.jpg"
                alt="Estudiantes de ingeniería UVT en laboratorio"
                className="w-full h-full object-cover"
              />
              <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-uvt-navy to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Program Detail Modal */}
      {activeProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 backdrop-blur-xs p-4"
          onClick={() => setActiveProgram(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Cerrar detalle"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5 pr-8">
              <img
                src={activeProgram.emblem}
                alt={`Escudo ${activeProgram.title}`}
                className="w-20 h-20 object-contain shrink-0"
              />
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-uvt-blue bg-blue-50 px-2.5 py-0.5 rounded mb-1">
                  {activeProgram.categoryLabel} · Validez SEP
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-uvt-navy leading-snug">
                  {activeProgram.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {activeProgram.shortDesc}
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <p className="text-[11px] uppercase font-bold text-slate-400">Duración</p>
                <p className="text-sm font-bold text-uvt-navy flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-4 h-4 text-uvt-blue" />
                  {activeProgram.duration}
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100">
                <p className="text-[11px] uppercase font-bold text-slate-400">Modalidad</p>
                <p className="text-sm font-bold text-uvt-navy flex items-center gap-1.5 mt-0.5">
                  <CalendarDays className="w-4 h-4 text-uvt-blue" />
                  {activeProgram.modality}
                </p>
              </div>
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Áreas clave de formación
            </p>
            <ul className="space-y-2 mb-7">
              {activeProgram.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#admision"
                onClick={() => {
                  onSelectProgram(activeProgram.title);
                  setActiveProgram(null);
                }}
                className="flex-1 text-center bg-uvt-navy hover:bg-uvt-blue text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm"
              >
                Inscribirme / Pedir informes
              </a>
              <button
                type="button"
                onClick={() => setActiveProgram(null)}
                className="px-5 py-3 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

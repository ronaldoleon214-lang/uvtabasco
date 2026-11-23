import { BookOpen, Calendar, ShieldCheck, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { ECOSYSTEM_CARDS } from '../data/uvtData';

const SMALL_ICONS = {
  eventos: Calendar,
  seaes: ShieldCheck,
  encuesta: ClipboardCheck,
};

export default function EcosystemSection() {
  const biblioteca = ECOSYSTEM_CARDS.find((c) => c.id === 'biblioteca');
  const cedar = ECOSYSTEM_CARDS.find((c) => c.id === 'cedar');
  const bottomCards = ECOSYSTEM_CARDS.filter((c) => c.id !== 'biblioteca' && c.id !== 'cedar');

  return (
    <section
      id="ecosistema"
      className="py-8 sm:py-10 bg-white border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-uvt-blue mb-1.5">
              Comunidad & Recursos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-uvt-navy tracking-tight">
              Ecosistema Universitario UVT
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm">
            Accede a nuestra biblioteca digital, agenda de eventos, evaluación SEAES y la red
            educativa CEDAR.
          </p>
        </div>

        {/* Fila superior: 2 bloques visuales con contraste real (Azul Marino + Imagen CEDAR) */}
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {biblioteca && (
            <a
              href={biblioteca.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-uvt-navy text-white p-7 flex flex-col justify-between min-h-[210px] hover:bg-[#081c45] transition-colors shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 text-uvt-gold flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-200 bg-white/10 px-3 py-1 rounded-md">
                  {biblioteca.badge}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-display text-2xl font-extrabold mb-1.5">
                  {biblioteca.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {biblioteca.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-uvt-gold group-hover:text-amber-300">
                  <span>{biblioteca.action}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          )}

          {cedar && (
            <a
              href={cedar.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#F6F8FB] grid sm:grid-cols-12 min-h-[210px] hover:border-uvt-navy transition-colors"
            >
              <div className="sm:col-span-5 relative min-h-[160px] bg-white flex items-center justify-center p-4 border-b sm:border-b-0 sm:border-r border-slate-200">
                <img
                  src="/assets/cedar.jpg"
                  alt="Escudo Centro Educativo José Vasconcelos — Grupo CEDAR"
                  className="w-36 h-36 object-contain"
                />
              </div>
              <div className="sm:col-span-7 p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-uvt-blue bg-blue-100/80 px-2.5 py-0.5 rounded mb-2">
                    {cedar.badge}
                  </span>
                  <h3 className="font-display text-xl font-extrabold text-uvt-navy mb-1.5">
                    {cedar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cedar.description}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-uvt-navy group-hover:text-uvt-blue mt-4">
                  <span>{cedar.action}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          )}
        </div>

        {/* Fila inferior compacta: 3 accesos rápidos sin espacio desperdiciado */}
        <div className="grid md:grid-cols-3 gap-5">
          {bottomCards.map((card) => {
            const Icon = SMALL_ICONS[card.id] || Calendar;
            const isExternal = card.href.startsWith('http');

            return (
              <a
                key={card.id}
                href={card.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
                className="group flex items-start gap-4 bg-[#F6F8FB] hover:bg-white rounded-xl p-5 border border-slate-200/80 hover:border-uvt-navy transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-uvt-navy flex items-center justify-center shrink-0 group-hover:bg-uvt-navy group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-display font-bold text-base text-uvt-navy">
                      {card.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-uvt-blue shrink-0" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

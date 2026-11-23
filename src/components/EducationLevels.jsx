import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LEVELS } from '../data/uvtData';

const LEVEL_IMAGES = {
  prepa: '/images/hero-students.jpg',
  carreras: '/assets/20-aniversario.jpg',
  maestrias: '/images/engineering-lab.jpg',
};

export default function EducationLevels() {
  const [activeId, setActiveId] = useState('carreras');
  const activeLevel = EDUCATION_LEVELS.find((l) => l.id === activeId) || EDUCATION_LEVELS[1];

  return (
    <section id="niveles" className="py-8 sm:py-10 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 mb-6">
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-uvt-blue mb-1.5">
              Niveles Académicos · Grupo Educativo CEDAR
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-uvt-navy tracking-tight">
              Una ruta educativa completa para tu futuro
            </h2>
          </div>

          {/* Selector en una sola línea sin saltos */}
          <div className="inline-flex flex-wrap sm:flex-nowrap gap-1 bg-slate-100 p-1 rounded-xl shrink-0 self-start xl:self-auto">
            {EDUCATION_LEVELS.map((level, idx) => {
              const isSelected = level.id === activeId;
              return (
                <button
                  key={level.id}
                  type="button"
                  onClick={() => setActiveId(level.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-uvt-navy text-white shadow-xs'
                      : 'text-slate-600 hover:text-uvt-navy hover:bg-white/70'
                  }`}
                >
                  0{idx + 1}. {level.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel 50/50 amplio donde la foto horizontal se luce completa sin recortes */}
        <div className="grid lg:grid-cols-12 rounded-2xl overflow-hidden border border-slate-200 bg-[#F6F8FB] shadow-xs">
          <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[340px] bg-uvt-navy">
            <img
              src={LEVEL_IMAGES[activeLevel.id]}
              alt={activeLevel.title}
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-uvt-blue bg-blue-100/80 px-3 py-1 rounded-md">
                {activeLevel.tag}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {activeLevel.highlight}
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-uvt-navy mb-3">
              {activeLevel.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              {activeLevel.description}
            </p>

            <ul className="space-y-2.5 mb-7">
              {activeLevel.features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-2.5 text-sm font-semibold text-uvt-navy"
                >
                  <CheckCircle2 className="w-4 h-4 text-uvt-blue shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div>
              <a
                href={activeLevel.targetSection}
                className="inline-flex items-center gap-2 bg-uvt-navy hover:bg-uvt-blue text-white font-bold text-sm px-6 py-3 rounded-lg transition-colors"
              >
                <span>{activeLevel.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

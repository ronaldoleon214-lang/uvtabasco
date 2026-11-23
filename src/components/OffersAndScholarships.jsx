import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function OffersAndScholarships() {
  return (
    <section id="ofertas" className="py-8 sm:py-10 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
          {/* Columna izquierda: Beneficios claros sin espacio muerto */}
          <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-uvt-blue mb-2">
              Convocatoria Enero 2027 · Beneficios de Nuevo Ingreso
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-uvt-navy tracking-tight leading-tight">
              Inscripción Gratis y becas por convenio para impulsar tu carrera
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2.5">
              En la Universidad Vasconcelos de Tabasco facilitamos tu ingreso y permanencia para
              que estudies sin frenar tu trabajo ni tu economía familiar.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-100">
              {[
                'Inscripción Gratis pagando solo seguro escolar*',
                'Becas por convenio con PEMEX, ISSSTE e IFORTAB',
                'Preparatoria Abierta en solo 1 año 2 meses',
                'Horarios flexibles: escolarizado y sabatino',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-uvt-navy font-semibold"
                >
                  <CheckCircle2 className="w-4 h-4 text-uvt-blue shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Fotografía real del campus UVT a altura completa + CTA */}
          <div className="lg:col-span-5 relative min-h-[260px] flex flex-col justify-end p-7 sm:p-9 text-white bg-uvt-navy">
            <img
              src="/assets/20-aniversario.jpg"
              alt="Estudiantes de la Universidad Vasconcelos de Tabasco en el campus"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061534]/95 via-[#0B2559]/80 to-[#0B2559]/55" />

            <div className="relative z-10 space-y-3">
              <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-uvt-gold">
                Inicio de Clases · Enero 2027
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold leading-snug">
                Solicita costos, requisitos y tu porcentaje de beca
              </h3>
              <div className="pt-1">
                <a
                  href="#admision"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-uvt-gold hover:bg-amber-400 text-uvt-navy-dark font-extrabold text-sm px-6 py-3 rounded-lg shadow-lg transition-colors"
                >
                  <span>Apartar mi lugar</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

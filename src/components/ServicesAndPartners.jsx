import { ArrowRight, Handshake, UserCheck, Building2, GraduationCap } from 'lucide-react';
import { SERVICES, PARTNERS } from '../data/uvtData';

const SERVICE_ICONS = {
  Handshake,
  UserCheck,
  Building2,
  GraduationCap,
};

export default function ServicesAndPartners() {
  return (
    <section id="servicios" className="py-10 sm:py-12 bg-[#F6F8FB] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bloque principal unificado en contenedor blanco con foto full-height */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid lg:grid-cols-12 items-stretch">
          {/* Izquierda: Encabezado + Grid 2x2 atractivo de servicios */}
          <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-uvt-blue mb-1.5">
                Área de Servicios & Vinculación
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-uvt-navy tracking-tight">
                Conectamos tu formación con el entorno laboral
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SERVICES.map((service, idx) => {
                const Icon = SERVICE_ICONS[service.iconName] || Handshake;
                return (
                  <div
                    key={service.title}
                    className="group p-4 rounded-2xl bg-[#F6F8FB] hover:bg-uvt-navy hover:text-white border border-slate-200/70 hover:border-uvt-navy transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white text-uvt-navy group-hover:bg-uvt-gold group-hover:text-uvt-navy-dark flex items-center justify-center shadow-xs transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-display text-xs font-extrabold text-slate-400 group-hover:text-uvt-gold">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-uvt-navy group-hover:text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 group-hover:text-slate-200 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-1">
              <a
                href="#admision"
                className="inline-flex items-center gap-2 bg-uvt-navy hover:bg-uvt-blue text-white font-bold text-sm px-5 py-3 rounded-lg transition-colors"
              >
                <span>Vincular mi empresa o solicitar servicio social</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Derecha: Fotografía integrada a altura y borde completos */}
          <div className="lg:col-span-5 relative min-h-[280px] bg-uvt-navy">
            <img
              src="/images/campus-vinculacion.jpg"
              alt="Área de servicios escolares y vinculación empresarial UVT"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061534]/90 via-[#061534]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-uvt-gold mb-1">
                Vinculación Activa
              </span>
              <p className="font-display text-lg sm:text-xl font-bold leading-snug">
                Respaldo institucional para prácticas, estadías y empleabilidad
              </p>
            </div>
          </div>
        </div>

        {/* Franja de Convenios horizontal compacta con divisores y logos más grandes */}
        <div className="mt-8 pt-6 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <h3 className="font-display text-lg sm:text-xl font-bold text-uvt-navy">
              Convenios con Empresas e Instituciones
            </h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Alianzas vigentes en Tabasco
            </span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 overflow-hidden">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center text-center px-4 py-4 hover:bg-slate-50/70 transition-colors"
              >
                <div className="h-16 w-full flex items-center justify-center mb-1.5">
                  <img
                    src={partner.logo}
                    alt={`Convenio UVT con ${partner.name}`}
                    className="max-h-16 w-auto max-w-[160px] object-contain mix-blend-multiply"
                  />
                </div>
                <span className="text-xs font-bold text-uvt-navy">{partner.name}</span>
                <span className="text-[11px] font-medium text-slate-500">{partner.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

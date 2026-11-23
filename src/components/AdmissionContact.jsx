import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, PROGRAMS } from '../data/uvtData';

export default function AdmissionContact({ selectedProgram }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: selectedProgram || 'Ingeniería Petrolera',
    modality: 'Escolarizada',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedProgram) {
      setFormData((prev) => ({ ...prev, program: selectedProgram }));
    }
  }, [selectedProgram]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="admision" className="py-10 sm:py-14 bg-[#F6F8FB] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 grid lg:grid-cols-12">
          {/* Columna izquierda: Panel institucional azul marino con lista limpia (sin cajitas) */}
          <div className="lg:col-span-5 bg-uvt-navy text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-uvt-gold mb-2">
                Admisión Enero 2027
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Da el siguiente paso en tu futuro profesional
              </h2>
              <p className="text-slate-300 mt-3 text-sm leading-relaxed">
                Déjanos tus datos y un asesor académico de la UVT te enviará el plan de estudios,
                costos, requisitos y becas disponibles.
              </p>
            </div>

            <div className="mt-8 divide-y divide-white/10 border-t border-white/10">
              <div className="py-4 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-uvt-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Campus Paraíso
                  </p>
                  <p className="text-sm text-white mt-0.5">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="py-4 grid sm:grid-cols-2 gap-4">
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="flex items-start gap-3 hover:text-uvt-gold transition-colors"
                >
                  <Phone className="w-5 h-5 text-uvt-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Teléfono
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {CONTACT_INFO.phoneDisplay}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-3 hover:text-uvt-gold transition-colors min-w-0"
                >
                  <Mail className="w-5 h-5 text-uvt-gold shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Correo
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5 truncate">
                      {CONTACT_INFO.email}
                    </p>
                  </div>
                </a>
              </div>

              <div className="pt-4 flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-uvt-gold shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Horario de Atención
                  </p>
                  <p className="text-sm text-white mt-0.5">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha: Formulario limpio integrado */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-white flex flex-col justify-center">
            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="font-display text-2xl font-bold text-uvt-navy">
                  ¡Solicitud registrada con éxito!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Gracias, <strong>{formData.name}</strong>. Un asesor de Admisiones UVT se pondrá
                  en contacto contigo a la brevedad con la información de{' '}
                  <strong>{formData.program}</strong> ({formData.modality}).
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                      `Hola UVT, soy ${formData.name} y me interesa información sobre ${formData.program} (${formData.modality}).`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Continuar por WhatsApp
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-uvt-navy">
                      Solicita información e inscripción
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Respuesta rápida en menos de 24 horas hábiles.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                    Inscripción Gratis*
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="uvt-name"
                      className="block text-xs font-bold text-uvt-navy mb-1.5"
                    >
                      Nombre completo *
                    </label>
                    <input
                      id="uvt-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Andrea Pérez López"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-uvt-navy focus:ring-2 focus:ring-uvt-navy/15 outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="uvt-phone"
                      className="block text-xs font-bold text-uvt-navy mb-1.5"
                    >
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      id="uvt-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="933 000 0000"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-uvt-navy focus:ring-2 focus:ring-uvt-navy/15 outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="uvt-email"
                      className="block text-xs font-bold text-uvt-navy mb-1.5"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      id="uvt-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-uvt-navy focus:ring-2 focus:ring-uvt-navy/15 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="uvt-program"
                      className="block text-xs font-bold text-uvt-navy mb-1.5"
                    >
                      Programa de interés *
                    </label>
                    <select
                      id="uvt-program"
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-uvt-navy focus:ring-2 focus:ring-uvt-navy/15 outline-none text-sm"
                    >
                      <option value="Preparatoria Abierta (1 año 2 meses)">
                        Preparatoria Abierta (14 meses)
                      </option>
                      {PROGRAMS.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                      <option value="Maestría en Ingeniería Petrolera">
                        Maestría en Ing. Petrolera
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="uvt-modality"
                      className="block text-xs font-bold text-uvt-navy mb-1.5"
                    >
                      Modalidad preferida
                    </label>
                    <select
                      id="uvt-modality"
                      value={formData.modality}
                      onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-uvt-navy focus:ring-2 focus:ring-uvt-navy/15 outline-none text-sm"
                    >
                      <option value="Escolarizada">Escolarizada</option>
                      <option value="Sabatina">Sabatina</option>
                      <option value="Por definir">Por definir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="uvt-msg"
                    className="block text-xs font-bold text-uvt-navy mb-1.5"
                  >
                    Mensaje o duda (opcional)
                  </label>
                  <textarea
                    id="uvt-msg"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Pregunta por becas por convenio, horarios o requisitos de ingreso..."
                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50/70 border border-slate-200 focus:bg-white focus:border-uvt-navy focus:ring-2 focus:ring-uvt-navy/15 outline-none text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-uvt-gold hover:bg-amber-400 text-uvt-navy-dark font-extrabold py-3.5 px-6 rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitud de Admisión</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

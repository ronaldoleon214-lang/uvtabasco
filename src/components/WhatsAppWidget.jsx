import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/uvtData';

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-display font-bold text-sm">Admisiones UVT</p>
              <p className="text-[11px] text-emerald-100">En línea · Respuesta rápida</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-lg hover:bg-white/15 cursor-pointer"
              aria-label="Cerrar chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200/80 text-xs text-slate-700 shadow-xs">
              ¡Hola! Bienvenido a la Universidad Vasconcelos de Tabasco. ¿En qué podemos ayudarte?
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(
                'Hola UVT, me gustaría recibir información sobre inscripciones y carreras.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Abrir chat en WhatsApp</span>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Contactar por WhatsApp"
        className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/25 flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}

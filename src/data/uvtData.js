export const CONTACT_INFO = {
  brand: 'UVT',
  fullName: 'Universidad Vasconcelos de Tabasco',
  subtitle: 'Secundaria · Bachillerato · Universidad',
  email: 'difusion@uvtabasco.edu.mx',
  phoneDisplay: '933 137 0077',
  phoneRaw: '529331370077',
  address: 'Calle Guayacán N° 202, Col. Quintín Arauz, Paraíso, Tabasco. C.P. 86608',
  shortLocation: 'Paraíso, Tabasco',
  hours: 'Lun – Vie 8:00 a 19:00 · Sáb 8:00 a 15:00',
  socials: {
    facebook: 'https://www.facebook.com/UVTmx',
    instagram: 'https://www.instagram.com/uvt_mx/',
    youtube: 'https://www.youtube.com/@uvttabasco',
  },
};

export const EDUCATION_LEVELS = [
  {
    id: 'prepa',
    tag: 'Nivel Medio Superior',
    title: 'Preparatoria Abierta',
    highlight: 'Concluye en 1 año 2 meses',
    description:
      'Termina tu bachillerato con horarios flexibles, asesorías personalizadas y validez oficial SEP para ingresar de inmediato a la universidad.',
    features: ['Validez oficial SEP', 'Horarios flexibles', 'Asesoría académica continua'],
    accent: 'from-amber-500 to-amber-600',
    badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
    targetSection: '#admision',
    ctaLabel: 'Iniciar Prepa Abierta',
  },
  {
    id: 'carreras',
    tag: 'Nivel Superior',
    title: 'Licenciaturas e Ingenierías',
    highlight: '8 Programas con RVOE SEP',
    description:
      'Formación sólida y práctica orientada al sector energético, industrial, jurídico, empresarial, educativo y de salud en Tabasco.',
    features: ['4 Ingenierías estratégicas', '4 Licenciaturas de alta demanda', 'Prácticas y convenios reales'],
    accent: 'from-[#0B2559] to-[#0057B8]',
    badgeBg: 'bg-blue-50 text-[#0B2559] border-blue-200',
    targetSection: '#carreras',
    ctaLabel: 'Explorar Carreras',
  },
  {
    id: 'maestrias',
    tag: 'Posgrados UVT',
    title: 'Maestrías Ejecutivas',
    highlight: 'Incluye Maestría en Ing. Petrolera',
    description:
      'Especializa tu perfil directivo y técnico con posgrados diseñados para profesionistas en activo y líderes del sector.',
    features: ['Modalidad ejecutiva', 'Docentes con experiencia en campo', 'Titulación ágil'],
    accent: 'from-[#0057B8] to-[#009FE3]',
    badgeBg: 'bg-sky-50 text-sky-900 border-sky-200',
    targetSection: '#admision',
    ctaLabel: 'Solicitar Plan de Estudios',
  },
];

export const PROGRAMS = [
  {
    id: 'ing-petrolera',
    category: 'ingenierias',
    categoryLabel: 'Ingeniería',
    title: 'Ingeniería Petrolera',
    emblem: '/assets/escudo-3.jpg',
    shortDesc:
      'Domina la exploración, perforación y producción de hidrocarburos con enfoque en seguridad operativa y eficiencia energética.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Análisis de yacimientos y perforación',
      'Seguridad industrial en instalaciones petroleras',
      'Vinculación con el sector energético de Tabasco',
    ],
  },
  {
    id: 'ing-industrial',
    category: 'ingenierias',
    categoryLabel: 'Ingeniería',
    title: 'Ingeniería Industrial',
    emblem: '/assets/escudo-5.jpg',
    shortDesc:
      'Optimiza procesos productivos, cadenas de suministro, calidad y gestión de operaciones en empresas de alto rendimiento.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Control de calidad y manufactura esbelta',
      'Gestión de proyectos y productividad',
      'Seguridad e higiene industrial',
    ],
  },
  {
    id: 'ing-ambiental',
    category: 'ingenierias',
    categoryLabel: 'Ingeniería',
    title: 'Ingeniería Ambiental y Desarrollo Sustentable',
    emblem: '/assets/escudo-4.jpg',
    shortDesc:
      'Diseña soluciones para el manejo de recursos naturales, mitigación de impacto ambiental y normatividad ecológica vigente.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Evaluación de impacto y auditoría ambiental',
      'Tratamiento de aguas y manejo de residuos',
      'Proyectos de desarrollo sustentable',
    ],
  },
  {
    id: 'ing-logistica',
    category: 'ingenierias',
    categoryLabel: 'Ingeniería',
    title: 'Ing. en Logística y Seguridad del Sector Energético',
    emblem: '/assets/escudo-7.jpg',
    shortDesc:
      'Especialízate en transporte, almacenamiento, normativa de seguridad y continuidad operativa para la industria energética y portuaria.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Logística portuaria y cadena de suministro',
      'Protocolos de seguridad y prevención de riesgos',
      'Alta demanda en zona costa e industrial',
    ],
  },
  {
    id: 'lic-administracion',
    category: 'licenciaturas',
    categoryLabel: 'Licenciatura',
    title: 'Lic. en Administración de Empresas',
    emblem: '/assets/escudo-admin.jpg',
    shortDesc:
      'Lidera organizaciones mediante estrategias financieras, talento humano, mercadotecnia y toma de decisiones basada en datos.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Planeación estratégica y finanzas corporativas',
      'Gestión del talento y liderazgo organizacional',
      'Emprendimiento y desarrollo de negocios',
    ],
  },
  {
    id: 'lic-derecho',
    category: 'licenciaturas',
    categoryLabel: 'Licenciatura',
    title: 'Lic. en Derecho y Juicios Orales',
    emblem: '/assets/escudo-6.jpg',
    shortDesc:
      'Fórmate con dominio sólido en litigación oral, derecho corporativo, laboral, civil y constitucional con práctica en audiencias.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Técnicas de litigación en juicios orales',
      'Derecho energético, laboral y mercantil',
      'Práctica jurídica desde los primeros ciclos',
    ],
  },
  {
    id: 'lic-psicopedagogia',
    category: 'licenciaturas',
    categoryLabel: 'Licenciatura',
    title: 'Lic. en Psicopedagogía',
    emblem: '/assets/escudo-2.jpg',
    shortDesc:
      'Evalúa e interviene en procesos de aprendizaje, orientación educativa y desarrollo humano en entornos escolares y organizacionales.',
    duration: '9 Cuatrimestres',
    modality: 'Escolarizada / Sabatina',
    highlights: [
      'Diagnóstico e intervención psicopedagógica',
      'Diseño curricular y educación inclusiva',
      'Orientación vocacional y desarrollo humano',
    ],
  },
  {
    id: 'lic-enfermeria',
    category: 'licenciaturas',
    categoryLabel: 'Licenciatura',
    title: 'Lic. en Enfermería',
    emblem: '/assets/escudo-enfermeria.jpg',
    shortDesc:
      'Brinda atención integral de salud con rigor clínico, ética profesional y prácticas supervisadas en instituciones médicas.',
    duration: '8 Semestres + Servicio',
    modality: 'Escolarizada',
    highlights: [
      'Cuidado clínico, quirúrgico y comunitario',
      'Prácticas en campos clínicos e instituciones',
      'Vocación de servicio y ética sanitaria',
    ],
  },
];

export const SERVICES = [
  {
    title: 'Servicio Social',
    description:
      'Acompañamiento integral para liberar tu servicio social en dependencias públicas e instituciones de impacto comunitario.',
    iconName: 'Handshake',
  },
  {
    title: 'Seguimiento a Egresados',
    description:
      'Red activa de vinculación laboral, actualización profesional y bolsa de trabajo con empresas de la región.',
    iconName: 'UserCheck',
  },
  {
    title: 'Convenios con Empresas',
    description:
      'Alianzas estratégicas para residencias profesionales, prácticas y becas de capacitación en el sector productivo.',
    iconName: 'Building2',
  },
  {
    title: 'Convenios Educativos',
    description:
      'Acuerdos interinstitucionales que fortalecen el intercambio académico, certificaciones y beneficios para nuestra comunidad.',
    iconName: 'GraduationCap',
  },
];

export const PARTNERS = [
  { name: 'PEMEX', sector: 'Sector Energético', logo: '/assets/convenio-pemex.png' },
  { name: 'ISSSTE Tabasco', sector: 'Sector Salud', logo: '/assets/convenio-issste.jpg' },
  { name: 'APPISA', sector: 'Industria y Servicios', logo: '/assets/convenio-2.jpg' },
  { name: 'IFORTAB', sector: 'Formación para el Trabajo', logo: '/assets/convenio-1.jpg' },
  { name: 'DAMC', sector: 'Vinculación Académica', logo: '/assets/convenio-damc.png' },
];

export const ECOSYSTEM_CARDS = [
  {
    id: 'biblioteca',
    title: 'Biblioteca Virtual',
    description:
      'Acceso 24/7 a acervos digitales, libros especializados y bases de datos académicas desde cualquier lugar.',
    badge: 'Recurso Digital',
    action: 'Explorar acervo',
    href: 'https://uvtabasco.edu.mx/bibliotecavirtual/',
  },
  {
    id: 'eventos',
    title: 'Eventos UVT',
    description:
      'Congresos, ferias de empleabilidad, jornadas académicas y celebraciones de nuestra comunidad universitaria.',
    badge: 'Agenda 2026–2027',
    action: 'Ver calendario',
    href: 'https://uvtabasco.edu.mx/eventos/',
  },
  {
    id: 'cedar',
    title: 'Grupo Educativo CEDAR',
    description:
      'Formamos parte de un ecosistema educativo sólido desde secundaria y bachillerato hasta nivel superior.',
    badge: '¡Conócenos!',
    action: 'Más información',
    href: 'https://uvtabasco.edu.mx/nosotros/',
  },
  {
    id: 'seaes',
    title: 'Evaluación SEAES',
    description:
      'Comprometidos con la mejora continua y la calidad educativa bajo los estándares del Sistema de Evaluación.',
    badge: 'Calidad Educativa',
    action: 'Consultar SEAES',
    href: 'https://uvtabasco.edu.mx/seaes/',
  },
  {
    id: 'encuesta',
    title: 'Encuesta a Empleadores',
    description:
      'Espacio de retroalimentación para empresas e instituciones aliadas sobre el desempeño de nuestros egresados.',
    badge: 'Vinculación',
    action: 'Responder encuesta',
    href: '#admision',
  },
];

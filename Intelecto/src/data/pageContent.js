import { createElement } from "react"
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa"
import {
  BadgeCheck,
  Flag,
  HandCoins,
  UserRoundCog,
  UserRoundCheck,
  RefreshCw,
  Target,
  Eye,
  Star,
  BookSearch,
  Palette,
  CircleFadingArrowUp,
  ListCheck,
  Gauge,
  Compass,
  Heart,
  Shield,
  Zap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/trabajo", label: "Trabajo" },
  { to: "/contacto", label: "Contacto" },
]

export const homeStats = [
  { num: 250, label: "Horas de mentoría" },
  { num: 72, label: "Proyectos apoyados" },
  { num: 18, label: "Empresas transformadas" },
]

export const homeServices = [
  {
    icon: "◈",
    title: "Consultoría Estratégica",
    desc: "Transformamos la visión de tu organización en resultados medibles con metodologías de clase mundial.",
  },
  {
    icon: "◇",
    title: "Capacitación Especializada",
    desc: "Programas de formación diseñados a la medida para elevar el capital humano de tu empresa.",
  },
  {
    icon: "◉",
    title: "Sistemas de Gestión",
    desc: "Diseño e implementación de sistemas que optimizan procesos y certifican excelencia operacional.",
  },
]

export const contactSocials = [
  {
    icon: createElement(FaWhatsapp, { size: 20 }),
    label: "WhatsApp",
    value: "+52 492 126 5536",
    href: "https://wa.me/+524921265536",
    accent: "#22c55e",
    desc: "Respuesta inmediata",
  },
  {
    icon: createElement(FaFacebookF, { size: 20 }),
    label: "Facebook",
    value: "Intelecto Zacatecas",
    href: "https://www.facebook.com/intelecto.zacatecas",
    accent: "#3b82f6",
    desc: "Contenido adicional y noticias",
  },
  {
    icon: createElement(FaInstagram, { size: 20 }),
    label: "Instagram",
    value: "@intelecto2024",
    href: "https://www.instagram.com/intelecto2024/",
    accent: "#ec4899",
    desc: "Síguenos",
  },
  {
    icon: createElement(FaEnvelope, { size: 20 }),
    label: "Correo",
    value: "intelectomx@intelectomx.com.mx",
    href: "mailto:intelectomx@intelectomx.com.mx",
    accent: "#f59e0b",
    desc: "Respuesta en 24h",
  },
]

export const contactInfo = [
  { icon: createElement(MapPin, { size: 16 }), label: "Ubicación", value: "Zacatecas, México" },
  { icon: createElement(Phone, { size: 16 }), label: "Teléfono", value: "+52 492 126 5536" },
  { icon: createElement(Mail, { size: 16 }), label: "Email", value: "intelectomx@intelectomx.com.mx" },
]

export const mvvCards = [
  {
    icon: createElement(BadgeCheck, { size: 22 }),
    label: "Programas que conectan visión, estrategia y ejecución.",
    title: "Saber hacia dónde ir",
    accent: "#3b82f6",
    modalContent: {
      intro: "Conecta visión, estrategia y acción.",
      openingStatement: "Programas que conectan visión, estrategia y ejecución.",
      points: [
        { title: "Planeación estratégica." },
        { title: "Alineación estratégica con Hoshin Kanri." },
        { title: "Gobierno Corporativo." },
        { title: "Profesionalización de empresas (MIPYMES)." },
        { title: "5´S para disciplina operativa." },
      ],
      closingStatement: "Alineamos a toda la organización hacia objetivos claros, medibles y ejecutables.",
    },
  },
  {
    icon: createElement(Flag, { size: 22 }),
    label: "Liderazgo.",
    title: "Movilizar personas a resultados extraordinarios",
    accent: "#6366f1",
    modalContent: {
      intro: "Desarrolla un liderazgo transformador que inspire, movilice y potencie a tus equipos.",
      openingStatement: "Programas para formar líderes que generan resultados",
      points: [
        { title: "Huella de líder." },
        { title: "Mandos medios accionando con impacto." },
        { title: "Supervisores que inspiran acción." },
      ],
      closingStatement: "Desarrollamos líderes que no solo dirigen, sino que movilizan, inspiran y generan resultados sostenibles.",
    },
  },
  {
    icon: createElement(HandCoins, { size: 22 }),
    label: "Cultura organizacional.",
    title: "Como realmente se trabaja",
    accent: "#a78bfa",
    modalContent: {
      intro: "Conecta al colaborador con su propósito y rol dentro de la organización para generar compromiso y responsabilidad.",
      openingStatement: "Programas:",
      points: [
        { title: "Conciencia laboral." },
        { title: "Cultura de servicio al cliente." },
        { title: "NOM-035 bienestar." },
        { title: "Comunicación efectiva." },
      ],
      closingStatement: "Programa de cultura y experiencia del colaborador diferenciador: no es clima... es comportamiento organizacional.",
    },
  },
  {
    icon: createElement(UserRoundCog, { size: 22 }),
    label: "Gestión de talento.",
    title: "Personas que hacen la diferencia",
    accent: "#a78bfa",
    modalContent: {
      intro: "Herramientas prácticas para atraer, formar y retener a las personas clave para el éxito de tu organización.",
      openingStatement: "Personas correctas, en el lugar correcto, haciendo lo correcto.",
      points: [
        { title: "Gestión por competencias." },
        { title: "Desarrollo de capital humano." },
        { title: "Cumplimiento legal en capacitación." },
        { title: "Formación de instructores." },
      ],
      closingStatement: "Sistema Integral de gestión del talento diferenciador: No es RH... es comportamiento organizacional.",
    },
  },
  {
    icon: createElement(UserRoundCheck, { size: 22 }),
    label: "Excelencia operativa.",
    title: "Hacerlo bien, todo el tiempo",
    accent: "#a78bfa",
    modalContent: {
      intro: "Optimizamos procesos, estandarizamos prácticas y promovemos la mejora continua para lograr eficiencia, calidad y consistencia en la operación.",
      openingStatement: "Hacerlo bien, todo el tiempo.",
      points: [
        { title: "Interpretación de la norma", desc: "ISO 9001" },
        { title: "Auditorías", desc: "ISO 19011" },
        { title: "Mejora continua." },
        { title: "Seguridad.", desc: "KYT, comportamientos seguros" },
      ],
      closingStatement: "Programa de Excelencia Operativa y Cumplimiento Diferenciador: No es cumplir normas… es operar con disciplina y consistencia..",
    },
  },
  {
    icon: createElement(RefreshCw, { size: 22 }),
    label: "Compliance 360°.",
    title: "Diseñamos e implementamos Sistemas Integrales de Cumplimiento, Ética y Gestión de Riesgos.",
    accent: "#a78bfa",
    modalContent: {
      intro: "Alineando a estándares internacionales; que te permiten:",
      points: [
        { title: "Cumplimiento proporcional al tamaño de tu empresa." },
        { title: "Cumplir con auditorías y requerimientos de clientes." },
        { title: "Proteger la continuidad de tus contratos, sin distraer a tu equipo operativo." },
        { title: "Reducir riesgos legales." },
      ],
      closingStatement: "Un sistema integral de cumplimiento que te permite operar con confianza y asegurar contratos estratégicos.",
    },
  },
]

export const aboutValues = [
  {
    icon: createElement(Heart, { size: 18 }),
    title: "Compromiso",
    text: "Nos involucramos con la realidad de cada cliente, adaptando soluciones genuinas a sus necesidades.",
  },
  {
    icon: createElement(Shield, { size: 18 }),
    title: "Integridad",
    text: "Actuamos con transparencia y honestidad en cada etapa del proceso, sin importar las circunstancias.",
  },
  {
    icon: createElement(Zap, { size: 18 }),
    title: "Excelencia",
    text: "Buscamos superar expectativas en cada proyecto, entregando resultados que marcan diferencia.",
  },
  {
    icon: createElement(Compass, { size: 18 }),
    title: "Innovación",
    text: "Adoptamos nuevas metodologías y herramientas para ofrecer soluciones a la vanguardia.",
  },
]

export const workSteps = [
  {
    icon: createElement(BookSearch, { size: 22 }),
    label: "I",
    title: "Diagnóstico",
    accent: "#0077b6",
    modalContent: {
      intro: "Nuestra misión es el corazón de todo lo que hacemos.",
      points: [
        { title: "Analizamos a profundidad la organización desde cinco dimensiones clave: estrategia, liderazgo, cultura, talento y operación. Identificamos brechas críticas, riesgos y oportunidades reales de mejora.." },
      ],
      closingStatement: "Claridad estratégica sobre qué cambiar, por qué y con qué impacto.",
    },
  },
  {
    icon: createElement(Palette, { size: 22 }),
    label: "II",
    title: "Diseño",
    accent: "#00b4d8",
    modalContent: {
      intro: "Diseñamos soluciones a la medida, no aplicamos fórmulas genéricas.",
      points: [
        { title: "Traducimos el diagnóstico en un modelo de intervención a la medida. Definimos soluciones integrales que pueden incluir rediseño organizacional, sistemas de gestión, procesos y programas de desarrollo." },
      ],
      closingStatement: "Una ruta clara, estructurada y alineada a resultados de negocio.",
    },
  },
  {
    icon: createElement(CircleFadingArrowUp, { size: 22 }),
    label: "III",
    title: "Desarrollo",
    accent: "#0096c7",
    modalContent: {
      intro: "Construimos los elementos necesarios para ejecutar la transformación:",
      points: [
        { title: "Modelos de trabajo" },
        { title: "Procesos y políticas", desc: "Actuamos con ética, promoviendo culturas basadas en cumplimiento y responsabilidad." },
        { title: "Herramientas de gestión" },
        { title: "Programas de capacitación y desarrollo del talento" },
      ],
      closingStatement: "Soluciones totalmente adaptadas y listas para implementarse.",
    },
  },
  {
    icon: createElement(ListCheck, { size: 22 }),
    label: "IV",
    title: "Implementación",
    accent: "#0077b6",
    modalContent: {
      intro: "Acompañamos a la organización en la ejecución. No solo capacitamos: intervenimos en la operación para asegurar adopción, disciplina y cambio de comportamiento.",
      points: [
        { title: "Programas ejecutivos", desc: "Procesos estructurados de desarrollo alineados a objetivos estratégicos, dirigidos a líderes y equipos clave." },
        { title: "Talleres de alto impacto", desc: "Sesiones dinámicas y prácticas enfocadas en generar conciencia y acción inmediata." },
        { title: "Programas de desarrollo humano y liderazgo personal:", desc: "Mujeres líderes en armonía. Domina tu agenda, transforma tu vida. Emprendimiento y profesionalización." },
        { title: "Acompañamiento en campo", desc: "Intervención directa en la operación para asegurar la correcta aplicación de procesos y herramientas." },
        { title: "Coaching a líderes", desc: "Proceso personalizado para fortalecer habilidades de liderazgo, toma de decisiones y gestión de equipos." },
        { title: "Implementación de sistemas.", desc: "Diseño y puesta en marcha de modelos, procesos y herramientas que aseguran orden, cumplimiento y resultados sostenibles." },
      ],
      closingStatement: "Cambios visibles en la forma de trabajar, liderar y operar.",
    },
  },
  {
    icon: createElement(Gauge, { size: 22 }),
    label: "V",
    title: "Medición",
    accent: "#0077b6",
    modalContent: {
      intro: "Medimos el impacto real de la transformación, no solo indicadores superficiales.",
      points: [
        { title: "Establecemos indicadores claros para evaluar resultados y dar seguimiento continuo. Ajustamos la estrategia para asegurar sostenibilidad." },
      ],
      closingStatement: "Impacto medible en desempeño, cultura y resultados organizacionales.",
    },
  },
]

export const catalogItems = [
  { id: 1, title: "Incubación de Negocios", categoria: "Consultoría", tag: "Estrategia", accent: "#3b82f6" },
  { id: 2, title: "Liderazgo Empresarial", categoria: "Capacitación", tag: "Capital Humano", accent: "#6366f1" },
  { id: 3, title: "ISO 9001:2015", categoria: "Gestión", tag: "Certificación", accent: "#a78bfa" },
  { id: 4, title: "Desarrollo Organizacional", categoria: "Consultoría", tag: "Cultura", accent: "#3b82f6" },
  { id: 5, title: "Habilidades Directivas", categoria: "Capacitación", tag: "Formación", accent: "#6366f1" },
  { id: 6, title: "Mejora Continua", categoria: "Gestión", tag: "Procesos", accent: "#a78bfa" },
  { id: 7, title: "Planeación Estratégica", categoria: "Consultoría", tag: "Estrategia", accent: "#3b82f6" },
  { id: 8, title: "Clima Laboral", categoria: "Capacitación", tag: "Bienestar", accent: "#6366f1" },
  { id: 9, title: "Auditorías Internas", categoria: "Gestión", tag: "Calidad", accent: "#a78bfa" },
]

export const footerLinks = [
  {
    title: "Empresa",
    items: [
      { label: "Inicio", to: "/" },
      { label: "Nosotros", to: "/nosotros" },
    ],
  },
  {
    title: "Servicios",
    items: [
      { label: "Consultoría", to: "/servicios" },
      { label: "Capacitación", to: "/servicios" },
      { label: "Gestión", to: "/servicios" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { label: "intelectomx@intelectomx.com.mx", to: "/contacto" },
      { label: "+52 492 126 5536", to: null },
      { label: "Zacatecas, México", to: null },
    ],
  },
]

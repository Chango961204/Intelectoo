const SITE_URL = import.meta.env.VITE_SITE_URL ?? "https://intelectomx.com.mx"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Intelecto MX",
  "url": SITE_URL,
  "logo": `${SITE_URL}/circle.png`,
  "sameAs": [
    "https://www.facebook.com/intelecto.zacatecas",
    "https://www.instagram.com/intelecto2024/",
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+52 492 126 5536",
      "email": "intelectomx@intelectomx.com.mx",
      "areaServed": "MX",
      "availableLanguage": ["Spanish"]
    }
  ]
}

export const siteMeta = {
  home: {
    title: "Consultoría Empresarial en Zacatecas | Intelecto MX",
    description:
      "Intelecto MX ofrece consultoría empresarial y capacitación para transformar organizaciones con liderazgo, cultura y sistemas de gestión en Zacatecas.",
    pathname: "/",
    schema: organizationSchema,
  },
  servicios: {
    title: "Servicios de Consultoría y Capacitación | Intelecto MX",
    description:
      "Explora los servicios de Intelecto MX: consultoría estratégica, capacitación, sistemas de gestión, gestión del talento y cumplimiento 360°.",
    pathname: "/servicios",
    schema: organizationSchema,
  },
  nosotros: {
    title: "Nosotros | Intelecto MX",
    description:
      "Conoce al equipo de Intelecto MX, especialistas en transformación organizacional, liderazgo y cultura empresarial en Zacatecas.",
    pathname: "/nosotros",
    schema: organizationSchema,
  },
  catalogo: {
    title: "Catálogo de Soluciones | Intelecto MX",
    description:
      "Descubre el catálogo de programas de consultoría, capacitación y gestión de talento para mejorar la productividad y el clima organizacional.",
    pathname: "/catalogo",
    schema: organizationSchema,
  },
  contacto: {
    title: "Contacto | Intelecto MX",
    description:
      "Agenda una asesoría, solicita un diagnóstico o contáctanos por WhatsApp con Intelecto MX para impulsar tu proyecto empresarial.",
    pathname: "/contacto",
    schema: organizationSchema,
  },
  misionVision: {
    title: "Misión y Visión | Intelecto MX",
    description:
      "Conoce la misión, visión y valores de Intelecto MX, orientados a la transformación sostenible de organizaciones.",
    pathname: "/mision-vision",
    schema: organizationSchema,
  },
  trabajo: {
    title: "Cómo Trabajamos | Intelecto MX",
    description:
      "Descubre el proceso de trabajo de Intelecto MX: diagnóstico, diseño, desarrollo, implementación y medición de resultados.",
    pathname: "/trabajo",
    schema: organizationSchema,
  },
}

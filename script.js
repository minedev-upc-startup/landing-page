/* ============================================================
   MineTrack Landing — Internationalization (EN / ES)
   Vanilla JS, no frameworks. Persists choice in localStorage.
   ============================================================ */

const translations = {
  es: {
    "nav.about": "Sobre nosotros",
    "nav.how": "¿Cómo funciona?",
    "nav.features": "Características",
    "nav.plans": "Planes",
    "nav.team": "Equipo",
    "nav.faq": "FAQ",

    "hero.title": "Alquiler inteligente de maquinaria minera",
    "hero.subtitle":
      "La plataforma B2B que conecta propietarios de maquinaria pesada con empresas mineras que necesitan equipos. Sin intermediarios complicados, sin papeleo manual.",
    "hero.ctaOwner": "Soy propietario",
    "hero.ctaClient": "Soy empresa minera",

    "about.title": "Sobre nosotros",
    "about.body":
      "MineTrack nace de una necesidad real en el sector minero peruano: la dificultad de conectar propietarios de maquinaria pesada con empresas que necesitan alquilarla. Centralizamos catálogo, solicitudes, contratos y monitoreo IoT en una sola plataforma.",

    "how.title": "¿Cómo funciona?",
    "how.ownerLabel": "Para propietarios",
    "how.owner1":
      "Registra tus máquinas con fotos, especificaciones y tarifa por hora.",
    "how.owner2":
      "Recibe solicitudes de alquiler de empresas mineras verificadas.",
    "how.owner3":
      "Aprueba o rechaza con un clic. Define disponibilidad y reglas.",
    "how.owner4": "Cobra por horas reales operadas, no por días calendario.",
    "how.clientLabel": "Para empresas mineras",
    "how.client1":
      "Navega el catálogo público con filtros por tipo, marca y rango de precio.",
    "how.client2": "Solicitará una máquina para un rango de fechas específico.",
    "how.client3": "Recibe aprobación, contrato PDF y código de seguimiento.",
    "how.client4":
      "Monitorea ubicación, horas de motor y estado en tiempo real.",

    "features.title": "Características principales",
    "features.f1Title": "Catálogo centralizado",
    "features.f1Body":
      "Cada máquina con fotos, ficha técnica, tarifa y estado en tiempo real.",
    "features.f2Title": "Contratos automáticos",
    "features.f2Body":
      "PDF generado al aprobar el alquiler con todos los términos congelados.",
    "features.f3Title": "Monitoreo IoT",
    "features.f3Body":
      "GPS, horas de motor, temperatura y vibración — todo en vivo.",
    "features.f4Title": "Facturación por horas",
    "features.f4Body":
      "Cobro automático sobre horas reales operadas, no calendario.",
    "features.f5Title": "Sistema de reputación",
    "features.f5Body": "Reseñas verificadas después de cada alquiler cerrado.",
    "features.f6Title": "Multidioma",
    "features.f6Body": "Disponible en español e inglés desde el día uno.",

    "plans.title": "Planes MineTrack",
    "plans.body":
      "Elige el plan que mejor se adapta a tu operación y escala según tus necesidades.",
    "plans.owner.badge": "Propietarios",
    "plans.owner.title": "Plan Propietario",
    "plans.owner.f1":
      "Publica maquinaria ilimitada con fichas técnicas completas.",
    "plans.owner.f2":
      "Gestiona solicitudes y disponibilidad desde un solo panel.",
    "plans.owner.f3":
      "Recibe pagos y reportes mensuales de uso por equipo.",
    "plans.company.badge": "Empresas mineras",
    "plans.company.title": "Plan Empresa Minera",
    "plans.company.f1":
      "Búsqueda avanzada y matching prioritario por zona y tipo de equipo.",
    "plans.company.f2":
      "Flujos de aprobación interna y contratos automatizados.",
    "plans.company.f3":
      "Dashboard operativo con métricas de uso, costo y productividad.",
    "plans.perMonth": "/ mes",
    "plans.cta": "Elegir plan",

    "team.title": "Nuestro equipo",
    "team.body":
      "Estudiantes de Ingeniería de Software de la UPC, construyendo MineTrack como proyecto del curso Aplicaciones Web (1ASI0730).",
    "team.role.lead": "Tech Lead / Arquitectura",
    "team.role.frontend": "Frontend developer",
    "team.photoPending": "Foto",
    "team.role.catalog": "Catálogo",
    "team.role.rentals": "Proceso de Alquiler",
    "team.role.iot": "IoT / Monitoreo",

    "faq.title": "Preguntas frecuentes",
    "faq.q1": "¿MineTrack cobra comisión por alquiler?",
    "faq.a1":
      "En esta primera versión no hay comisiones. El modelo de monetización se definirá en próximas iteraciones del producto.",
    "faq.q2": "¿Necesito tener dispositivos IoT instalados en mis máquinas?",
    "faq.a2":
      "No es obligatorio. Las funcionalidades de monitoreo IoT son opcionales y se activan por máquina cuando el dispositivo esté instalado.",
    "faq.q3": "¿Cómo se calcula el costo final del alquiler?",
    "faq.a3":
      "El costo se calcula sobre horas operadas reales (medidas por el horómetro), con un mínimo diario garantizado para el propietario. Tarifas se congelan al momento de aprobación.",
    "faq.q4": "¿En qué regiones del Perú opera MineTrack?",
    "faq.a4":
      "Iniciamos operaciones piloto en las zonas mineras de Arequipa, Cajamarca y Junín, con expansión prevista a todo el territorio nacional.",

    "cta.title": "¿Listo para empezar?",
    "cta.body":
      "Únete a la red de propietarios y empresas mineras que ya están usando MineTrack.",
    "cta.access": "Acceder a la plataforma",
    "cta.contact": "Contáctanos",

    "footer.tagline": "Alquiler inteligente de maquinaria minera",
    "footer.contactTitle": "Contacto",
    "footer.socialTitle": "Síguenos",
    "footer.rights": "Todos los derechos reservados.",
    "footer.course": "UPC — 1ASI0730 Aplicaciones Web — Ciclo 5 — 2026-1",
  },

  en: {
    "nav.about": "About",
    "nav.how": "How it works",
    "nav.features": "Features",
    "nav.plans": "Plans",
    "nav.team": "Team",
    "nav.faq": "FAQ",

    "hero.title": "Smart rental of mining machinery",
    "hero.subtitle":
      "The B2B platform that connects heavy machinery owners with mining companies that need equipment. No complicated middlemen, no manual paperwork.",
    "hero.ctaOwner": "I'm an owner",
    "hero.ctaClient": "I'm a mining company",

    "about.title": "About us",
    "about.body":
      "MineTrack was born from a real need in the Peruvian mining sector: the difficulty of connecting heavy machinery owners with companies that need to rent them. We centralize catalog, requests, contracts and IoT monitoring in a single platform.",

    "how.title": "How does it work?",
    "how.ownerLabel": "For owners",
    "how.owner1":
      "Register your machines with photos, specifications and hourly rate.",
    "how.owner2": "Receive rental requests from verified mining companies.",
    "how.owner3":
      "Approve or reject with one click. Define availability and rules.",
    "how.owner4": "Charge by real operated hours, not by calendar days.",
    "how.clientLabel": "For mining companies",
    "how.client1":
      "Browse the public catalog with filters by type, brand and price range.",
    "how.client2": "Request a machine for a specific date range.",
    "how.client3": "Receive approval, PDF contract and tracking code.",
    "how.client4": "Monitor location, engine hours and status in real time.",

    "features.title": "Main features",
    "features.f1Title": "Centralized catalog",
    "features.f1Body":
      "Each machine with photos, technical sheet, rate and real-time status.",
    "features.f2Title": "Automatic contracts",
    "features.f2Body":
      "PDF generated when the rental is approved, with all terms frozen.",
    "features.f3Title": "IoT monitoring",
    "features.f3Body":
      "GPS, engine hours, temperature and vibration — all live.",
    "features.f4Title": "Hourly billing",
    "features.f4Body":
      "Automatic charging on real operated hours, not calendar days.",
    "features.f5Title": "Reputation system",
    "features.f5Body": "Verified reviews after each closed rental.",
    "features.f6Title": "Multilanguage",
    "features.f6Body": "Available in Spanish and English from day one.",

    "plans.title": "MineTrack plans",
    "plans.body":
      "Choose the plan that best fits your operation and scale as your needs grow.",
    "plans.owner.badge": "Owners",
    "plans.owner.title": "Owner plan",
    "plans.owner.f1":
      "Publish unlimited machinery with complete technical sheets.",
    "plans.owner.f2":
      "Manage requests and availability from a single dashboard.",
    "plans.owner.f3": "Receive payments and monthly equipment usage reports.",
    "plans.company.badge": "Mining companies",
    "plans.company.title": "Mining company plan",
    "plans.company.f1":
      "Advanced search and priority matching by location and equipment type.",
    "plans.company.f2":
      "Internal approval flows and automated contract generation.",
    "plans.company.f3":
      "Operations dashboard with usage, cost and productivity metrics.",
    "plans.perMonth": "/ month",
    "plans.cta": "Choose plan",

    "team.title": "Our team",
    "team.body":
      "Software Engineering students at UPC, building MineTrack as a project for the Web Applications course (1ASI0730).",
    "team.role.lead": "Tech Lead / Architecture",
    "team.role.frontend": "Frontend developer",
    "team.photoPending": "Photo",
    "team.role.catalog": "Catalog",
    "team.role.rentals": "Rental Process",
    "team.role.iot": "IoT / Monitoring",

    "faq.title": "Frequently asked questions",
    "faq.q1": "Does MineTrack charge commission on rentals?",
    "faq.a1":
      "There are no commissions in this first version. The monetization model will be defined in future product iterations.",
    "faq.q2": "Do I need to have IoT devices installed on my machines?",
    "faq.a2":
      "It's not mandatory. IoT monitoring features are optional and activate per machine when the device is installed.",
    "faq.q3": "How is the final rental cost calculated?",
    "faq.a3":
      "The cost is calculated on real operated hours (measured by the hour meter), with a guaranteed daily minimum for the owner. Rates are frozen at the moment of approval.",
    "faq.q4": "In which regions of Peru does MineTrack operate?",
    "faq.a4":
      "We start pilot operations in the mining areas of Arequipa, Cajamarca and Junín, with planned expansion to the entire national territory.",

    "cta.title": "Ready to start?",
    "cta.body":
      "Join the network of owners and mining companies that are already using MineTrack.",
    "cta.access": "Access the platform",
    "cta.contact": "Contact us",

    "footer.tagline": "Smart rental of mining machinery",
    "footer.contactTitle": "Contact",
    "footer.socialTitle": "Follow us",
    "footer.rights": "All rights reserved.",
    "footer.course": "UPC — 1ASI0730 Web Applications — Cycle 5 — 2026-1",
  },
};

/* ------------------------------------------------------------
   i18n core
   ------------------------------------------------------------ */
function applyLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang]?.[key];
    if (text) el.textContent = text;
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("minetrack.landing.lang", lang);
}

/* ------------------------------------------------------------
   Boot
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("minetrack.landing.lang");
  const browserLang = (navigator.language || "es")
    .toLowerCase()
    .startsWith("en")
    ? "en"
    : "es";
  const initial = savedLang || browserLang;
  applyLanguage(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
});

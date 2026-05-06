import type { CopyData } from '../types/index';

export const COPY: CopyData = {
  en: {
    nav: {
      practice: "Practice Areas",
      team: "Our Team",
      process: "Process",
      stories: "Success Stories",
      contact: "Contact",
      cta: "Free Case Review",
      skip: "Skip to main content",
      home: "Home",
      lang_label: "Language selector",
      open_menu: "Open menu",
      close_menu: "Close menu"
    },
    hero: {
      eyebrow: "Immigration Law — Established 1998",
      title_a: "Your dream.",
      title_b: "Your future.",
      title_c: "Our legal expertise.",
      sub: "We navigate the complexity of the U.S. immigration system so you don't have to. Quietly, carefully, and with the urgency your life deserves.",
      cta_primary: "Evaluate your case — free",
      cta_secondary: "Speak with an attorney",
      stat1_n: "27",
      stat1_l: "Years of practice",
      stat2_n: "94%",
      stat2_l: "Approval rate",
      stat3_n: "62",
      stat3_l: "Countries served"
    },
    trust: {
      label: "Trusted across",
      countries: "Representing clients from 62 countries",
      langs: "Counsel available in English, Spanish & Portuguese",
      member: "AILA Member · State Bar of California",
      since: "Practicing since 1998"
    },
    practice: {
      eyebrow: "What we do",
      title: "Areas of practice",
      sub: "From the first petition to the courtroom, we represent every chapter of your immigration journey.",
      areas: [
        { n: "01", t: "Family Immigration", d: "Petitions, adjustments of status, fiancé(e) visas, and reunification cases. We keep families together — every step documented, every deadline tracked.", tags: ["I-130", "I-485", "K-1", "Consular processing"] },
        { n: "02", t: "Employment Immigration", d: "H-1B, O-1, EB-1, EB-2 NIW, L-1 and PERM. We work alongside HR teams and individual professionals to secure work-based status.", tags: ["H-1B", "O-1", "EB-1", "PERM"] },
        { n: "03", t: "Deportation Defense", d: "Removal proceedings, cancellation of removal, motions to reopen, and appeals to the BIA. When the stakes are highest, we step in.", tags: ["EOIR", "BIA appeals", "Bond hearings"] },
        { n: "04", t: "Asylum & Humanitarian", d: "Affirmative and defensive asylum, withholding of removal, CAT, U-visas, T-visas, and VAWA. Compassionate, trauma-informed advocacy.", tags: ["I-589", "U-visa", "T-visa", "VAWA"] },
        { n: "05", t: "Citizenship & Naturalization", d: "N-400 applications, civics preparation, derivative citizenship, and oath ceremony guidance. The final step, handled with care.", tags: ["N-400", "N-600", "Civics prep"] },
        { n: "06", t: "Investor & Entrepreneur", d: "EB-5, E-2 treaty investor, and L-1 intracompany transferee. Strategic counsel for founders building in the United States.", tags: ["EB-5", "E-2", "L-1A"] }
      ]
    },
    promise: {
      eyebrow: "Our promise",
      title: "We understand what is at stake.",
      body: "Behind every case file is a life, a family, a future. We treat your case with the urgency and dedication it deserves — because we have lived this story too. Three of our four partners are first- or second-generation immigrants. We answer our own phones. We learn your name. We do not file and forget.",
      sign: "— The Partners"
    },
    process: {
      eyebrow: "How we work",
      title: "A clear path, from first call to oath ceremony.",
      steps: [
        { n: "01", t: "Free consultation", d: "A 30-minute conversation. We listen to your situation, identify viable pathways, and tell you honestly whether we are the right fit." },
        { n: "02", t: "Strategy & retainer", d: "A written case strategy, transparent fees, and a single attorney accountable to you for the entire matter." },
        { n: "03", t: "Document preparation", d: "We build your file together. Translations, affidavits, evidence — meticulously organized, securely stored." },
        { n: "04", t: "Filing & advocacy", d: "We file with USCIS, the consulate, or the immigration court — and we follow every receipt, RFE, and notice on your behalf." },
        { n: "05", t: "Approval & beyond", d: "Green card, visa, or citizenship in hand — and continued counsel as your status evolves." }
      ]
    },
    team: {
      eyebrow: "The partners",
      title: "Counsel that has lived this story.",
      members: [
        { name: "Camila Vargas", role: "Founding Partner", bio: "Born in Bogotá, naturalized in 2003. Former AILA chapter chair. 20+ years in deportation defense.", lang: "ES · EN" },
        { name: "David Hartley", role: "Partner, Employment", bio: "Authored guidance cited by USCIS on O-1 standards. Represents Fortune 100 clients and solo founders alike.", lang: "EN" },
        { name: "Aïcha Ndiaye", role: "Partner, Asylum", bio: "Former UNHCR fellow. Trauma-informed practice for clients from West Africa, the Caribbean, and Central America.", lang: "EN · FR" },
        { name: "Mateo Solano", role: "Partner, Family", bio: "Son of Salvadoran refugees. Speaks at community clinics every month. Believes paperwork is a love language.", lang: "ES · EN · PT" }
      ]
    },
    stories: {
      eyebrow: "Success stories",
      title: "Lives, changed quietly, on the record.",
      prev: "Previous story",
      next: "Next story",
      story: "Story",
      items: [
        { quote: "We waited eleven years for our green cards. Sera filed our case and we had approvals in fourteen months. My mother cried at the airport.", who: "R. & L. — Family-based", country: "Philippines → California" },
        { quote: "I am a researcher. I had been told my work wasn't 'extraordinary' enough. Sera disagreed. My O-1 was approved on the first try.", who: "Dr. P. — O-1", country: "India → Massachusetts" },
        { quote: "They fought for me when ICE came at 5 a.m. Cancellation of removal granted. I am still here, still working, still raising my kids.", who: "J. — Removal defense", country: "Guatemala → Texas" },
        { quote: "I took the oath in March. Twenty-three years after I arrived. They sent flowers to the ceremony.", who: "Mrs. O. — Naturalization", country: "Nigeria → New York" }
      ]
    },
    eval: {
      title: "Free case evaluation",
      sub: "A senior attorney reviews every submission within 24 hours. No obligation. Confidential.",
      step_of: "Step",
      of: "of",
      q1: "What kind of help do you need?",
      q1_opts: ["Family-based petition", "Work visa or green card", "Asylum or humanitarian", "Removal / deportation defense", "Citizenship", "Something else"],
      q2: "Where are you located?",
      q2_country: "Country of origin",
      q2_state: "U.S. state (if applicable)",
      q3: "How can we reach you?",
      q3_name: "Full name",
      q3_email: "Email address",
      q3_phone: "Phone (WhatsApp preferred)",
      q3_note: "Anything else we should know? (optional)",
      back: "Back",
      next: "Continue",
      submit: "Submit for review",
      done_t: "Thank you.",
      done_d: "An attorney will reach out within 24 hours. If urgent, message us on WhatsApp now.",
      close: "Close",
      err_email: "Please enter a valid email"
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Begin your case today.",
      sub: "Call, write, or visit. We respond to every inquiry within one business day.",
      addr_t: "Main office",
      addr: "1180 Mission St, Suite 400 · San Francisco, CA 94103",
      hours_t: "Hours",
      hours: "Mon–Fri · 8:30 am – 6:30 pm PT",
      tel_t: "Phone",
      tel: "+1 (415) 555-0140",
      wa_t: "WhatsApp",
      wa: "+1 (415) 555-0142",
      mail_t: "Email",
      mail: "hello@sera-immigration.law"
    },
    footer: {
      tag: "Sera Immigration Law — counsel for the next chapter.",
      cols: [
        { h: "Practice", l: ["Family", "Employment", "Asylum", "Citizenship", "Removal defense", "Investor"] },
        { h: "Firm", l: ["About", "Partners", "Careers", "Press", "Pro bono"] },
        { h: "Resources", l: ["Knowledge base", "Forms checklist", "Spanish-language clinic", "AILA membership"] }
      ],
      bar: "© 2026 Sera Immigration Law, PC. Attorney advertising. Prior results do not guarantee a similar outcome."
    },
    wa: {
      label: "Chat on WhatsApp",
      tip: "Typically reply in under 10 minutes"
    }
  },
  es: {
    nav: {
      practice: "Áreas de práctica",
      team: "Nuestro equipo",
      process: "Proceso",
      stories: "Historias de éxito",
      contact: "Contacto",
      cta: "Evalúa tu caso",
      skip: "Saltar al contenido principal",
      home: "Inicio",
      lang_label: "Selector de idioma",
      open_menu: "Abrir menú",
      close_menu: "Cerrar menú"
    },
    hero: {
      eyebrow: "Derecho de inmigración — Desde 1998",
      title_a: "Tu sueño.",
      title_b: "Tu futuro.",
      title_c: "Nuestra experiencia legal.",
      sub: "Navegamos las complejidades del sistema migratorio para que tú no tengas que hacerlo. Con discreción, cuidado, y la urgencia que tu vida merece.",
      cta_primary: "Evalúa tu caso — gratis",
      cta_secondary: "Habla con un abogado",
      stat1_n: "27",
      stat1_l: "Años de práctica",
      stat2_n: "94%",
      stat2_l: "Tasa de aprobación",
      stat3_n: "62",
      stat3_l: "Países representados"
    },
    trust: {
      label: "Confianza en",
      countries: "Representando clientes de más de 62 países",
      langs: "Atención en español, inglés y portugués",
      member: "Miembro AILA · Colegio de Abogados de California",
      since: "Ejerciendo desde 1998"
    },
    practice: {
      eyebrow: "Lo que hacemos",
      title: "Áreas de práctica",
      sub: "Desde la primera petición hasta el tribunal, representamos cada capítulo de tu camino migratorio.",
      areas: [
        { n: "01", t: "Inmigración familiar", d: "Peticiones, ajustes de estatus, visas de prometido(a) y reunificación familiar. Mantenemos a las familias unidas — cada paso documentado, cada plazo cumplido.", tags: ["I-130", "I-485", "K-1", "Proceso consular"] },
        { n: "02", t: "Inmigración laboral", d: "H-1B, O-1, EB-1, EB-2 NIW, L-1 y PERM. Trabajamos con equipos de RR.HH. y profesionales individuales para asegurar tu estatus laboral.", tags: ["H-1B", "O-1", "EB-1", "PERM"] },
        { n: "03", t: "Defensa de deportación", d: "Procesos de remoción, cancelación de remoción, mociones de reapertura y apelaciones a la BIA. Cuando lo que está en juego es todo, intervenimos.", tags: ["EOIR", "Apelaciones BIA", "Audiencias de fianza"] },
        { n: "04", t: "Asilo y humanitario", d: "Asilo afirmativo y defensivo, retención de remoción, CAT, visas U, visas T y VAWA. Defensa empática y consciente del trauma.", tags: ["I-589", "Visa U", "Visa T", "VAWA"] },
        { n: "05", t: "Ciudadanía y naturalización", d: "Solicitudes N-400, preparación cívica, ciudadanía derivada y orientación para la ceremonia de juramento. El último paso, con el cuidado que merece.", tags: ["N-400", "N-600", "Prep. cívica"] },
        { n: "06", t: "Inversionista y emprendedor", d: "EB-5, E-2 inversionista y L-1 transferencia intracorporativa. Asesoría estratégica para fundadores construyendo en EE. UU.", tags: ["EB-5", "E-2", "L-1A"] }
      ]
    },
    promise: {
      eyebrow: "Nuestra promesa",
      title: "Entendemos lo que está en juego.",
      body: "Detrás de cada expediente hay una vida, una familia, un futuro. Tratamos tu caso con la urgencia y dedicación que merece — porque nosotros también hemos vivido esta historia. Tres de nuestros cuatro socios son inmigrantes de primera o segunda generación. Contestamos nuestros propios teléfonos. Aprendemos tu nombre. No archivamos y olvidamos.",
      sign: "— Los Socios"
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un camino claro, desde la primera llamada hasta el juramento.",
      steps: [
        { n: "01", t: "Consulta gratuita", d: "Una conversación de 30 minutos. Escuchamos tu situación, identificamos caminos viables, y te decimos honestamente si somos la opción adecuada." },
        { n: "02", t: "Estrategia y contrato", d: "Una estrategia escrita, honorarios transparentes, y un único abogado responsable de tu caso de principio a fin." },
        { n: "03", t: "Preparación de documentos", d: "Construimos tu expediente juntos. Traducciones, declaraciones juradas, evidencia — meticulosamente organizado y guardado de forma segura." },
        { n: "04", t: "Presentación y defensa", d: "Presentamos ante USCIS, el consulado, o la corte de inmigración — y damos seguimiento a cada recibo, RFE y notificación en tu nombre." },
        { n: "05", t: "Aprobación y más allá", d: "Green Card, visa o ciudadanía en mano — y asesoría continua a medida que tu estatus evoluciona." }
      ]
    },
    team: {
      eyebrow: "Los socios",
      title: "Asesoría que ha vivido esta historia.",
      members: [
        { name: "Camila Vargas", role: "Socia Fundadora", bio: "Nacida en Bogotá, naturalizada en 2003. Ex presidenta del capítulo AILA. Más de 20 años en defensa de deportación.", lang: "ES · EN" },
        { name: "David Hartley", role: "Socio, Laboral", bio: "Autor de directrices citadas por USCIS sobre estándares O-1. Representa a clientes Fortune 100 y fundadores por igual.", lang: "EN" },
        { name: "Aïcha Ndiaye", role: "Socia, Asilo", bio: "Ex becaria de ACNUR. Práctica consciente del trauma para clientes de África Occidental, el Caribe y Centroamérica.", lang: "EN · FR" },
        { name: "Mateo Solano", role: "Socio, Familiar", bio: "Hijo de refugiados salvadoreños. Cada mes habla en clínicas comunitarias. Cree que el papeleo es un lenguaje de amor.", lang: "ES · EN · PT" }
      ]
    },
    stories: {
      eyebrow: "Historias de éxito",
      title: "Vidas, cambiadas en silencio, oficialmente.",
      prev: "Historia anterior",
      next: "Siguiente historia",
      story: "Historia",
      items: [
        { quote: "Esperamos once años por nuestras green cards. Sera presentó nuestro caso y tuvimos aprobaciones en catorce meses. Mi madre lloró en el aeropuerto.", who: "R. y L. — Familiar", country: "Filipinas → California" },
        { quote: "Soy investigador. Me habían dicho que mi trabajo no era lo suficientemente 'extraordinario'. Sera no estuvo de acuerdo. Mi O-1 fue aprobada al primer intento.", who: "Dr. P. — O-1", country: "India → Massachusetts" },
        { quote: "Lucharon por mí cuando ICE llegó a las 5 a.m. Cancelación de remoción concedida. Sigo aquí, sigo trabajando, sigo criando a mis hijos.", who: "J. — Defensa de remoción", country: "Guatemala → Texas" },
        { quote: "Hice el juramento en marzo. Veintitrés años después de llegar. Enviaron flores a la ceremonia.", who: "Sra. O. — Naturalización", country: "Nigeria → Nueva York" }
      ]
    },
    eval: {
      title: "Evaluación gratuita",
      sub: "Un abogado senior revisa cada solicitud en menos de 24 horas. Sin compromiso. Confidencial.",
      step_of: "Paso",
      of: "de",
      q1: "¿Qué tipo de ayuda necesitas?",
      q1_opts: ["Petición familiar", "Visa de trabajo o green card", "Asilo o humanitario", "Defensa de remoción / deportación", "Ciudadanía", "Otro"],
      q2: "¿Dónde te encuentras?",
      q2_country: "País de origen",
      q2_state: "Estado de EE. UU. (si aplica)",
      q3: "¿Cómo te contactamos?",
      q3_name: "Nombre completo",
      q3_email: "Correo electrónico",
      q3_phone: "Teléfono (WhatsApp preferido)",
      q3_note: "¿Algo más que debamos saber? (opcional)",
      back: "Atrás",
      next: "Continuar",
      submit: "Enviar para revisión",
      done_t: "Gracias.",
      done_d: "Un abogado te contactará en menos de 24 horas. Si es urgente, escríbenos por WhatsApp ahora.",
      close: "Cerrar",
      err_email: "Por favor ingresa un correo válido"
    },
    contact: {
      eyebrow: "Contáctanos",
      title: "Comienza tu caso hoy.",
      sub: "Llama, escribe, o visita. Respondemos cada consulta en menos de un día hábil.",
      addr_t: "Oficina principal",
      addr: "1180 Mission St, Suite 400 · San Francisco, CA 94103",
      hours_t: "Horario",
      hours: "Lun–Vie · 8:30 am – 6:30 pm PT",
      tel_t: "Teléfono",
      tel: "+1 (415) 555-0140",
      wa_t: "WhatsApp",
      wa: "+1 (415) 555-0142",
      mail_t: "Correo",
      mail: "hello@sera-immigration.law"
    },
    footer: {
      tag: "Sera Immigration Law — asesoría para el próximo capítulo.",
      cols: [
        { h: "Práctica", l: ["Familiar", "Laboral", "Asilo", "Ciudadanía", "Defensa de remoción", "Inversionista"] },
        { h: "Firma", l: ["Nosotros", "Socios", "Carreras", "Prensa", "Pro bono"] },
        { h: "Recursos", l: ["Base de conocimiento", "Lista de formularios", "Clínica en español", "Membresía AILA"] }
      ],
      bar: "© 2026 Sera Immigration Law, PC. Publicidad legal. Resultados anteriores no garantizan un resultado similar."
    },
    wa: {
      label: "Chatea por WhatsApp",
      tip: "Respondemos típicamente en menos de 10 minutos"
    }
  }
};

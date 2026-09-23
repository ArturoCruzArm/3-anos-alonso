/* ============================================================
   CONFIG ÚNICA DEL EVENTO — 3 Años de Alonso
   Cambiar SOLO aquí. Todas las páginas leen de window.EVENT_CONFIG.

   Este evento NO lleva foto ni video: se contrató únicamente la
   invitación web con música personalizada. Por eso el repo no
   tiene selector, álbum ni hoja de producción.
   ============================================================ */
window.EVENT_CONFIG = {
    // ── Identidad ─────────────────────────────────────────────
    slug:        '3-anos-alonso',
    nombre:      'Alonso',
    nombreCorto: 'Alonso',
    tipo:        '3 Años',

    // ── Fecha (mes en base 0: 11 = diciembre) ─────────────────
    fechaEvento: new Date(2026, 11, 19, 15, 30, 0),
    fechaTexto:  'Sábado 19 de diciembre de 2026',

    // ── Contacto ──────────────────────────────────────────────
    telefono:        '524779203776',   // WhatsApp FORO 7
    contactoTitular: 'Analí',          // mamá de Alonso

    // ── Temática ──────────────────────────────────────────────
    tematica: {
        nombre:  'Fórmula 1',
        colores: ['blanco', 'negro', 'rojo'],
        // Alonso todavía dice "boches" en lugar de coches: es el
        // detalle que personaliza la invitación y la canción.
        detalle: 'boches'
    },

    // ── Servicio contratado ───────────────────────────────────
    paquete: {
        nombre: 'Invitación web interactiva + canción personalizada',
        precio: 900,
        incluye: [
            'Diseño acorde a la temática de Fórmula 1',
            'Canción hecha a la medida para Alonso',
            'Cuenta regresiva',
            'Ubicación con acceso a Google Maps',
            'Fecha y horarios del evento',
            'Confirmación de asistencia en línea',
            'Lista para compartir por WhatsApp',
            'Fotografías del festejado y colores personalizados'
        ],
        nota: 'La canción personalizada vale $500 aparte ($1,400 el paquete); ' +
              'se incluyó sin costo por contratar en la semana.'
    },

    // ── Supabase ──────────────────────────────────────────────
    supabaseUrl:  'https://nzpujmlienzfetqcgsxz.supabase.co',
    supabaseAnon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56cHVqbWxpZW56ZmV0cWNnc3h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ2ODYzMzYsImV4cCI6MjA5MDI2MjMzNn0.xl3lsb-KYj5tVLKTnzpbsdEGoV9ySnswH4eyRuyEH1s'
};

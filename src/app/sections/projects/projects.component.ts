import { Component, HostListener } from '@angular/core';
import { ProjectCardComponent } from "./project-card/project-card.component";

type Project = {
  name: string;
  description: string;
  coverImage: string;
  coverPos?: string;
  gallery?: string[];
  bullets: string[];
  details?: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  expanded?: boolean;
  galleryIndex?: number;

  pitch?: string;
  highlights?: string[];
  challenges?: string[];
  learnings?: string[];
  isMobile?: boolean;
};

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent {

  pageSize = 4;
  page = 0;

  pageAnim: 'slide-left' | 'slide-right' | '' = '';

  modalOpen = false;
  selectedProject: Project | null = null;

  nextPage(ev?: Event) {
    if (this.page >= this.totalPages - 1) return;

    const y = window.scrollY;
    (ev?.target as HTMLElement | null)?.blur();

    this.pageAnim = 'slide-left';
    this.page++;

    requestAnimationFrame(() => window.scrollTo({ top: y, left: 0, behavior: 'auto' }));

    window.setTimeout(() => (this.pageAnim = ''), 260);
  }

  prevPage(ev?: Event) {
    if (this.page <= 0) return;

    const y = window.scrollY;
    (ev?.target as HTMLElement | null)?.blur();

    this.pageAnim = 'slide-right';
    this.page--;

    requestAnimationFrame(() => window.scrollTo({ top: y, left: 0, behavior: 'auto' }));

    window.setTimeout(() => (this.pageAnim = ''), 260);
  }

  get totalPages(): number {
    return Math.ceil(this.projects.length / this.pageSize);
  }

  get pagedProjects() {
    const start = this.page * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  }

  openProject(p: Project) {
    const copy = { ...p };

    if (copy.gallery?.length && (copy.galleryIndex === undefined || copy.galleryIndex === null)) {
      copy.galleryIndex = 0;
    }

    this.selectedProject = copy;
    this.modalOpen = true;

    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      (document.querySelector('[role="dialog"]') as HTMLElement | null)?.focus();
    }, 0);
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProject = null;

    document.body.style.overflow = '';
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (!this.modalOpen) return;
    if (e.key === 'Escape') this.closeModal();
  }

  setImg(p: Project, i: number) {
    if (!p.gallery?.length) return;
    p.galleryIndex = i;
  }

  prevImg(p: any) {
    if (!p.gallery?.length) return;
    p.galleryIndex = (p.galleryIndex - 1 + p.gallery.length) % p.gallery.length;
  }

  nextImg(p: any) {
    if (!p.gallery?.length) return;
    p.galleryIndex = (p.galleryIndex + 1) % p.gallery.length;
  }

  projects: Project[] = [
    {
      name: 'The Last Dance - Restaurant',
      description: 'Aplicación mobile full-stack para gestión operativa de restaurantes en tiempo real.',
      coverImage: '/the_last_dance.webp',
      coverPos: 'center 20%',
      gallery: ['/the_last_dance.webp', 'admin.png', 'bienvenido.png', 'mesa_confirmada.jpg', 'menu.jpg', 'carrito.png', 'pedido_en_mesa.png', 'chat_mesa.jpg', 'delivery.jpg', 'en_camino.jpg', 'repartidor_llego.jpg', 'encuesta.jpg', 'graficos.jpg'],
      bullets: [
        'Sistema full-stack mobile para operación de restaurante en tiempo real',
        'Sincronización instantánea de pedidos y estados con arquitectura event-driven',
        'Flujos optimizados con QR de mesa y autocompletado de identidad',
        'Gestión multiusuario con roles y permisos desacoplados'
      ],
      details: [
        'Arquitectura full-stack con backend + base de datos en Supabase (PostgreSQL) y storage.',
        'Tiempo real con Socket.io para eventos del sistema (estado de pedidos / flujos).',
        'Autenticación y roles/permisos para separar vistas y acciones por perfil.',
        'QR para mesas y autocompletado por DNI para mejorar la experiencia de usuario.',
        'Enfoque en UX: flujo simple, pantallas claras y manejo de estados.',
      ],
      pitch:
        '"The Last Dance" es el más importante: una app mobile full-stack para gestión de restaurant, diseñada para trabajar rápido, con reglas de negocio claras y una experiencia de usuario simple. Me encargué del enfoque técnico y de tomar decisiones clave para que el sistema sea consistente, escalable y fácil de operar.',

      highlights: [
        'Arquitectura full-stack conectando app mobile con backend, base de datos y storage.',
        'Tiempo real con Socket.io para mantener pedidos y estados sincronizados en operación.',
        'Escaneo QR para mesas + autocompletado por DNI para acelerar flujos reales.',
        'Roles y permisos bien definidos para separar acciones y pantallas por perfil.',
        'Enfoque en UX: pantallas claras, feedback inmediato y manejo consistente de estados.'
      ],

      challenges: [
        'Modelar correctamente el flujo de estados del pedido sin inconsistencias (cambios, cancelaciones y validaciones).',
        'Diseñar una UX mobile usable “en caliente” (acciones rápidas y pantallas sin fricción).',
        'Sincronización en tiempo real evitando duplicados o estados desactualizados.',
        'Mantener el código organizado mientras el producto crecía en funcionalidades.'
      ],

      learnings: [
        'Aprendí a pensar en reglas de negocio como un contrato: si cambia el estado, todo el sistema tiene que reaccionar igual.',
        'Mejoré muchísimo en arquitectura y separación de responsabilidades (pantallas, servicios y lógica).',
        'Gané experiencia integrando auth + persistencia + realtime como un producto completo.',
        'Entendí la importancia de diseñar con mentalidad de usuario y no solo “que funcione”.'
      ],
      isMobile: true,
      expanded: false,
      tags: ['React Native', 'TypeScript', 'Supabase', 'Socket.io', 'Express'],
      liveUrl: 'https://www.youtube.com/playlist?list=PLwNluoTBkh_4kQ6Sn-1aLSRbdmw5-HTfD',
      repoUrl: 'https://github.com/JpCortezF/TheLastDance-2025',
    },
    {
      name: 'E-Commerce Admin System — ASP.NET',
      description: 'Aplicación web e-commerce desarrollada en ASP.NET con panel administrativo, gestión de ventas y roles de usuario.',
      coverImage: '/e_commerce.webp',
      gallery: ['e_commerce.webp'],
      bullets: [
        'Gestión completa de productos, categorías y ventas',
        'Autenticación con roles (usuario / administrador)',
        'Dashboard con métricas y reportes comerciales',
        'Integración SQL Server + Firebase para gestión de usuarios'
      ],
      details: [
        'Arquitectura MVC en ASP.NET con separación de servicios e interfaces.',
        'CRUD completo de productos con carga y validación de imágenes.',
        'Sistema de ventas con historial, búsqueda y reportes por fecha.',
        'Generación de PDFs de ventas mediante DinkToPdf.',
        'Dashboards con gráficos de métricas de productos y ventas.',
        'Gestión de usuarios con Firebase y sincronización con SQL Server.',
        'Restablecimiento de contraseña con envío de emails HTML.',
        'Uso de AutoMapper para mapear Models y ViewModels.',
        'Interacciones AJAX y DataTables para UX dinámica.',
      ],
      pitch: 'Proyecto de e-commerce orientado a comprender arquitectura web completa en .NET: autenticación, panel administrativo, gestión comercial y reporting. Fue clave para consolidar bases en backend empresarial, separación de responsabilidades y modelado de datos.',
      
      highlights: [
        'Panel administrativo con métricas y visualización de ventas',
        'Generación automática de documentos PDF',
        'Roles dinámicos que alteran navegación y permisos',
        'Experiencia AJAX interactiva sin recarga de página',
      ],

      challenges: [
        'Integrar Firebase con SQL Server para gestión de usuarios',
        'Mantener coherencia entre Models y ViewModels',
        'Diseñar flujo de ventas completo sin inconsistencias',
        'Organizar controllers y servicios a medida que crecía el proyecto',
      ],

      learnings: [
        'Entendí patrones MVC y separación de capas en aplicaciones reales',
        'Gané experiencia en backend empresarial con .NET',
        'Aprendí integración entre múltiples fuentes de datos',
        'Mejoré en diseño de interfaces administrativas complejas',
      ],

      tags: ['ASP.NET', 'C#', 'SQL Server', 'Firebase', 'MVC', 'AutoMapper',],
      repoUrl: 'https://github.com/JpCortezF/SistemaDeVenta',
    },
    {
      name: 'Toque Gourmet',
      description: 'Sitio institucional para marca gastronómica, diseñado para conversión y contacto directo.',
      coverImage: '/toque_gourmet.webp',
      gallery: ['/toque_gourmet.webp', '/inicio_tg.png', '/servicios_tg.png', '/nosotros_tg.png', '/contacto_tg.png'],
      bullets: [
        'Landing + secciones orientadas a conversión (CTA y contacto).',
        'UI moderna + responsive (mobile-first) con Angular + Tailwind.',
        'Deploy público en Firebase Hosting + performance optimizada.',
      ],
      pitch: 'Proyecto real de sitio institucional para una marca gastronómica. El objetivo fue comunicar servicios de forma clara, mantener una estética moderna y asegurar una experiencia rápida y fluida en mobile para maximizar consultas y conversiones.',

      highlights: [
        'Diseño moderno con estética profesional y foco en legibilidad.',
        'Navegación simple y directa para guiar al usuario al contacto.',
        'Responsive completo optimizado para celulares y pantallas pequeñas.',
        'Deploy y disponibilidad pública en Firebase Hosting.',
      ],

      challenges: [
        'Lograr un diseño visual atractivo sin perder claridad en la información.',
        'Optimizar la carga de imágenes para mantener buena performance.',
        'Mantener consistencia de estilos y componentes en todo el sitio.',
      ],

      learnings: [
        'Mejoré la organización del frontend en componentes reutilizables.',
        'Aprendí a priorizar UX orientada a negocio (CTA y jerarquía visual).',
        'Reforcé el flujo de deploy y publicación de un proyecto productivo.',
      ],
      details: [
        'Estructura clara para comunicar servicios y generar consultas.',
        'Optimización visual para mobile (jerarquía, espaciados, legibilidad).',
        'Integración de contenido/recursos del cliente (imágenes y secciones).',
        'Publicación y mantenimiento del sitio en entorno productivo.',
      ],
      expanded: false,
      tags: ['Angular', 'TypeScript', 'Tailwind', 'Firebase'],
      liveUrl: 'https://toquegourmet.com.ar',
      repoUrl: 'https://github.com/JpCortezF/toque-gourmet',
    },
    {
      name: 'Clínica Online',
      description: 'Web app para gestión completa de un centro de salud: turnos, roles y seguimiento clínico.',
      coverImage: '/clinica_online.webp',
      gallery: ['/clinica_online.webp', '/solicitar_turno.webp', '/mis_turnos.webp', 'horarios.webp', 'historia_clinica.png', 'log_ingresos.png'],
      bullets: [
        'Roles: Paciente, Especialista y Admin.',
        'Turnos con validaciones y flujo de estados (aceptar/rechazar/cancelar).',
        'Historia clínica y seguimiento de atención.',
        'Auth + persistencia en Supabase (PostgreSQL).',
      ],
      pitch:
        'Clínica Online es una aplicación web que desarrollé para simular la gestión completa de un centro de salud: turnos, roles, validaciones y seguimiento clínico. La idea fue construir un sistema donde cada perfil (Paciente, Especialista y Administrador) tenga su panel y sus acciones específicas, manteniendo reglas de negocio consistentes y trazabilidad. Implementé el backend en Supabase (PostgreSQL + Auth), asegurando persistencia real, control de estados y una experiencia fluida con una UI moderna.',

      highlights: [
        'Arquitectura con Angular + Supabase (PostgreSQL + Auth) para un sistema real de usuarios y datos persistentes.',
        'Roles y permisos por perfil: Paciente / Especialista / Admin con vistas dedicadas.',
        'Gestión de turnos con reglas claras: validaciones de fechas, disponibilidad y flujo de estados.',
        'Seguimiento clínico e información organizada por usuario, con experiencia responsive.',
        'UI moderna con Tailwind: diseño consistente, limpio y pensado para operar sin fricción.'
      ],

      challenges: [
        'Definir un flujo de turnos completo (aceptar / rechazar / cancelar) sin romper estados intermedios.',
        'Validar disponibilidad real: evitar solapamientos, fechas inválidas y acciones no permitidas por rol.',
        'Mantener el código escalable: separar componentes, lógica y responsabilidades.',
        'Diseñar una UX clara para que cada rol entienda “qué puede hacer” sin confusión.'
      ],

      learnings: [
        'Aprendí a traducir requerimientos reales a reglas de negocio implementables en front y base de datos.',
        'Mejoré mi criterio para separar UI y lógica en Angular (componentización + reusabilidad).',
        'Gané experiencia trabajando con Auth + persistencia en PostgreSQL dentro de un sistema multiusuario.',
        'Reforcé la importancia de consistencia visual y estados bien comunicados (loading, error, éxito).'
      ],
      details: [
        'Implementación de reglas de negocio (fechas válidas, disponibilidad y control de estados).',
        'Paneles por rol con permisos y pantallas dedicadas.',
        'Gestión de perfiles e información del paciente/especialista.',
        'UI moderna y responsive con Tailwind CSS.',
      ],
      tags: ['Angular', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind'],
      expanded: false,
      repoUrl: 'https://github.com/JpCortezF/Clinica-Online-UTN',
      liveUrl: 'https://clinica-online-psi.vercel.app/',
    },
    {
      name: 'Simulador SUBE',
      description: 'Aplicación de escritorio que simula un sistema de gestión de viajes tipo SUBE, con roles y persistencia en base de datos.',
      coverImage: '/sube.webp',
      gallery: ['/sube.webp', 'inicio_sube.png', 'registro_sube.png', 'home_sube.png', 'tarjeta_sube.png', 'viaje_sube.gif', 'tarifa-social_sube.png'],
      bullets: [
        'Roles: Usuario y Administrador.',
        'Carga de saldo y gestión de tarjeta.',
        'Realización de viajes con proceso asíncrono.',
        'Historial de viajes y reportes (pérdida/robo/rotura).',
        'Gestión de tarifas sociales (trámites y validaciones).',
        'Persistencia completa con MySQL.',
      ],
      pitch:
        'Simulador SUBE es una aplicación de escritorio que desarrollé como trabajo final, inspirada en un sistema real de gestión de viajes tipo SUBE en Argentina. El objetivo fue construir una solución completa y consistente, donde un usuario pueda administrar su tarjeta, cargar saldo, realizar viajes y consultar historial, mientras que un administrador gestiona usuarios, trámites y reportes. Me enfoqué especialmente en la lógica de negocio y en la persistencia de datos, asegurando que cada acción quede registrada y validada correctamente.',

      highlights: [
        'Roles diferenciados Usuario / Administrador, con permisos y acciones específicas para cada perfil.',
        'Carga de saldo, gestión de tarjeta y control de estado (activa / reportada).',
        'Viajes con proceso asíncrono, simulando un flujo real sin bloquear la interfaz.',
        'Historial completo con persistencia en MySQL, listo para reportes y auditoría.',
        'Gestión de trámites (tarifa social, reportes de pérdida/robo/rotura) con seguimiento de estado.'
      ],

      challenges: [
        'Diseñar un modelo de datos que soporte trámites + estados + historial sin inconsistencias.',
        'Mantener la UI clara en WinForms, separando pantallas y flujos por rol.',
        'Implementar procesos asíncronos sin que la app quede “congelada” ni pierda integridad.',
        'Aplicar validaciones realistas: evitar viajes sin saldo, bloquear operaciones con tarjeta reportada, etc.'
      ],

      learnings: [
        'Mejoré mi capacidad de modelar reglas de negocio reales y su impacto en base de datos.',
        'Gané experiencia construyendo sistemas con roles y permisos, pensando en “quién puede hacer qué”.',
        'Aprendí a diseñar un flujo robusto y mantenible en una app desktop conectada a MySQL.',
        'Reforcé buenas prácticas como consistencia de estados y persistencia confiable.'
      ],
      details: [
        'Aplicación desktop con roles Usuario/Administrador y permisos por perfil.',
        'Carga de saldo, reporte de tarjeta (pérdida/robo/rotura) y seguimiento del estado.',
        'Viajes con proceso asíncrono y registro automático en historial.',
        'Gestión de tarifas sociales mediante trámites y validaciones.',
        'Persistencia y consultas en MySQL para asegurar integridad de datos.',
      ],
      expanded: false,
      tags: ['C#', 'WinForms', 'MySQL', 'Desktop'],
      repoUrl: 'https://github.com/JpCortezF/Sistema-SUBE',
    },
    {
      name: 'La Comanda (Backend)',
      description: 'API REST para gestión integral de restaurant: empleados, mesas, productos y pedidos con reglas de negocio.',
      coverImage: '/la_comanda.webp',
      gallery: ['/la_comanda.webp'],
      bullets: [
        'API REST + ABM de entidades (usuarios/empleados, productos, mesas y pedidos).',
        'Roles/perfiles con middleware y autorización por operación.',
        'Flujo completo de pedido: pendiente → en preparación → listo para servir.',
        'Importación y exportación CSV + exportación a PDF.',
      ],
      pitch:
        'La Comanda es una API REST que desarrollé para simular un sistema real de gestión operativa en un restaurante con múltiples sectores (barra, cervecería, cocina y candy bar). El objetivo principal fue modelar reglas de negocio reales: pedidos con estados, roles con permisos por operación, trazabilidad de acciones y reportes útiles para la administración. A lo largo del desarrollo trabajé en iteraciones tipo sprint, entregando funcionalidades progresivamente y manteniendo consistencia entre entidades, estados y auditoría del sistema.',

      highlights: [
        'ABM completo de usuarios/empleados, productos, mesas y pedidos.',
        'Roles y permisos por middleware, restringiendo operaciones según perfil (seguridad real).',
        'Circuito completo del pedido: pendiente → en preparación → listo para servir, con lógica y validaciones.',
        'Importación y exportación de datos en CSV + generación de reportes en PDF.',
        'Auditoría de acciones: seguimiento de operaciones por empleado/sector y control de estados.',
        'Estadísticas de 30 días para análisis operativo (ventas, demoras, cancelaciones).',
        'Diseño pensado para operar con alta rotación de personal y sectores bien diferenciados.'
      ],

      challenges: [
        'Definir estados consistentes para pedidos y mesas sin que se rompa el flujo operativo.',
        'Implementar autorización real: que cada endpoint valide correctamente permisos y rol.',
        'Diseñar reportes útiles para la administración (qué se vendió, qué falló, tiempos, etc.).',
        'Mantener la API organizada mientras crecía por sprints: entidades, validaciones, respuestas y errores.',
        'Evitar inconsistencias al manejar cambios de estado simultáneos o acciones no permitidas.'
      ],

      learnings: [
        'Aprendí a modelar sistemas basados en procesos reales, no solo CRUD.',
        'Reforcé buenas prácticas de arquitectura backend, validaciones y manejo de errores.',
        'Gané experiencia aplicando middleware de autorización y separación por responsabilidades.',
        'Entendí cómo transformar requerimientos de negocio en endpoints claros y medibles.',
        'Mejoré mi capacidad de pensar en métricas: auditoría, estadísticas y visibilidad de la operación.'
      ],
      details: [
        'Seguimiento/auditoría de acciones de empleados y operaciones por sector.',
        'Estadísticas de 30 días (ventas, demoras, cancelaciones, etc.).',
        'Métricas de mesas: más usada, mayor facturación, mejores/peores comentarios.',
        'Proyecto backend con Slim v4 + POO + PDO y MySQL.',
      ],
      tags: ['PHP', 'Slim v4', 'MySQL', 'PDO', 'REST API'],
      expanded: false,
      repoUrl: 'https://github.com/JpCortezF/API-Restaurant',
    }
  ];
}

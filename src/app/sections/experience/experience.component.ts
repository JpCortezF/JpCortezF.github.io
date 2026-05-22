import { Component } from '@angular/core';

type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  tags: string[];
  url?: string;
};

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})

export class ExperienceComponent {
  experiences = [
    {
      role: 'Administrador de Base de Datos SQL Server',
      company: 'Banco Nación',
      period: '06/2024 — 03/2026',
      bullets: [
        'Administración, monitoreo y optimización de bases de datos de misión crítica y gran volumen en entornos productivos.',
        'Análisis de performance y tuning de consultas/índices para reducir tiempos de respuesta en operativas bancarias.',
        'Automatización de tareas de mantenimiento y despliegues mediante T-SQL y SQL Server Agent Jobs.',
        'Gestión de políticas de backup/restore y soporte a topologías de alta disponibilidad (Always On Availability Groups).',
        'Participación activa en el plan de migración de instancias a SQL Server 2022.',
      ],
      tags: ['SQL Server', 'T-SQL', 'AlwaysOn', 'Performance', 'Automation'],
    },
    {
      role: 'Desarrollador Full Stack | Plataformas Web y E-commerce',
      company: 'Soluciones Web a Medida',
      period: '02/2025 — Actualidad',
      bullets: [
        'Diseño y desarrollo integral de plataformas de ventas B2B/B2C, e-commerce y sistemas de gestión a medida, abarcando todo el ciclo de vida del producto.',
        'Arquitectura y Backend: Desarrollo de APIs REST seguras (.NET / C#) con autenticación mediante tokens, gestión multi-rol y bases de datos relacionales.',
        'Frontend y UI/UX: Desarrollo de Single Page Applications (SPA) con Angular y Tailwind CSS para plataformas web interactivas de alto rendimiento.',
        'Soluciones de Negocio: Digitalización de procesos comerciales, implementando catálogos inteligentes, carritos de compras y paneles de administración.',
        'Infraestructura: Configuración, containerización (Docker) y despliegue en la nube, gestionando el mantenimiento y la escalabilidad del sistema.',
        'Proyecto destacado: Toque Gourmet (Desarrollo integral de sitio institucional en producción).',
      ],
      url: 'https://toquegourmet.com.ar',
      urlLabel: 'Ver Toque Gourmet →',
      tags: ['.NET', 'C#', 'Angular', 'SQL Server', 'Docker', 'Tailwind'],
    },
  ];
}

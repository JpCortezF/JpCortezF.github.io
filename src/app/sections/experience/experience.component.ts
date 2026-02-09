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
      period: '06/2024 — Actualidad',
      bullets: [
        'Administración y mantenimiento de entornos SQL Server de misión crítica.',
        'Automatización de tareas operativas con T-SQL y SQL Server Agent Jobs.',
        'Optimización de consultas, índices y estadísticas para mejorar performance.',
        'Gestión de backups, restore y recovery en ambientes productivos.',
        'Soporte a alta disponibilidad con AlwaysOn.',
        'Participación en iniciativas de migración/upgrade de plataforma (SQL Server 2022).',
      ],
      tags: ['SQL Server', 'T-SQL', 'AlwaysOn', 'Performance', 'Automation'],
    },
    {
      role: 'Desarrollo web freelance para clientes.',
      company: 'Proyectos web para clientes',
      period: '2025 — Actualidad',
      bullets: [
        'Diseño y desarrollo de soluciones web freelance orientadas a conversión y presencia digital.',
        'Implementación frontend moderna con Angular + TypeScript y Tailwind CSS.',
        'Diseño responsive (mobile-first) y optimización de performance.',
        'Deploy y publicación en producción (hosting y mantenimiento).',
        'Trabajo directamente con clientes desde el relevamiento hasta la puesta en producción.',
        'Proyecto destacado: Toque Gourmet (sitio institucional en producción).',
      ],
      url: 'https://toquegourmet.com.ar',
      urlLabel: 'Ver Toque Gourmet →',
      tags: ['Angular', 'TypeScript', 'Tailwind', 'Firebase', 'Freelance'],
    },
  ];
}

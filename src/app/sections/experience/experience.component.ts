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
  experiences: Experience[] = [
    {
      role: 'Administrador de Base de Datos SQL Server',
      company: 'Banco Nación',
      period: '06/2024 — Actualidad',
      bullets: [
        'Administración y mantenimiento de entornos SQL Server de misión crítica.',
        'Automatización de tareas operativas mediante T-SQL y SQL Server Agent Jobs.',
        'Optimización de consultas, índices y estadísticas para mejorar performance.',
        'Gestión de backups, restore y recovery en ambientes productivos.',
        'Soporte a alta disponibilidad con AlwaysOn.',
        'Participación en migración a SQL Server 2022.'
      ],
      tags: ['SQL Server','T-SQL','AlwaysOn','Performance','Automation']
    },
    {
      role: 'Desarrollador Web Freelance',
      company: 'Toque Gourmet',
      period: '02/2025 — 04/2025',
      url: 'https://toquegourmet.com.ar/inicio',
      bullets: [
        'Diseño y desarrollo de sitio corporativo en producción.',
        'Construcción del frontend con Angular y TypeScript.',
        'Maquetado responsive con Tailwind CSS.',
        'Deploy, dominio y publicación mediante Firebase Hosting.',
        'Optimización mobile y performance inicial.'
      ],
      tags: ['Angular','TypeScript','Tailwind','Firebase']
    }
  ];
}

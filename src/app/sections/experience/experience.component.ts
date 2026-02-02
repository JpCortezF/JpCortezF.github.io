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
      role: 'Administrador de Base de Datos SQL',
      company: 'Banco Nación',
      period: '06/2024 - Actualidad',
      bullets: [
        'Administración, mantenimiento y optimización de bases de datos SQL Server.',
        'Automatización de tareas con T-SQL y SQL Server Agent Jobs.',
        'Soporte y configuración de Always On (Availability Groups).',
        'Control y troubleshooting de backups en múltiples servidores.',
        'Participación en migración/homologación a SQL Server 2022.',
      ],
      tags: ['SQL Server', 'T-SQL', 'SQL Agent', 'Always On'],
    },
    {
      role: 'Freelance',
      company: 'Toque Gourmet — Sitio Gastronómico',
      period: '02/2025 - 04/2025',
      bullets: [
        'Diseño y desarrollo de sitio web corporativo orientado a comunicación de servicios.',
        'Frontend con Angular y Tailwind CSS.',
        'Integración y hosting con Firebase.',
        'Diseño responsive y optimización para mobile.',
      ],
      tags: ['Angular', 'TypeScript', 'Tailwind', 'Firebase'],
      url: 'https://toquegourmet.com.ar',
    },
  ];
}

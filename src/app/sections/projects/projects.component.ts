import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PROJECTS_DATA, Project } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS_DATA;

  // PAGINACIÓN
  page = 0;
  pageSize = 4;
  totalPages = Math.ceil(this.projects.length / this.pageSize);

  // ESTADO DE ANIMACIÓN ('slide-left', 'slide-right' o vacío)
  pageAnim = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  get pagedProjects(): Project[] {
    const start = this.page * this.pageSize;
    return this.projects.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.page < this.totalPages - 1) {
      this.pageAnim = 'slide-right';
      setTimeout(() => {
        this.page++;
        this.pageAnim = '';
      }, 300);
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.pageAnim = 'slide-left';
      setTimeout(() => {
        this.page--;
        this.pageAnim = '';
      }, 300);
    }
  }

  openProject(p: any) {
    this.router.navigate(['/project', p.id]);
  }
}

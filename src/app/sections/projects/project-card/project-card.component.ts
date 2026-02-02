import { Component, EventEmitter, Input, Output } from '@angular/core';

export type Project = {
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
};

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input({ required: true }) p!: Project;
  @Output() open = new EventEmitter<Project>();
}

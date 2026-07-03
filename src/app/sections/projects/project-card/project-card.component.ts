import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../data/projects.data';


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

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css'
})
export class SkillCardComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) iconUrl!: string;
}

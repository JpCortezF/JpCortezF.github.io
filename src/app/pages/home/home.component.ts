import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { AboutMeComponent } from '../../sections/about-me/about-me.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { ExperienceComponent } from "../../sections/experience/experience.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { ContactComponent } from "../../sections/contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutMeComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

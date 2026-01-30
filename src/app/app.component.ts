import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from "./sections/experience/experience.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactComponent } from "./sections/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutMeComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

import { Component, HostListener } from '@angular/core';
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

  showScrollTop = false;

  // Para el anillo de progreso
  ringCircumference = 2 * Math.PI * 18; // r=18
  ringDashoffset = this.ringCircumference;

  // Ajustá el umbral a gusto
  private showAfterPx = 320;

  @HostListener('window:scroll')
  onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;

    this.showScrollTop = y > this.showAfterPx;

    // Progreso
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight - doc.clientHeight;
    const progress = scrollHeight > 0 ? (y / scrollHeight) : 0; // 0..1

    // 0% => ring completo oculto, 100% => ring completo visible
    this.ringDashoffset = this.ringCircumference * (1 - progress);
  }

  scrollToHero() {
    document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
  }
}

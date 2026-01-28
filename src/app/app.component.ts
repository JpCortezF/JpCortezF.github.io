import { Component } from '@angular/core';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HeroComponent } from './layouts/hero/hero.component';
import { AboutMeComponent } from './layouts/about-me/about-me.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, HeroComponent, AboutMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}

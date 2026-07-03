import { Component, HostListener, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlanetGlowComponent } from "./components/planet-glow/planet-glow.component";

import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PlanetGlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'portfolio';

  showScrollTop = false;
  private lenis!: Lenis;

  // Para el anillo de progreso
  ringCircumference = 2 * Math.PI * 18; // r=18
  ringDashoffset = this.ringCircumference;

  // Ajustá el umbral a gusto
  private showAfterPx = 320;

  ngOnInit() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    this.lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      this.lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }

  ngAfterViewInit() {
    // GSAP ScrollTrigger ya está inicializado para los demás componentes.
    // La animación del Navbar ahora se maneja vía Softcore pattern.
  }

  ngOnDestroy() {
    if (this.lenis) {
      this.lenis.destroy();
    }
  }

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

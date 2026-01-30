import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  fullName = 'Soy Juan Pablo Cortez';
  typedName = '';

  private i = 0;
  private timer?: number;

  ngOnInit(): void {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduceMotion) {
      this.typedName = this.fullName;
      return;
    }

    // Arranca con un mini delay para que se note el efecto
    this.timer = window.setInterval(() => {
      this.typedName += this.fullName[this.i] ?? '';
      this.i++;

      if (this.i >= this.fullName.length) {
        window.clearInterval(this.timer);
      }
    }, 45);
  }

  ngOnDestroy(): void {
    if (this.timer) window.clearInterval(this.timer);
  }
}

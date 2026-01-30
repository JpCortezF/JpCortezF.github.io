import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const items = Array.from(
      this.host.nativeElement.querySelectorAll<HTMLElement>('.reveal')
    );

    if (!('IntersectionObserver' in window)) {
      // fallback: mostrar todo
      items.forEach((el) => el.classList.add('reveal--visible'));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            el.classList.add('reveal--visible');
          } else {
            el.classList.remove('reveal--visible');
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    items.forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
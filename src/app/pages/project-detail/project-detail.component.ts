import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PROJECTS_DATA, Project } from '../../data/projects.data';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  
  // Gallery & Lightbox State
  activeImage: string = '';
  isLightboxOpen: boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.project = PROJECTS_DATA.find(p => p.id === id);
      
      if (!this.project) {
        this.router.navigate(['/']);
      } else {
        // Inicializar la imagen activa con la primera de la galería o el cover
        if (this.project.gallery && this.project.gallery.length > 0) {
          this.activeImage = this.project.gallery[0];
        } else if (this.project.coverImage) {
          this.activeImage = this.project.coverImage;
        }
      }
    });
  }

  // Gallery Navigation
  setActiveImage(img: string) {
    this.activeImage = img;
  }

  openLightbox() {
    if (!this.activeImage) return;
    this.isLightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.isLightboxOpen = false;
    document.body.style.overflow = '';
  }

  nextImage() {
    if (!this.project?.gallery?.length) return;
    const currentIndex = this.project.gallery.indexOf(this.activeImage);
    const nextIndex = (currentIndex + 1) % this.project.gallery.length;
    this.activeImage = this.project.gallery[nextIndex];
  }

  prevImage() {
    if (!this.project?.gallery?.length) return;
    const currentIndex = this.project.gallery.indexOf(this.activeImage);
    const prevIndex = (currentIndex - 1 + this.project.gallery.length) % this.project.gallery.length;
    this.activeImage = this.project.gallery[prevIndex];
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isLightboxOpen) return;

    if (event.key === 'ArrowRight') {
      this.nextImage();
    } else if (event.key === 'ArrowLeft') {
      this.prevImage();
    } else if (event.key === 'Escape') {
      this.closeLightbox();
    }
  }
}

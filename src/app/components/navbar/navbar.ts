import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isMenuOpen = signal(false);
  activeSection = signal('');

  sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'education', 'contact'];

  toggleMenu(): void {
    this.isMenuOpen.update(value => !value);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollPosition = window.scrollY + 150;

    for (const sectionId of this.sections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          this.activeSection.set(sectionId);
          return;
        }
      }
    }
  }
}
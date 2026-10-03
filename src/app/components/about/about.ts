import { Component, signal } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [ScrollReveal],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  intro = signal(
    "I'm a Junior Front-End Developer and final-year Information Technology student at the Egyptian E-Learning University (expected graduation June 2026). I build responsive, user-friendly web interfaces with Angular, TypeScript, HTML5, CSS3, and JavaScript (ES6+), and hold a 98.3% score in a Front-End Web Development Diploma. I'm also comfortable connecting front-end applications to back-end services built with Laravel and MySQL. I focus on clean code, accessibility, and pixel-accurate UI."
  );

  info = signal([
    { label: 'Name', value: 'Menna Mohamed El-Banna' },
    { label: 'Location', value: 'Shibin El Kom, Egypt' },
    { label: 'Email', value: 'mena94502@gmail.com' },
    { label: 'Availability', value: 'Open to Work' }
  ]);
}
import { Component, signal } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-education',
  imports: [ScrollReveal],
  templateUrl: './education.html',
  styleUrl: './education.css'
})
export class Education {
  degree = signal("Bachelor's Degree in Information Technology");
  university = signal('Egyptian E-Learning University (EELU)');
  year = signal('06/2026');
}
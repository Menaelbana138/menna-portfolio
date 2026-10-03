import { Component, signal } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-experience',
  imports: [ScrollReveal],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  trainings = signal([
    {
      title: 'Frontend Developer Trainee — Darts Solutions',
      period: '2026 – Present',
      description: 'Working on practical frontend development tasks and strengthening my skills in modern web technologies and collaborative development.'
    }
  ]);
}
import { Component, signal } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  category: string;
  items: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [ScrollReveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  skillCategories = signal<SkillCategory[]>([
    {
      category: 'Front-End',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 88 },
        { name: 'JavaScript (ES6+)', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Angular', level: 70 },
        { name: 'Bootstrap', level: 80 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'Angular CLI', level: 70 },
        { name: 'VS Code', level: 90 }
      ]
    }
  ]);
}
import { Component, computed, input } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  link: string;
}

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard {
  project = input.required<Project>();

  techList = computed(() =>
    this.project().technologies.split(',').map(tech => tech.trim())
  );
}
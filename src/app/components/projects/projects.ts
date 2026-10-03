import { Component, signal } from '@angular/core';
import { ProjectCard, Project } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = signal<Project[]>([
    {
      id: 1,
      title: 'Employee Management System',
      description: 'A CRUD application built with TypeScript, featuring generics, interfaces, live search, and localStorage persistence.',
      technologies: 'TypeScript, HTML, CSS',
      link: 'https://github.com/Menaelbana138/Typescript.git'
    },
    {
      id: 2,
      title: 'Design',
      description: 'A frontend web design project focused on creating a clean and visually appealing user interface.',
      technologies: 'HTML, CSS, JavaScript',
      link: 'https://github.com/Menaelbana138/Design'
    },
    {
      id: 3,
      title: 'Bootstrap Responsive Project',
      description: 'A fully responsive multi-section web page built using the Bootstrap grid system, with custom CSS overrides and responsive breakpoints.',
      technologies: 'HTML, CSS, Bootstrap',
      link: 'https://github.com/Menaelbana138/Bootstrap-project'
    },
    {
      id: 4,
      title: 'Front-End CSS Project',
      description: 'A frontend project focused on building a clean, responsive layout using Flexbox and CSS Grid techniques.',
      technologies: 'HTML, CSS',
      link: 'https://github.com/Menaelbana138/Project2-CSS-.git'
    }
  ]);
}
import { Component, signal } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  detail: string;
}

@Component({
  selector: 'app-certifications',
  imports: [ScrollReveal],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  certifications = signal<Certification[]>([
    {
      title: 'Front-End Web Development Diploma',
      issuer: 'Software Engineering Future (SEF)',
      date: '04/2025',
      detail: 'Score: 98.3% — Duration: 4 Months'
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco Networking Academy — MOHE 26, EELU',
      date: '01/2025',
      detail: 'Networking fundamentals: Routing & Switching, TCP/IP'
    }
  ]);
}
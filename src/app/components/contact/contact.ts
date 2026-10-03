import { Component, signal } from '@angular/core';
import { ScrollReveal } from '../../directives/scroll-reveal';

@Component({
  selector: 'app-contact',
  imports: [ScrollReveal],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  email = signal('mena94502@gmail.com');
  phone = signal('+20 101 297 2108');
  location = signal('Shibin El Kom, Monufia, Egypt');
  github = signal('https://github.com/Menaelbana138/');
  linkedin = signal('https://www.linkedin.com/in/menna-el-banna-a276ab330/');

  send(name: string, senderEmail: string, message: string): void {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${senderEmail})`);
    window.location.href = `mailto:${this.email()}?subject=${subject}&body=${body}`;
  }
}
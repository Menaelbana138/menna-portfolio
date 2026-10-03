import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
  name = signal('Menna El-Banna');
  role = signal('Junior Front-End Developer | Angular Developer');
  bio = signal('I build responsive, user-friendly web interfaces with Angular, TypeScript, HTML5, CSS3, and JavaScript (ES6+), focused on clean code and pixel-accurate UI.');

  stats = signal([
    { value: '98.3%', label: 'Diploma Score' },
    { value: '4', label: 'Projects Built' },
    { value: '2', label: 'Certifications' }
  ]);
}
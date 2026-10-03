import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollReveal implements OnInit {
  private el = inject(ElementRef);

  ngOnInit(): void {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('reveal-visible');
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
  }
}
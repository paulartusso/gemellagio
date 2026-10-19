import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

// Fades an element in with a short slide the first time it enters the viewport.
// Does nothing for visitors who prefer reduced motion.
@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() appScrollAnimation: 'left' | 'right' | 'top' | 'bottom' | '' = 'bottom';

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const node = this.el.nativeElement;
    this.renderer.setStyle(node, 'opacity', '0');
    this.renderer.setStyle(node, 'transform', this.initialTransform());
    this.renderer.setStyle(
      node,
      'transition',
      'opacity 700ms ease-out, transform 700ms cubic-bezier(0.2, 0.7, 0.2, 1)'
    );

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(node, 'opacity', '1');
          this.renderer.setStyle(node, 'transform', 'none');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initialTransform(): string {
    switch (this.appScrollAnimation) {
      case 'left':
        return 'translateX(-24px)';
      case 'right':
        return 'translateX(24px)';
      case 'top':
        return 'translateY(-24px)';
      default:
        return 'translateY(24px)';
    }
  }
}

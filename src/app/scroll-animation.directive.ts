import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective implements OnInit {
  @Input() appScrollAnimation: 'left' | 'right' | 'top' | 'bottom' = 'top';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialStyle();
  }

  private setInitialStyle() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    const transformValue = this.getInitialTransform();
    this.renderer.setStyle(this.el.nativeElement, 'transform', transformValue);
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      'opacity 1s ease-in-out, transform 1s ease-in-out'
    );
  }

  private getInitialTransform(): string {
    switch (this.appScrollAnimation) {
      case 'left':
        return 'translateX(-150px)';
      case 'right':
        return 'translateX(150px)';
      case 'top':
        return 'translateY(-150px)';
      case 'bottom':
        return 'translateY(150px)';
      default:
        return 'translateY(150px)';
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.bottom >= 0;

    if (isVisible) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'translate(0, 0)'
      );
    }
  }
}

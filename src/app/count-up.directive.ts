import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  animationFrameScheduler,
  distinctUntilChanged,
  endWith,
  interval,
  map,
  Subscription,
  takeWhile,
} from 'rxjs';

/**
 * Quadratic Ease-Out Function: f(x) = x * (2 - x)
 */
const easeOutQuad = (x: number): number => x * (2 - x);

// Counts from 0 to the target the first time the element scrolls into view,
// formatting the number for the given locale (8.849 / 8 849).
@Directive({
  selector: '[countUp]',
})
export class CountUpDirective implements OnInit, OnChanges, OnDestroy {
  @Input('countUp') count = 0;
  @Input() duration = 2000;
  @Input() locale = 'it-IT';

  private observer: IntersectionObserver | null = null;
  private animation?: Subscription;
  private started = false;

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.render(this.prefersReducedMotion() ? this.count : 0);
    if (this.prefersReducedMotion()) {
      this.started = true;
      return;
    }
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.observer?.disconnect();
          this.start();
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnChanges(): void {
    // Language or city changed after the animation ran: show the new value directly.
    if (this.started) {
      this.animation?.unsubscribe();
      this.render(this.count);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.animation?.unsubscribe();
  }

  private start(): void {
    this.started = true;
    const target = this.count;
    const startTime = animationFrameScheduler.now();
    this.animation = interval(0, animationFrameScheduler)
      .pipe(
        map(() => (animationFrameScheduler.now() - startTime) / this.duration),
        takeWhile((progress) => progress <= 1),
        map((progress) => Math.round(easeOutQuad(progress) * target)),
        endWith(target),
        distinctUntilChanged()
      )
      .subscribe((value) => this.render(value));
  }

  private render(value: number): void {
    const text = new Intl.NumberFormat(this.locale).format(value);
    this.renderer.setProperty(this.elementRef.nativeElement, 'textContent', text);
  }

  private prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}

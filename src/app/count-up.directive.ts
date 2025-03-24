import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  OnDestroy,
} from '@angular/core';
import {
  animationFrameScheduler,
  BehaviorSubject,
  combineLatest,
  switchMap,
  map,
  interval,
  takeWhile,
  endWith,
  distinctUntilChanged,
} from 'rxjs';

/**
 * Quadratic Ease-Out Function: f(x) = x * (2 - x)
 */
const easeOutQuad = (x: number): number => x * (2 - x);

@Directive({
  selector: '[countUp]',
})
export class CountUpDirective implements OnInit, OnDestroy {
  private readonly count$ = new BehaviorSubject(0);
  private readonly duration$ = new BehaviorSubject(600);
  private readonly currentCount$ = combineLatest([
    this.count$,
    this.duration$,
  ]).pipe(
    switchMap(([count, duration]) => {
      const startTime = animationFrameScheduler.now();

      return interval(0, animationFrameScheduler).pipe(
        map(() => animationFrameScheduler.now() - startTime),
        map((elapsedTime) => elapsedTime / duration),
        takeWhile((progress) => progress <= 1),
        map(easeOutQuad),
        map((progress) => Math.round(progress * count)),
        endWith(count),
        distinctUntilChanged()
      );
    })
  );

  private observer: IntersectionObserver | null = null;

  @Input('countUp')
  set count(count: number) {
    this.count$.next(count);
  }

  @Input()
  set duration(duration: number) {
    this.duration$.next(duration);
  }

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.displayCurrentCount();
          //this.observer?.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.1 }
    );

    this.observer.observe(this.elementRef.nativeElement);
  }

  private displayCurrentCount(): void {
    this.currentCount$.subscribe((currentCount) => {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'innerHTML',
        currentCount
      );
    });
  }
}

import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-accident-scene',
  standalone: true,
  templateUrl: './accident-scene.html',
  styleUrl: './accident-scene.scss',
})
export class AccidentScene implements AfterViewInit, OnDestroy {
  @ViewChild('sceneRef') sceneRef!: ElementRef<HTMLElement>;
  private observer!: IntersectionObserver;
  animating = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        this.animating = entries[0].isIntersecting;
        this.cdr.detectChanges();
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.sceneRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}

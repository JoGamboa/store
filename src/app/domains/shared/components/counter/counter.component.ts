import { Component, Input, signal, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // NO ASYNC
    // BEFORE RENDER
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // before and during rendering
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log('Changes: ', changes);

    const duration = changes['duration'];
    const message = changes['message'];
    if (duration && duration.currentValue !== duration.previousValue) {
      console.log('Duration changed from', duration.previousValue, 'to', duration.currentValue);
    }
  }

  ngOnInit() {
    // after render
    // una vez
    // async, then, subs
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('Duration: ', this.duration);
    console.log('Message: ', this.message);
    this.counterRef = window.setInterval(() => {
      this.counter.update(statePrev => statePrev + 1);
      console.log('Counter: ', this.counter());
    }, 1000);
  }

  ngAfterViewInit() {
    // after render
    // hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // after destroy
    console.log('ngOnDestoy');
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
  }
}

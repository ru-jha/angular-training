import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  template: ` <h2>Remaining Time: {{ remainingTime }}</h2> `,
})
export class TimerComponent implements OnInit, OnDestroy {
  public remainingTime = 0;
  private timerSubscription: Subscription;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerSubscription = this.timerService.timer$.subscribe(
      (remainingTime: number) => (this.remainingTime = remainingTime)
    );
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }
}

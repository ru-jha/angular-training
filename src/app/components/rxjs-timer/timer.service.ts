import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  intervalId: any;
  private timerSource = new Subject<number>();
  private startSource = new Subject();
  private pauseSource = new Subject();
  private resetSource = new Subject();

  public timer$ = this.timerSource.asObservable();

  startTimer(initialTime: number) {
    let remainingTime = initialTime;
    this.intervalId = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        this.timerSource.next(remainingTime);
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000);
    this.startSource.next(null);
  }

  pauseTimer() {
    clearInterval(this.intervalId);
    this.pauseSource.next(null);
  }

  resetTimer(initialTime: number) {
    this.timerSource.next(initialTime);
    this.resetSource.next(null);
  }
}

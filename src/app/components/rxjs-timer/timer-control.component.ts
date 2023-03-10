import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer-control',
  template: `
    <div>
      <label for="limit-input">Timer Limit:</label>
      <input type="number" id="limit-input" [(ngModel)]="timerLimit" />
      <button (click)="startTimer()">Start</button>
      <button (click)="pauseTimer()">Pause</button>
      <button (click)="resetTimer()">Reset</button>
    </div>
  `,
})
export class TimerControlComponent implements OnInit {
  public timerLimit = 0;
  public startCount = 0;
  public pauseCount = 0;

  constructor(private timerService: TimerService) {}

  ngOnInit() {}

  startTimer() {
    this.timerService.startTimer(this.timerLimit);
    this.startCount++;
  }

  pauseTimer() {
    this.timerService.pauseTimer();
    this.pauseCount++;
  }

  resetTimer() {
    this.timerService.resetTimer(this.timerLimit);
    this.startCount = 0;
    this.pauseCount = 0;
  }
}

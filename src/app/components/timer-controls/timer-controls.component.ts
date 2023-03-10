import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-controls',
  templateUrl: './timer-controls.component.html',
  styleUrls: ['./timer-controls.component.scss'],
})
export class TimerControlsComponent {
  timerLimit: number = 0;

  @Output() remainingTimeChange = new EventEmitter<number>();
  @Output() startClick = new EventEmitter<void>();
  @Output() pauseClick = new EventEmitter<void>();
  @Output() resetClick = new EventEmitter<void>();

  private intervalId: any;

  startTimer() {
    if (this.timerLimit > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.timerLimit--;
        this.remainingTimeChange.emit(this.timerLimit);
      }, 1000);
      this.startClick.emit();
      this.logTimestamp('Start');
    }
  }

  pauseTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.pauseClick.emit();
    this.logTimestamp('Pause');
  }

  resetTimer() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.timerLimit = 0;
    this.remainingTimeChange.emit(this.timerLimit);
    this.resetClick.emit();
    this.logTimestamp('Reset');
  }

  logTimestamp(action: string) {
    const timestamp = new Date().toLocaleTimeString();
    const log = `${action} button clicked at ${timestamp}`;
    console.log(log);
  }
}

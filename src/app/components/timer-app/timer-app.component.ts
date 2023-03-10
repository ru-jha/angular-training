import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-app',
  templateUrl: './timer-app.component.html',
  styleUrls: ['./timer-app.component.scss'],
})
export class TimerAppComponent {
  remainingTime: number = 0;
  startCount: number = 0;
  pauseCount: number = 0;
  timerLogs: string[] = [];
  timerInterval: any;

  onRemainingTimeChange(remainingTime: number) {
    this.remainingTime = remainingTime;
    if (remainingTime === 0) {
      this.pauseCount = 0;
      this.startCount = 0;
    }
  }

  onStartClick() {
    this.startCount++;
    this.timerInterval = setInterval(() => {
      this.timerLogs.push(new Date().toISOString());
    }, 1000);
  }

  onPauseClick() {
    this.pauseCount++;
    clearInterval(this.timerInterval);
  }
}

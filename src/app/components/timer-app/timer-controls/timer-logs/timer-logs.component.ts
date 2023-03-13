import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-logs',
  templateUrl: './timer-logs.component.html',
  styleUrls: ['./timer-logs.component.scss'],
})
export class TimerLogsComponent {
  @Input() timestamps: string[];
}

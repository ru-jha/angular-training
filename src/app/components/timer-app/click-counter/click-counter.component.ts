import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss'],
})
export class ClickCounterComponent {
  @Input() startCount: number = 0;
  @Input() pauseCount: number = 0;
}

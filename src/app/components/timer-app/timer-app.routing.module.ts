import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClickCounterComponent } from '../click-counter/click-counter.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { TimerControlsComponent } from '../timer-controls/timer-controls.component';
import { TimerLogsComponent } from '../timer-logs/timer-logs.component';
import { TimerAppComponent } from './timer-app.component';

const routes: Routes = [
  { path: '', component: TimerAppComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    TimerAppComponent,
    ClickCounterComponent,
    TimerLogsComponent,
    TimerControlsComponent,
    CountdownTimerComponent,
  ],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: [RouterModule, HttpClientModule],
})
export class TimerAppModule {}

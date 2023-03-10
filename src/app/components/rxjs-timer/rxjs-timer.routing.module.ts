import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsTimerComponent } from './rxjs-timer.component';
import { TimerComponent } from './timer.component';
import { TimerControlComponent } from './timer-control.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RxjsTimerComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [RxjsTimerComponent, TimerComponent, TimerControlComponent],
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule],
  exports: [RouterModule, HttpClientModule],
})
export class RxjsTimerModule {}

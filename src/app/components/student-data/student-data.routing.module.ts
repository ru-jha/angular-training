import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMarksTableComponent } from './student-data.component';

const routes: Routes = [
  { path: '', component: StudentMarksTableComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [StudentMarksTableComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule, HttpClientModule],
})
export class StudentDataModule {}

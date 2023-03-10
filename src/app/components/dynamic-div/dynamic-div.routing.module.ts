import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DivIndividualComponent } from '../div-individual/div-individual.component';
import { DynamicDivComponent } from './dynamic-div.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicDivComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [DivIndividualComponent, DynamicDivComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class DynamicDivModule {}

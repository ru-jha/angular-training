import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [ProductsComponent],
  imports: [RouterModule.forChild(routes), FormsModule, CommonModule],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('../app/components/landing-page/landing-page-routing.module').then(
        (m) => m.LandingPageModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./components/products/products.routing.module').then(
        (m) => m.ProductsRoutingModule
      ),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./components/student-data/student-data.routing.module').then(
        (m) => m.StudentDataModule
      ),
  },
  {
    path: 'div',
    loadChildren: () =>
      import('./components/dynamic-div/dynamic-div.routing.module').then(
        (m) => m.DynamicDivModule
      ),
  },
  {
    path: 'timer',
    loadChildren: () =>
      import('./components/timer-app/timer-app.routing.module').then(
        (m) => m.TimerAppModule
      ),
  },
  {
    path: 'rxjs-timer',
    loadChildren: () =>
      import('./components/rxjs-timer/rxjs-timer.routing.module').then(
        (m) => m.RxjsTimerModule
      ),
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

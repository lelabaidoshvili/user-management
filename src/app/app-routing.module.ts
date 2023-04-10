import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./core/auth.guard";

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import( './pages/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => m.HomePageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./pages/details-page/details-page.module').then((m) => m.DetailsPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

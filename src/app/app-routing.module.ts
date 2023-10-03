import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
 
  {
    path: 'angular', loadChildren: () => import('./modules/angular/angular.module').then(m => m.AngularModule)
  },
  { path: 'css', loadChildren: () => import('./modules/css/css.module').then(m => m.CssModule) },
  {
    path: '',
    redirectTo: '/angular',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

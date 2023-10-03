import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css.component';
import { CssItemComponent } from './css-item/css-item.component';

const routes: Routes = [{
  path: '', component: CssComponent
},
{
  path: 'cssitem/:id', component: CssItemComponent
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }

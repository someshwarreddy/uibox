import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CssComponent } from './css.component';
import { CssRoutingModule } from './css-routing.module';
import { CssItemComponent } from './css-item/css-item.component';
@NgModule({
  declarations: [CssComponent, CssItemComponent],
  imports: [
    CommonModule,
    CssRoutingModule,
  ]
})
export class CssModule { }

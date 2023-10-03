import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular-routing.module';

import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordianComponent } from './accordian/accordian.component';
import { CarousalComponent } from './carousal/carousal.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalComponent } from './modal/modal.component';
import { TabsComponent } from './tabs/tabs.component';
@NgModule({
  declarations: [
    AngularComponent,
    ImageGalleryComponent,
    DropdownComponent,
    AccordianComponent,
    CarousalComponent,
    SidebarComponent,
    ModalComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule
  ]
})
export class AngularModule { }

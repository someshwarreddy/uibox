import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarousalComponent } from './carousal/carousal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AccordianComponent } from './accordian/accordian.component';
import { ModalComponent } from './modal/modal.component';
import { TabsComponent } from './tabs/tabs.component';
TabsComponent

const routes: Routes = [

  {
    path: 'sidebar', component: SidebarComponent
  },
  {
    path: '', component: AngularComponent,
    children: [
      { path: '', component: AccordianComponent },
      { path: 'imagegallery', component: ImageGalleryComponent },
      { path: 'carousal', component: CarousalComponent },
      { path: 'dropdown', component: DropdownComponent },
      { path: 'modal', component: ModalComponent },
      { path: 'tabs', component: TabsComponent },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }

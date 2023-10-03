import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  dropDownisopen: boolean = false;
  regionArray = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
  selectedRegion: string = 'selectitem';
  dropdownToggle() {
    this.dropDownisopen = !this.dropDownisopen;

  }
  selectRegion(selectedRegion: string) {
    this.selectedRegion = selectedRegion;
    this.dropDownisopen = false;

  }

  // clickoutside dropdown close 

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const isDropdownclicked = target.querySelector('.dropdown');
    if (isDropdownclicked) {
      this.dropDownisopen = false;
    }
  }
}

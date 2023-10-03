import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  buttonOpen:any;
  modalActive:any;
  closeButton :any;
  constructor(public renderer: Renderer2){
    
  }
  ngOnInit(): void {
    this.buttonOpen = document.querySelector('.button-open');
    this.modalActive = document.querySelector('.modal-content');
    this.closeButton = document.querySelector('.close-button')
    this.renderer.listen( this.buttonOpen, 'click', () => {
      this.modalActive.classList.add('active')
    });
    this.renderer.listen( this.closeButton, 'click', () => {
      this.modalActive.classList.remove('active')
    })
  }
 
}

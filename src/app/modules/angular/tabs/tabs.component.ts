import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  btns: any;
  contentDiv: any;
  contentIcon: any;
  constructor(public renderer: Renderer2) { }
  ngOnInit(): void {
    this.btns = document.querySelectorAll('.tabs-button');
    this.contentDiv = document.querySelectorAll('.content');
    this.btns.forEach((btn: any, index: any) => {

      this.renderer.listen(btn, 'click', () => {
        this.btns.forEach((btnActiveremove: { classList: { remove: (arg0: string) => any; }; }) => btnActiveremove.classList.remove('active'))
        this.contentDiv.forEach((contentDiv: { classList: { remove: (arg0: string) => any; }; }) => contentDiv.classList.remove('active'));
        this.contentDiv[index].classList.toggle('active');
        this.btns[index].classList.toggle('active')
      });
    })
  }
}

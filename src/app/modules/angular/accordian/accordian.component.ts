import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  btns: any;
  contentDiv: any;
  contentIcon: any;
  constructor(public renderer: Renderer2) { }
  ngOnInit(): void {
    this.btns = document.querySelectorAll('.section-button');
    this.contentDiv = document.querySelectorAll('.content');
    this.contentIcon = document.querySelectorAll('.icon');
    this.contentIcon[0].classList.add('active');
    this.btns.forEach((btn: any, index: any) => {
      this.renderer.listen(btn, 'click', () => {
        this.contentDiv.forEach((contentDiv: { classList: { remove: (arg0: string) => any; }; }) => contentDiv.classList.remove('active'));;
        this.contentDiv[index].classList.toggle('active');
        this.contentIcon.forEach((contenticon: { classList: { remove: (arg0: string) => any; }; }) => contenticon.classList.remove('active'));;
        this.contentIcon[index].classList.add('active');
      });
    })

  }

}

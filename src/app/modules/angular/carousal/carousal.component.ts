import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  slides: any;
  left: any;
  right: any;
  currentSlideIndex: any;
  interval: any;

  constructor(public renderer: Renderer2) { }
  clipboardValue = 'Angular copy text demo';

  copyText(): void {
    navigator.clipboard.writeText(this.clipboardValue).catch(() => {
      console.error("Unable to copy text");
    });
  }
  ngOnInit(): void {
    this.slides = document.querySelectorAll('.img');
    this.left = document.getElementById("left");
    this.right = document.getElementById("right");
    this.currentSlideIndex = 0;
    this.interval = setInterval(this.autoSlide.bind(this), 2000);
    this.renderer.listen(this.left, 'click', () => {
      this.currentSlideIndex--;
      this.showSlide();
      this.resetInterval()
    })
    this.renderer.listen(this.right, 'click', () => {
      this.currentSlideIndex++;
      this.showSlide();
      this.resetInterval();
    })

  }


  showSlide() {
    if (this.currentSlideIndex > this.slides.length - 1) {
      this.currentSlideIndex = 0;
    } else if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 1;
    }
    this.slides.forEach((slide: any) => slide.classList.remove('active'));
    this.slides[this.currentSlideIndex].classList.add('active');
  }

  autoSlide() {
    this.currentSlideIndex++;
    this.showSlide();
  }
  
  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(this.autoSlide.bind(this), 2000);
  }

}

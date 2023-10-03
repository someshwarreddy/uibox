import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  displayedImage: any;
  thumbarImage: any;
  btn: any;
  overlay: any;
  ngOnInit(): void {
    this.displayedImage = document.querySelector('.displayed-img');
    this.thumbarImage = document.querySelector('.thumb-bar-image');
    this.btn = document.querySelector('button');
  }
  /* Declaring the array of image filenames */
  images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`];
  /* Declaring the alternative text for each image file */

  alts = [
    { 'pic1.jpg': 'Closeup of a human eye' },
    { 'pic2.jpg': 'Rock that looks like a wave' },
    { 'pic3.jpg': 'Purple and white pansies' },
    { 'pic4.jpg': 'Section of wall from a pharoah\'s tomb' },
    { 'pic5.jpg': 'Large moth on a leaf' }
  ]
  changeImage(e: any, image: any) {
    const alt = this.displayedImage.getAttribute('alt');
    // this.thumbarImage.setAttribute('alt', this.alts[image as keyof typeof this.alts]);
    this.displayedImage.src = e.target.src;
    this.displayedImage.alt = e.target.alt;
    this.overlay = document.querySelector('.overlay');
  }

  toggle() {
    const btnClass = this.btn.getAttribute('class');
    if (btnClass === 'dark') {
      this.btn.setAttribute('class', 'light');
      this.btn.textContent = 'Lighten';
      this.overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      this.btn.setAttribute('class', 'dark');
      this.btn.textContent = 'Darken';
      this.overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  }
}

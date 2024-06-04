import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CarouselComponent {
  currentSlide = 0;
  slides = [
    { image: '../../../assets/images/image1.webp', description: 'Descrizione per immagine 1' },
    { image: '../../../assets/images/image2.webp', description: 'Descrizione per immagine 2' },
    { image: '../../../assets/images/image6.webp', description: 'Descrizione per immagine 5' },
    { image: '../../../assets/images/image7.webp', description: 'Descrizione per immagine 5' },
    { image: '../../../assets/images/image8.webp', description: 'Descrizione per immagine 5' },
  ];

  showSlide(index: number) {
    if (index >= this.slides.length) {
      this.currentSlide = 0;
    } else if (index < 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide = index;
    }
  }

  nextSlide() {
    this.showSlide(this.currentSlide + 1);
  }

  prevSlide() {
    this.showSlide(this.currentSlide - 1);
  }
}

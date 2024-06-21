import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentSlide = 0;
  slides = [
    { image: '../../../assets/images/image1.webp', description: 'Inizia a risparmiare con noi', link: '' },
    { image: '../../../assets/images/image2.webp', description: 'Investi il tuo denaro', link: '' },
    { image: '../../../assets/images/image6.webp', description: 'Paga con la tua carta personalizzata', link: '' },
    { image: '../../../assets/images/image7.webp', description: 'Siamo presenti in tutta Europa', link: '' },
    { image: '../../../assets/images/image8.webp', description: 'Valute nazionali e internazionali', link: '/exchange' },
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

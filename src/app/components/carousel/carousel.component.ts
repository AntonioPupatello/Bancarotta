import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [NgFor, CarouselComponent, CarouselInnerComponent, CarouselItemComponent, ThemeDirective ]
})
export class Carousel01Component implements OnInit {

  slides: any[] = new Array(2).fill({ id: -1, src: '', title: '', subtitle: '' });

  ngOnInit(): void {
    this.slides[0] = {
      src: 'assets/images/image1.webp', title: 'Slide 1',
    };
    this.slides[1] = {
      src: 'assets/images/image2.webp', title: 'Slide 2'
    };
  }

  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }
}
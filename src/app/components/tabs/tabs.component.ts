import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactComponent } from '../../pages/contact/contact.component';
import { Carousel01Component } from '../carousel/carousel.component';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group',
  templateUrl: 'tabs.component.html',
  styleUrl: 'tabs.component.scss',
  standalone: true,
  imports: [MatTabsModule, ContactComponent, Carousel01Component ],
})
export class TabGroupBasicExample {}

//Qui sarebbe da mettere export class TabsComponent
import {Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactComponent } from '../../components/contact/contact.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { StoryComponent } from '../story/story.component';

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group',
  templateUrl: 'tabs.component.html',
  styleUrl: 'tabs.component.scss',
  standalone: true,
  imports: [MatTabsModule, ContactComponent, CarouselComponent, StoryComponent ],
})
export class TabComponent {}

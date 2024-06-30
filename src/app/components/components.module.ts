import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { StoryComponent } from './story/story.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from '@angular/router';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
import { TableComponent } from './table/table.component';
import { SelectComponent } from './select/select.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AccountDetailComponent } from './account/account-detail/account-detail.component';
import { AccountErrorComponent } from './account/error/error.component';
import { AccountTableComponent } from './account/table/table.component';
import { AccountFormComponent } from './account/form/form.component';
import { AccountListComponent } from './account/account-list/account-list.component';
import { AccountNewComponent } from './account/account-new/account-new.component';


@NgModule({
  declarations: [
    CarouselComponent,
    ContactComponent,
    FooterComponent,
    LayoutComponent,
    StepperComponent,
    StoryComponent,
    TabsComponent,
    CurrencyConvertComponent,
    TableComponent,
    SelectComponent,
    AccountDetailComponent,
    AccountErrorComponent,
    AccountFormComponent,
    AccountTableComponent,
    AccountListComponent,
    AccountNewComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    RouterModule,
    CurrencyPipe,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [
    CarouselComponent,
    ContactComponent,
    FooterComponent,
    LayoutComponent,
    StepperComponent,
    StoryComponent,
    TabsComponent,
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule,
    MatToolbar,
    MatToolbarModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    CurrencyConvertComponent,
    TableComponent,
    SelectComponent,
    AccountDetailComponent,
    AccountErrorComponent,
    AccountFormComponent,
    AccountTableComponent,
    AccountListComponent,
    AccountNewComponent,
  ]
})
export class ComponentsModule { 
  static forRoot(): ModuleWithProviders<ComponentsModule> {
    return {
      ngModule: ComponentsModule,
      providers: [/* Se hai dei servizi da fornire */]
    };
  }
}
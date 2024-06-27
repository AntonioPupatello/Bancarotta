import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { ACCOUNT_URL, API_URL, CURRENCY_URL } from './config/tokens';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PagesModule,
    ComponentsModule,
    CommonModule,
    RouterOutlet,  
    RouterModule,
    ReactiveFormsModule,
    // HttpClientModule,
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    {
      provide: API_URL,
      useValue: 'https://dummyjson.com'
    },
    {
      provide: CURRENCY_URL,
      useValue: 'https://open.er-api.com/v6/latest'
    },
    {
      provide: ACCOUNT_URL,
      useValue: '/api'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

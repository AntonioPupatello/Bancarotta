import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { API_URL, CURRENCY_URL } from './config/tokens';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
    // HttpClientModule,
  ],
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: API_URL,
      useValue: 'https://dummyjson.com'
    },
    {
      provide: CURRENCY_URL,
      useValue: 'https://open.er-api.com/v6/latest'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

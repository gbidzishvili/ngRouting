import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home-pg/home.component';
import { GalleryComponent } from './views/gallery-pg/gallery.component';
import { AboutUsComponent } from './views/about-us-pg/about-us.component';
import { ContactComponent } from './views/contact-pg/contact.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { GalleryInnerComponent } from './gallery-inner/gallery-inner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    GalleryInnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

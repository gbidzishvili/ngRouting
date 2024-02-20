import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home-pg/home.component';
import { ContactComponent } from './views/contact-pg/contact.component';
import { GalleryComponent } from './views/gallery-pg/gallery.component';
import { AboutUsComponent } from './views/about-us-pg/about-us.component';
import { GalleryInnerComponent } from './gallery-inner/gallery-inner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  { path: 'gallery-inner/:id/:id', component: GalleryInnerComponent },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

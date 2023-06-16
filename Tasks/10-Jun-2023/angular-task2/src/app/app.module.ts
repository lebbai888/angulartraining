import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './common/footer/footer.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContentComponent } from './content/content.component';
import { FeatureComponent } from './feature/feature.component';
import { GalleryContainerComponent } from './gallery-container/gallery-container.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    MenuBarComponent,
    ContentComponent,
    FeatureComponent,
    GalleryContainerComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

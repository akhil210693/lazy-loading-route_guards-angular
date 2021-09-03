import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AuthGuard } from './guards/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { BlogLatestComponent } from './blog-latest/blog-latest.component';
import { BlogOldComponent } from './blog-old/blog-old.component';
import { ChildguardGuard } from './guards/childguard.guard';
import { CheckGuard } from './guards/check.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    BlogComponent,
    BlogLatestComponent,
    BlogOldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard,ChildguardGuard,CheckGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

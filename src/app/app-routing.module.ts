import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [{'path':'',redirectTo: '/home', pathMatch: 'full'},
{'path':'home','component':HomeComponent},
{'path':'about','component':AboutComponent},
{'path':'gallery','component':GalleryComponent},
{'path':'contact','component':ContactComponent,
 canDeactivate:[CheckGuard]
},
{'path':'blog','component':BlogComponent,
canActivate:[AuthGuard],data:['ADMIN'],
canActivateChild:[ChildguardGuard],
children:[
  {'path':'',redirectTo: 'latest', pathMatch: 'full',data:['ADMIN']},
  {'path':'latest','component':BlogLatestComponent,data:['ADMIN']},
  {'path':'old','component':BlogOldComponent}
]},
{'path':'**',redirectTo: ''}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

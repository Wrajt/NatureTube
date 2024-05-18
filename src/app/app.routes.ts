import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'video', component: VideoComponent, pathMatch: 'full' },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

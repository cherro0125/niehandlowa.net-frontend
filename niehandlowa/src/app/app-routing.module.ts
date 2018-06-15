import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddPOIComponent } from './components/add-poi/add-poi.component';

// components
import { MapViewComponent } from './views/map/map-view.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'landing', component: LandingPageComponent},
  { path: 'map', component: MapViewComponent },
  { path: 'add', component: AddPOIComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }

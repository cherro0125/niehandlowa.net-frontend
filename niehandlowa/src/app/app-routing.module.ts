import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPOIComponent } from './views/add-poi/add-poi.component';

// components
import { MapViewComponent } from './views/map/map-view.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { PoiListComponent } from './views/poi-list/poi-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'map', component: MapViewComponent },
  { path: 'add', component: AddPOIComponent },
  {path: 'all', component: PoiListComponent}
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

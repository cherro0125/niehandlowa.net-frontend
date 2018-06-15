import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { AddPOIComponent } from './components/add-poi/add-poi.component';

// components
import { MapViewComponent } from './views/map-view/map-view.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'map', component: MapComponent },
  {path: 'add', component: AddPOIComponent}
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

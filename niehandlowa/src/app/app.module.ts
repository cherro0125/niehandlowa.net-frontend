import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MatInputModule } from '@angular/material/input';

// components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapViewComponent } from './views/map-view/map-view.component';
import { AddPOIComponent } from './components/add-poi/add-poi.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent
    AddPOIComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKTZ15_EjqEOLG4e72RR4R3XrCfykOXb8'
    }),
    NgbModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

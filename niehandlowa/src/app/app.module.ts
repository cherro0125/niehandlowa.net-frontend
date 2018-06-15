import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';

// components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapViewComponent } from './views/map/map-view.component';
import { AddPOIComponent } from './views/add-poi/add-poi.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { MapService } from './services/map.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    AddPOIComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKTZ15_EjqEOLG4e72RR4R3XrCfykOXb8'
    }),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }

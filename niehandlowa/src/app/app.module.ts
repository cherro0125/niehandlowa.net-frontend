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
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule} from '@angular/material/card';

// components
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MapViewComponent } from './views/map/map-view.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { MapService } from './services/map.service';
import { PoiListComponent } from './views/poi-list/poi-list.component';
import { AddPoiDialogComponent } from './views/dialogs/add-poi-dialog/add-poi-dialog.component';
import { PoiService } from './services/poi.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    LandingPageComponent,
    PoiListComponent,
    AddPoiDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDKTZ15_EjqEOLG4e72RR4R3XrCfykOXb8'
    }),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CdkTableModule
  ],
  providers: [MapService, PoiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

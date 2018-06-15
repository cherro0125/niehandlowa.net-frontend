import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ToastrModule } from 'ngx-toastr';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatOptionModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';

// components
import { AppComponent } from './app.component';
import { MapViewComponent } from './views/map/map-view.component';
import { LandingPageComponent } from './views/landing-page/landing-page.component';
import { MapService } from './services/map.service';
import { PoiListComponent } from './views/poi-list/poi-list.component';
import { AddPoiDialogComponent } from './views/dialogs/add-poi-dialog/add-poi-dialog.component';
import { PoiService } from './services/poi.service';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    LandingPageComponent,
    PoiListComponent,
    AddPoiDialogComponent
  ],
  entryComponents: [
    AddPoiDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
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
    MatOptionModule,
    MatSelectModule,
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

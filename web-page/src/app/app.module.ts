import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DeparturesComponent } from './departures/departures.component';
import { DepartureService } from './departures/departure.service';
import { DepartureCreateComponent } from './departures/departure-create/departure-create.component';
import { FlightToFilterPipe } from './pipes/flight-to-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DeparturesComponent,
    DepartureCreateComponent,
    FlightToFilterPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    BrowserAnimationsModule


  ],
  providers: [DepartureService],
  bootstrap: [AppComponent]
})
export class AppModule { }

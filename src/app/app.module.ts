import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { CountryService }       from './country.service';
import { DutyrateService }      from './dutyrate.service';


@NgModule({
  imports:      [
    BrowserModule
    FormsModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent
   ],
  providers: [
    CountryService,
    DutyrateService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

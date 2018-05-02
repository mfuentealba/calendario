import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FullCalendarModule } from 'ng-fullcalendar';

import { AppComponent } from './app.component';
import { EventSesrvice } from './event.service';

import { ModalAgendarComponent } from './components/modal.agendar/modal.agendar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FullCalendarModule ],
  declarations: [ AppComponent, ModalAgendarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ EventSesrvice ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PersonaModule } from './components/persona/persona.module';
import { SharedModule } from './components/shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { APP_ROUTING } from './app.routes';
import { AddressModule } from './components/address/address.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonaModule,
    SharedModule,
    HomeModule,
    AddressModule,
    APP_ROUTING
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

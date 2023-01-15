import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NvMedecinComponent } from './nv-medecin/nv-medecin.component';
import { NvPharmacieComponent } from './nv-pharmacie/nv-pharmacie.component';
import { NvVisiteComponent } from './nv-visite/nv-visite.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NvMedecinComponent,
    NvPharmacieComponent,
    NvVisiteComponent,
    NavBarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

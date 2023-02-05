import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NvVisiteComponent } from './nv-visite/nv-visite.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { DndDirective } from './dnd.directive';
import { MedicamentComponent } from './medicament/medicament.component';
import { GrossisteComponent } from './grossiste/grossiste.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { CompAnchorDirective } from './comp-anchor.directive';
import { MedecinComponent } from './medecin/medecin.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NvVisiteComponent,
    NavBarComponent,
    ContactComponent,
    ProfileComponent,
    DndDirective,
    MedicamentComponent,
    GrossisteComponent,
    MedicamentsComponent,
    PharmacieComponent,
    PharmaciesComponent,
    CompAnchorDirective,
    MedecinComponent,
    MedecinsComponent,
    PageConnexionComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

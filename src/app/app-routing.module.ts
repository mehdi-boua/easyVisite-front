import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrossisteComponent } from './grossiste/grossiste.component';
import { HomeComponent } from './home/home.component';
import { MedecinComponent } from './medecin/medecin.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { MedicamentsComponent } from './medicaments/medicaments.component';
import { NvVisiteComponent } from './nv-visite/nv-visite.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { PharmacieComponent } from './pharmacie/pharmacie.component';
import { PharmaciesComponent } from './pharmacies/pharmacies.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component: PageConnexionComponent},
  {path:'newDoc', component: MedecinComponent},
  {path:'newPharm', component: PharmacieComponent},
  {path:'addVisit', component: NvVisiteComponent},
  {path:'profile', component: ProfileComponent},
  {path:'medicaments', component: MedicamentsComponent},
  {path:'grossistes', component: GrossisteComponent},
  {path:'pharmacies', component: PharmaciesComponent},
  {path:'pharmacies/:id', component: PharmacieComponent},
  {path:'medecins', component: MedecinsComponent},
  {path:'medecins/:id', component: MedecinComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

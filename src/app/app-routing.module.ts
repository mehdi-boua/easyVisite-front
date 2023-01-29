import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NvMedecinComponent } from './nv-medecin/nv-medecin.component';
import { NvPharmacieComponent } from './nv-pharmacie/nv-pharmacie.component';
import { NvVisiteComponent } from './nv-visite/nv-visite.component';
import { PageConnexionComponent } from './page-connexion/page-connexion.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component: PageConnexionComponent},
  {path:'newDoc', component: NvMedecinComponent},
  {path:'newPharm', component: NvPharmacieComponent},
  {path:'addVisit', component: NvVisiteComponent},
  {path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

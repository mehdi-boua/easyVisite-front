import { HttpClient } from '@angular/common/http';
import { Component, ComponentRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CompAnchorDirective } from '../comp-anchor.directive';
import { PharmaciesService } from '../services/pharmacies.service';

@Component({
  selector: 'app-pharmacies',
  templateUrl: './pharmacies.component.html',
  styleUrls: ['./pharmacies.component.scss']
})

export class PharmaciesComponent {
  modif = false
  idModif = 0
  @ViewChild(CompAnchorDirective, {static: true}) anchor!: CompAnchorDirective

  constructor(public router: Router ,public service: PharmaciesService, private http: HttpClient){}

  supprimer(pharmacie){
    let index = this.service.listePharmacies.indexOf(pharmacie)
    this.service.listePharmacies.splice(index, 1)

    this.http.delete("/api/pharmacies/"+pharmacie.id).subscribe()
  }

}

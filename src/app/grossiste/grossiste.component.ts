import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Grossiste } from '../classes/grossiste.class';
import { GrossitesService } from '../services/grossites.service';

@Component({
  selector: 'app-grossiste',
  templateUrl: './grossiste.component.html',
  styleUrls: ['./grossiste.component.scss']
})
export class GrossisteComponent {
  newGros = false

  @Input() nouveauGrossiste: string = ""

  constructor(public service: GrossitesService, private http: HttpClient){}

  supprimer(grossiste){
    let index = this.service.listeGrossistes.indexOf(grossiste)
    this.service.listeGrossistes.splice(index, 1)

    this.http.delete("/api/grossistes/"+grossiste.id).subscribe()
  }

  enregistrerNouveau(){
    if(this.nouveauGrossiste != ""){
      this.service.maxId++
      this.service.listeGrossistes.push(new Grossiste(this.service.maxId ,this.nouveauGrossiste))
      
      this.http.post("/api/grossistes",{"nom":this.nouveauGrossiste}).subscribe()
      this.nouveauGrossiste = ""
    }
    this.newGros = false

  }
}

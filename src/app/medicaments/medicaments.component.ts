import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Input } from '@angular/core';
import { Medoc } from '../classes/medoc.class';
import { MedocsService } from '../services/medocs.service';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.scss']
})
export class MedicamentsComponent {
  newMedoc = false

  @Input() nouveauMedoc: string = ""

  constructor(public service: MedocsService, private http: HttpClient){}

  supprimer(medoc){
    let index = this.service.listeMedocs.indexOf(medoc)
    this.service.listeMedocs.splice(index, 1)

    this.http.delete("/api/medicaments/"+medoc.id)
  }

  enregistrerNouveau(){
    if(this.nouveauMedoc != ""){
      this.service.maxId++
      this.service.listeMedocs.push(new Medoc(this.service.maxId ,this.nouveauMedoc))
      this.http.post('/api/medicaments', {"nom": this.nouveauMedoc}).subscribe()
      this.nouveauMedoc = ""
    }    
    this.newMedoc = false

    // TODO: ajouter a la bd
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.key == "Escape"){
      this.newMedoc = false
    }
    if(event.key == "Enter"){
      this.enregistrerNouveau()
    }
  }
}

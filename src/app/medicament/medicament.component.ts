import { Component } from '@angular/core';
import { Medoc } from '../classes/medoc.class';
import { MedocsService } from '../services/medocs.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.scss']
})
export class MedicamentComponent {
  listeMedicaments: Medoc[] = []

  constructor(service: MedocsService){
    this.listeMedicaments = service.listeMedocs
  }
}

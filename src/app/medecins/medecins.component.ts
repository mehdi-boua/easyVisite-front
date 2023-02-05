import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinsService } from '../services/medecins.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent {
  constructor(public user: UserService, public router: Router, public docs: MedecinsService, private http: HttpClient){}

  supprimer(doc){
    let index = this.docs.listeMedecins.indexOf(doc)
    this.docs.listeMedecins.splice(index, 1)

    this.http.delete("/api/medecins/"+doc.id).subscribe()
  }
}

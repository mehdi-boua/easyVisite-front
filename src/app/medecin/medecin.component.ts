import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medecin } from '../classes/medcin.class';
import { MedecinsService } from '../services/medecins.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit{
  nouveau = true

  @Input() id = 0
  @Input() nom = ""
  @Input() prenom = ""
  @Input() commune = ""
  @Input() departement = ""
  @Input() specialite = "Séléctionnez la specialité"
  @Input() secteur = "Séléctionnez le secteur"

  constructor(public user: UserService, private router: Router, private activeRoute: ActivatedRoute, private docs: MedecinsService,
    private http: HttpClient){
      
      this.nouveau = this.activeRoute.snapshot.paramMap.get('id') == null ? true : false
      if(!this.nouveau){
        this.id = Number(this.activeRoute.snapshot.paramMap.get('id')!)
        this.http.get<Medecin>('/api/medecins/'+this.id).subscribe(data => {        
          
          if(data != null){
            this.nom = data.nom
            this.prenom = data.prenom
            this.commune = data.commune
            this.departement = data.departement
            this.specialite = data.specialite
            this.secteur = data.secteur
          }else{
            this.nouveau = true
            this.id = 0
          }
        })
  
      }
  }

  ngOnInit(): void {
    if(!this.user.connected){
      this.router.navigateByUrl("/login")
    }
  }

  submitButtonClick(){
    //TODO: Complete this function
    let doc
    if(this.nouveau){
      doc = new Medecin()
      this.docs.maxId++
      doc.id = this.docs.maxId

      this.docs.listeMedecins.push(doc)
    }
    else{
      doc = this.docs.getById(this.id)!
    }
    
    doc.nom = this.nom
    doc.prenom = this.prenom
    doc.commune = this.commune
    doc.departement = this.departement
    doc.secteur = this.secteur
    doc.specialite = this.specialite

    if(this.nouveau){
      this.http.post('/api/medecins', doc).subscribe()
    }else{
      this.http.put('/api/medecins/'+this.id, doc).subscribe()
    }

    this.router.navigateByUrl("/")
  }
  
  cancelButtonClick(){
    this.router.navigateByUrl("/")
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grossiste } from '../classes/grossiste.class';
import { Pharmacie } from '../classes/pharmacie.class';
import { GrossitesService } from '../services/grossites.service';
import { PharmaciesService } from '../services/pharmacies.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pharmacie',
  templateUrl: './pharmacie.component.html',
  styleUrls: ['./pharmacie.component.scss']
})
export class PharmacieComponent implements OnInit{
  newPharm = true
  pharm: Pharmacie 

  @Input() id = 0
  @Input() reseau = ""
  @Input() officine = ""
  @Input() commune = ""
  @Input() departement = ""
  @Input() listeGrossistes: Array<Grossiste> = []

  constructor(public router: Router, public grossistes: GrossitesService, private pharmacies: PharmaciesService, 
    private activeRoute: ActivatedRoute, private user: UserService, private http: HttpClient){}

  ngOnInit() {
    if(!this.user.connected){
      this.router.navigateByUrl("/login")
    }

    this.id = this.activeRoute.snapshot.paramMap.get('id') != null ? Number(this.activeRoute.snapshot.paramMap.get('id')!) : 0
      if(this.id != 0){
        this.http.get<Pharmacie>("/api/pharmacies/"+this.id).subscribe(data => {
          //this.pharm = data
          if(data != null){
            
            this.pharm = new Pharmacie()
            this.pharm.id = data.id
            this.pharm.officine = data.officine
            this.pharm.commune = data.commune
            this.pharm.departement = data.departement
            this.pharm.listeGrossistes = []
            
            for(let grossiste of data.listeGrossistes){
              let gros = new Grossiste(grossiste.id, grossiste.nom);
              this.pharm.listeGrossistes.push(gros);
            }
            console.log("pharm:\t\t" + this.pharm.listeGrossistes)
            console.log("pharm:\t\t" + this.listeGrossistes)
            
            this.newPharm = false
            
            this.id = this.pharm.id
            this.officine = this.pharm.officine
            this.commune = this.pharm.commune
            this.departement = this.pharm.departement
            for(let grossiste of this.pharm.listeGrossistes){
              var gros = new Grossiste(grossiste.id, grossiste.nom);
              this.listeGrossistes.push(gros)
            }
          }

        })        
      }
  }

  submitButtonClick(){
    let pharm
    if(this.newPharm){
      this.pharmacies.maxId++
      pharm = new Pharmacie()
      pharm.id = this.pharmacies.maxId
      
      this.pharmacies.listePharmacies.push(pharm)
    }
    else{
      pharm = this.pharmacies.getById(this.pharm!.id)  
    }

    pharm.officine = this.officine
    pharm.commune = this.commune
    pharm.departement = this.departement
    pharm.listeGrossistes = this.listeGrossistes

    var liste: number[] = []
    this.listeGrossistes.forEach((elem) => liste.push(elem.id))

    var data = {
      'id': pharm.id,
      'officine': pharm.officine,
      'commune': pharm.commune,
      'departement': pharm.departement,
      'listeGrossistes': liste
    }

    console.log(data)

    if(this.id == 0){
      this.http.post("/api/pharmacies", {
        
      }).subscribe()
    }
    else{
      this.http.put("/api/pharmacies/"+pharm.id, pharm).subscribe()
    }

    this.router.navigateByUrl("/")
  }

  addGrossiste(grossiste){
    if(this.containsGrossiste(grossiste.id)){
      let ind = this.listeGrossistes.indexOf(grossiste.id)
      this.listeGrossistes.splice(ind, 1)
    }else{
      this.listeGrossistes.push(grossiste.id)
    }
  }
  
  containsGrossiste(id){
    let contains = false
    this.listeGrossistes.forEach(grossiste => {
      if(grossiste.id == id ){
        contains = true
      }
    })

    return contains
  }
}

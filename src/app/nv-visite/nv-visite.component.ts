import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedecinsService } from '../services/medecins.service';
import { MedocsService } from '../services/medocs.service';
import { PharmaciesService } from '../services/pharmacies.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nv-visite',
  templateUrl: './nv-visite.component.html',
  styleUrls: ['./nv-visite.component.scss']
})
export class NvVisiteComponent implements OnInit{
  docForm : boolean
  pharmForm: boolean

  // doc Variables
  @Input() docId
  
  constructor(public router: Router, private user:UserService, public docs: MedecinsService, 
    public pharmas: PharmaciesService, public medocs: MedocsService){}

  ngOnInit(): void {
    if(!this.user.connected){
      this.router.navigateByUrl("/login")
    }

    this.docForm = document.querySelector("#choice-doc")?.classList.contains("selected")!
    this.pharmForm = document.querySelector("#choice-pharm")?.classList.contains("selected")!
  }

  validerDoc(){
    //TODO: complete here
  }


  docChoiceClick(){
    document.querySelector("#choice-pharm")?.classList.remove("selected")
    document.querySelector("#choice-doc")?.classList.add("selected")

    this.pharmForm = false
    this.docForm = true
  }
  
  pharmChoiceClick(){
    document.querySelector("#choice-doc")?.classList.remove("selected")
    document.querySelector("#choice-pharm")?.classList.add("selected")

    this.docForm = false
    this.pharmForm = true
  }
}

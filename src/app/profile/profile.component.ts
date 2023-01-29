import { Component, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  modif: boolean = true
  showPass: boolean = false
  @Input()
  nom: string
  @Input()
  prenom: string
  @Input()
  mail: string
  @Input()
  mdp: string

  constructor (public user: UserService){
    this.nom = user.nom
    this.prenom = user.prenom
    this.mail = user.mail
    this.mdp = user.mdp
  }

  modifierClick(){
    this.modif = !this.modif
  }
  
  enregistrerClick(){
    this.user.nom = this.nom
    this.user.prenom = this.prenom
    this.user.mail = this.mail
    this.user.mdp = this.mdp
    
    
    this.modif = !this.modif
    //TODO: Appeler l'api pour enregistrer
  }
  
  annulerClick(){
    this.nom = this.user.nom
    this.prenom = this.user.prenom
    this.mail = this.user.mail
    this.mdp = this.user.mdp

    this.modif = !this.modif
  }

  passVisibility(){
    this.showPass = !this.showPass
  }

  pdpChange(){
    document.querySelector("#newPdp")?.classList.remove("hide")
  }

  hideNewPdp(){
    document.querySelector("#newPdp")?.classList.add("hide")
  }
}

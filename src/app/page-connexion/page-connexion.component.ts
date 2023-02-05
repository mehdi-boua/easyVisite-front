import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user.class';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent {
  @Input() public mail : string = ""
  @Input() public mdp : string = ""

  constructor(private router:Router, private user:UserService, private http: HttpClient){}

  connectButtonClick(){
    let data = {
      'mail': this.mail,
      'mdp': this.mdp
    }
    this.http.post<User>('/api/login', data, {observe:'response'}).subscribe(data =>{
      if(data.status == 200){
        this.user.connected = true
        let body = data.body

        this.user.id = body!.id
        this.user.nom = body!.nom
        this.user.prenom = body!.prenom
        this.user.mail = body!.mail
        this.user.mdp = body!.mdp
     
        this.router.navigateByUrl("/")
      }else{
        this.mail = ""
        this.mdp = ""
      }
    })

  }
}

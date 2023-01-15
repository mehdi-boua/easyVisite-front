import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page-connexion',
  templateUrl: './page-connexion.component.html',
  styleUrls: ['./page-connexion.component.scss']
})
export class PageConnexionComponent {
  constructor(private router:Router, private user:UserService){}

  connectButtonClick(){
    this.user.connected = true
    this.router.navigateByUrl("/")
  }
}

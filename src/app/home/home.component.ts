import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public router: Router, public user: UserService){}

  newDocClick(){
    this.router.navigateByUrl('/newDoc')
  }

  newPharmClick(){
    this.router.navigateByUrl("/newPharm")
  }

  addVisiteClick(){
    this.router.navigateByUrl("/addVisit")
  }
}

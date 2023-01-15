import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(public user: UserService, private router: Router){}

  loginButtonClick(){
    this.user.connected = true
    this.router.navigateByUrl("/login")
  }

  logoutButtonClick(){
    this.user.connected = false
    this.router.navigateByUrl("/")
  }

}

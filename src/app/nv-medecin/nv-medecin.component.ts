import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-nv-medecin',
  templateUrl: './nv-medecin.component.html',
  styleUrls: ['./nv-medecin.component.scss']
})
export class NvMedecinComponent {
  constructor(public user: UserService, private router: Router){}

  submitButtonClick(){
    //TODO: Complete this function
    this.router.navigateByUrl("/")
  }
  
  cancelButtonClick(){
    this.router.navigateByUrl("/")
  }
}

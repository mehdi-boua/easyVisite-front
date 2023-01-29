import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nv-medecin',
  templateUrl: './nv-medecin.component.html',
  styleUrls: ['./nv-medecin.component.scss']
})
export class NvMedecinComponent implements OnInit{
  constructor(public user: UserService, private router: Router){}

  ngOnInit(): void {
    if(!this.user.connected){
      this.router.navigateByUrl("/login")
    }
  }

  submitButtonClick(){
    //TODO: Complete this function
    this.router.navigateByUrl("/")
  }
  
  cancelButtonClick(){
    this.router.navigateByUrl("/")
  }

  savePosClick(){
    //TODO: write this function
  }

}

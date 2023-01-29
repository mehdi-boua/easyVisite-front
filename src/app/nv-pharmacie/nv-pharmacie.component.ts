import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nv-pharmacie',
  templateUrl: './nv-pharmacie.component.html',
  styleUrls: ['./nv-pharmacie.component.scss']
})
export class NvPharmacieComponent implements OnInit{
  constructor(private router: Router, public user: UserService){}

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

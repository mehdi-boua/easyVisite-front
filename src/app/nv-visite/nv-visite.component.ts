import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nv-visite',
  templateUrl: './nv-visite.component.html',
  styleUrls: ['./nv-visite.component.scss']
})
export class NvVisiteComponent implements OnInit{
  constructor(private router: Router, private user:UserService){}
  docForm : boolean
  pharmForm: boolean

  ngOnInit(): void {
    if(!this.user.connected){
      this.router.navigateByUrl("/login")
    }

    this.docForm = document.querySelector("#choice-doc")?.classList.contains("selected")!
    this.pharmForm = document.querySelector("#choice-pharm")?.classList.contains("selected")!
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

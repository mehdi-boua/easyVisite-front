import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { max } from 'rxjs';
import { Medecin } from '../classes/medcin.class';

@Injectable({
  providedIn: 'root'
})
export class MedecinsService implements OnInit{
  maxId = 0
  listeMedecins: Medecin[] = []

  constructor( private http: HttpClient) {
    this.http.get<Medecin[]>('/api/medecins').subscribe(data => {
      data.forEach(doc => {
        this.listeMedecins.push(doc)
      })
    })
  }

  ngOnInit(): void {
    this.listeMedecins.forEach(element =>{
      if(element.id > this.maxId){
        this.maxId = element.id
      }
    })    
  }

  getById(id){
    for(let doc of this.listeMedecins){
      if(doc.id == id){
        return doc
      }
    }

    return null
  }

}

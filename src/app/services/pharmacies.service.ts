import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Pharmacie } from '../classes/pharmacie.class';

@Injectable({
  providedIn: 'root'
})
export class PharmaciesService implements OnInit{
  listePharmacies: Array<Pharmacie> = []
  maxId = 0

  constructor(private http: HttpClient) { 
    this.http.get<Pharmacie[]>("/api/pharmacies").subscribe( data => {
      data.forEach(elem => {
        this.listePharmacies.push(elem)
      })
    })

  }

  ngOnInit(): void {
    this.listePharmacies.forEach(pharm => {
      if(pharm.id > this.maxId){
        this.maxId = pharm.id
      }
    })
  }

  getById(id){
    for(let pharm of this.listePharmacies){
      if(pharm.id == id){
        return pharm
      }
    }

    return null
  }
}

import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Grossiste } from '../classes/grossiste.class';

@Injectable({
  providedIn: 'root'
})
export class GrossitesService implements OnInit {

  listeGrossistes: Array<Grossiste> = []

  maxId = 0
  
  constructor(private http: HttpClient) { 
    this.http.get<Grossiste[]>("/api/grossistes").subscribe(data =>{
      data.forEach(elem =>{
        this.listeGrossistes.push(elem);
      })
    });    

  }

  ngOnInit(): void {
    this.listeGrossistes.forEach(grossiste => {
      if(grossiste.id > this.maxId){
        this.maxId = grossiste.id
      }
    })
  }
}

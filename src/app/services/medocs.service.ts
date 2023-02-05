import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Medoc } from '../classes/medoc.class';

@Injectable({
  providedIn: 'root'
})
export class MedocsService implements OnInit{
  maxId = 0

  listeMedocs: Medoc[] = []
  
  constructor(http: HttpClient) {
    http.get<Medoc[]>("/api/medicaments").subscribe(data => {
      data.forEach(elem => this.listeMedocs.push(elem))
    })
  }

  ngOnInit(): void {
    this.listeMedocs.forEach(element => {
      if(element.id > this.maxId){
        this.maxId = element.id
      }
    });
  }
}

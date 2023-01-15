import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: number
  nom: string
  prenom: string
  connected: boolean
  
  constructor() { 
    this.connected = true
    this.nom = "Doe"
    this.prenom = "John"
  }
}

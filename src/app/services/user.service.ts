import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: number
  nom: string
  prenom: string
  connected: boolean
  mail: string
  mdp: string
  
  constructor() { 
    this.connected = true
    this.nom = "Doe"
    this.prenom = "John"
    this.mail = "john.doe@mail.fr"
    this.mdp = ""
  }
}

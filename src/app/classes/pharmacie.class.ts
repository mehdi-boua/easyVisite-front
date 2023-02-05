import { Grossiste } from "./grossiste.class"

export class Pharmacie {
    id = 0
    officine = ""
    commune = ""
    departement = ""
    listeGrossistes: Array<Grossiste> = []
}

export interface Pharmacie {
    id: number
    officine: string
    commune: string
    departement: string
    listeGrossistes: Array<Grossiste>
}
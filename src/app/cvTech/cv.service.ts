import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CVService {

  private personnes: Personne[];
  constructor() {
    this.personnes = [
      new Personne(1, "Cheniour", "Emna", 22, "09888882", "Etudiante", "../../assets/images/emna.jpg"),
      new Personne(2, "Hellali", "Moetaz", 21, "09897482", "Etudiant", "../../assets/images/marco.jpg"),
      new Personne(3, "Kaouech", "Haythem", 22, "09809982", "Etudiant", "../../assets/images/haythem.jpg"),
      new Personne(4, "test", "test", 22, "09802382", "Etudiant", ""),
    ];
  }
  getPersonnes(): Personne[] {
    return (this.personnes)
  }
  getPersonnesById(id: any): Personne {


    const personne = this.personnes.find(peronne => {
      return peronne.id == parseInt(id)
    })
    return personne!;
  }

  deleteCv(peronne: Personne): void {
    const index = this.personnes.indexOf(peronne);
    console.log(index);
    this.personnes.splice(index, 1)
    console.log(this.personnes);
  }

  addCv(personne: Personne):void{
    personne.id = this.personnes[this.personnes.length - 1].id +1;
    this.personnes.push(personne);
    console.log(this.personnes);
    
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  est= false;
  barca=false;
  milan=false;
  constructor() { }

  ngOnInit(): void {
  }
  changeTeam(team:any){
    switch (team) {
      case 'est':
        this.est= true;
        this.barca=false;
        this.milan=false;
        break;
        case 'barca':
          this.est= false;
          this.barca=true;
          this.milan=false;
          break;
      default:
        case 'milan':
        this.est= false;
        this.barca=false;
        this.milan=true;
        break;
        break;
    }
  }

}

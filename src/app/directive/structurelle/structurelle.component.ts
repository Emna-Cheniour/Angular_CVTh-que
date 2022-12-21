import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structurelle',
  templateUrl: './structurelle.component.html',
  styleUrls: ['./structurelle.component.css']
})
export class StructurelleComponent implements OnInit {
  click = true;
  personnes=[
    {"prenom": 'emna',"nom" :'cheniour',"age":22,"job":'ingénieur'},
    {"prenom": 'haythem',"nom" :'kaouech',"age":21,"job":'ingénieur'},
    {"prenom": 'moataz',"nom" :'hellali',"age":23,"job":'medecin'}

  ]
  constructor() { }

  ngOnInit(): void {
  }
  changeVisible(){
    this.click=!this.click;
  }

}

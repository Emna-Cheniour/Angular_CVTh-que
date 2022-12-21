import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {


  @Output() personnesSelected = new EventEmitter();
  @Input() personnes! : Personne[];
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(selectedPersonne:any) {
    
    this.personnesSelected.emit(
      selectedPersonne
    )
  }

}

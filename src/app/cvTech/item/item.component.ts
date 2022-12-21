import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne!: Personne;
  @Output() personneSelected = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPersonne(){
    this.personneSelected.emit(
      this.personne
    )
  }
}

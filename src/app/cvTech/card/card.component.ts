import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  nom: "Emna Cheniour" | any;
  profession : "computer engineer" | any;
  description: "Hello this is my first time"| any;
  quote: "If you want you will change the world" |any;

  constructor() { }

  ngOnInit(): void {
  }

}

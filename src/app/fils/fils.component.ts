import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() filsProperty: any;
  @Output() sendRequestToData = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    console.log("Fils component : voici le composant père : ", this.filsProperty)
  }
  sendEvent(){
    this.sendRequestToData.emit(
      `Please can i have some money :)`
    )
  }

}

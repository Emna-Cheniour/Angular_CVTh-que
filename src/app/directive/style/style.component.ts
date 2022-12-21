import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.css']
})
export class StyleComponent implements OnInit {

  @Input() color = "lightblue";
  @Input() size = "30px";
  @Input() font = "sans-serif";
  constructor() { }

  ngOnInit(): void {
  }

  sizeChanged(sizee: any) {
    this.size = sizee + "px";
  }
}

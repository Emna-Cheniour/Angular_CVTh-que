import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export default class RainbowDirective {

  @HostBinding('style.color') color:any;
  @HostBinding('style.borderColor') bc:any;

  tableau=[
    'blue',
    'lightblue',
    'yellow',
    'purple',
    'green',
    'pink',
    'lightyellow',
    'lightgreen',
    'grey',
    'lightgrey'
  ]
  constructor() { }

  @HostListener('keypress') changeColor(){
    const index = Math.floor(Math.random()* (this.tableau.length-1));
    const index2 = Math.floor(Math.random()* (this.tableau.length-1));
    this.bc=this.tableau[index];
    this.color=this.tableau[index2];

  }
}

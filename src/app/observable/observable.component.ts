import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  observable! : Observable<string>;
  mesImages=[
    "../assets/images/emna.jpg",
    "../assets/images/marco.jpg",
    "../assets/images/haythem.jpg",
    "../assets/images/tim_logo.png",
  ];
  currentImage! :string;
  constructor() { }

  ngOnInit(): void {
    this.observable = new Observable(
      (observer)=>{
        let i = this.mesImages.length -1;
        setInterval(
          ()=>{
            observer.next(this.mesImages[i]);
            if(i>0)
              i--;
            else{
              i = this.mesImages.length -1;
            }
          }
        ,1500);
      }
    )
    this.observable.subscribe((result)=>{
      this.currentImage=result;
    })
  }

}

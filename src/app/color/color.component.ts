import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  bgColor = "white";
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.bgColor = params['default'];
      
    })
  }
  getEvent(event: any){
    alert(event)
  }
  goToCv(){
    const link = ['cv']
    this.router.navigate(link);
  }

}

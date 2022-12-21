import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CVService } from '../cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  peronne! : Personne;
  constructor(private cvService : CVService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {      
      this.peronne = this.cvService.getPersonnesById(params['id']);     
      console.log(this.peronne);
       
    })
  }
  deleteCv(){
    if(this.peronne){
      this.cvService.deleteCv(this.peronne);
      this.router.navigate(['cv'])
    }
  }
}

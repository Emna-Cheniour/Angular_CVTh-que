import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/Model/Personne';
import { CVService } from '../cv.service';
import { EmbaucheService } from '../embauche.service';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCVComponent implements OnInit {

  @Input() peronne!: Personne;
  constructor(private embaucheService : EmbaucheService,
    private cvService : CVService,
    private router: Router) { }

  ngOnInit(): void {
  }

  embaucher(){
    this.embaucheService.embaucher(this.peronne);
  }
  moreInfos(){
    const link = ['cv',this.peronne.id];
    this.router.navigate(link);
  }
  
}

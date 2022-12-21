import { Component, Input, OnInit } from '@angular/core';
import { Personne } from 'src/app/Model/Personne';
import { CVService } from '../cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  @Input() selectedPersonne! : Personne;
  personnes! : Personne[];
  constructor(private cvService: CVService) { }

  ngOnInit(): void {
    this.personnes= this.cvService.getPersonnes();
  }
  selectPersonne(personne:any){
    this.selectedPersonne=personne;
  }

}

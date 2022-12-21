import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CVService } from '../cv.service';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css']
})
export class AddCvComponent implements OnInit {

  constructor(private cvService : CVService,
    private router: Router) { }

  ngOnInit(): void {
  }

  addCv(formulaire: NgForm){
    const link = ['cv'];
    this.cvService.addCv(formulaire.value);
    this.router.navigate(link);
  }
}

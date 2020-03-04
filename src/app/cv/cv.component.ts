import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { ListepersonneService } from '../listepersonne.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonne : Personne[] = [];
  persSelected : Personne;
 
  constructor(private personneService : ListepersonneService) { }

  ngOnInit() {
    this.listePersonne = this.personneService.getListePersonne();
  }

  ReceivedPers(p) {
    this.persSelected = p;
  }

  addPersonne() {
    this.personneService.addPersonne(
      new Personne(10, "foulen", "ben foulen", 30, "Ingenieur")
    );
    console.log(this.personneService.getListePersonne())
  }

}

import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  listePersonne : Personne[] = [];
  persSelected : Personne;
  constructor() { }

  ngOnInit() {
    this.listePersonne = [
      new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
      new Personne(2, "bart", "simpson", 15, "doctor", "bart.jpeg"),
      new Personne(3, "homer", "simpson", 58, "clown", "homer.jpg")

    ];
    console.log(this.listePersonne);
  }

  ReceivedPers(p) {
    this.persSelected = p;
  }

}

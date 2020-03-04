import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class ListepersonneService {
  listePersonne = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 15, "doctor", "bart.jpeg"),
    new Personne(3, "homer", "simpson", 58, "clown", "homer.jpg"),
    new Personne(4, "marge", "simpson", 58, "clown", "")

  ];

  getListePersonne() {
    return this.listePersonne
  }

  addPersonne(p) {
    this.listePersonne.push(p);
  }
  constructor() { }
}

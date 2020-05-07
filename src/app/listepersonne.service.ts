import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListepersonneService {
  link = "http://localhost:3000/api/personnes";
  listePersonne = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg"),
    new Personne(2, "bart", "simpson", 15, "doctor", "bart.jpeg"),
    new Personne(3, "homer", "simpson", 58, "clown", "homer.jpg"),
    new Personne(4, "marge", "simpson", 58, "clown", "")

  ];

  constructor(private http : HttpClient) { }

  getListePersonneAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link)
  }

  getListePersonne() {
    return this.listePersonne
  }

  getPersonneByIdAPI(id) : Observable<Personne> {
    //return this.http.get<Personne>(this.link + '/' +id);
    return this.http.get<Personne>(`${this.link}/${id}`);
  }

  getPersonneById(id) {
    return this.listePersonne.find((p) => p.id == id)
  }

  addPersonne(p) {
    p.id = this.listePersonne[this.listePersonne.length - 1].id + 1;
    this.listePersonne.push(p);
  }
  

  updatePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }
}

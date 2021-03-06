import { Injectable } from '@angular/core';
import { Personne } from './model/personne';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ListepersonneService {
  link = "http://localhost:3000/api/personnes";
  listePersonne = [
    new Personne(1, "nidhal", "jelassi", 35, "enseignant", "nidhal.jpg", "candidat"),
    new Personne(2, "bart", "simpson", 15, "doctor", "bart.jpeg", "recrue"),
    new Personne(3, "homer", "simpson", 58, "clown", "homer.jpg", "refuse"),
    new Personne(4, "hachem", "zarrad", 28, "ingenieur", "avatar.jpg", "refuse"),
    new Personne(5, "rania", "loussif", 18, "ingenieur", "avatar.jpg", "candidat")
  ];

  constructor(private http : HttpClient) { }

  filterPersonne(tab, property) {
    return tab.filter((element) => element.status == property)
  }

  getListePersonneAPI() : Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link)
  }

  getListePersonne() {
    return this.listePersonne
  }

  getListePersonneByNameAPI(name) : Observable<Personne[]> {
    let filterValue = `{"where":{"nom":{"like":"%${name}%"}}}`;
    console.log(filterValue);
    
    const p = new HttpParams().set('filter', filterValue);
    return this.http.get<Personne[]>(this.link, {params : p})
  }

  getPersonneByIdAPI(id) : Observable<Personne> {
    //return this.http.get<Personne>(this.link + '/' +id);
    return this.http.get<Personne>(`${this.link}/${id}`);
  }

  getPersonneById(id) {
    return this.listePersonne.find((p) => p.id == id)
  }

  

  addPersonneAPI(p) {
    return this.http.post(this.link, p);
  }

  addPersonne(p) {
    p.id = this.listePersonne[this.listePersonne.length - 1].id + 1;
    this.listePersonne.push(p);
  }
  
  updatePersonneAPI(p) : Observable<any> {
    return this.http.put(this.link, p);
  }

  updatePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne[i] = p;
  }

  deletePersonneAPI(id) : Observable<any> {
    // const myToken = localStorage.getItem('token');
    // if(myToken) {
    //   //les objets httpParams sont immutable / immuable
    //   const p = new HttpParams().set('access_token', myToken); 
    //   return this.http.delete(`${this.link}/${id}`, {params: p});
    // }
    return this.http.delete(`${this.link}/${id}`);
  }

  deletePersonne(p) {
    let i = this.listePersonne.indexOf(p);
    this.listePersonne.splice(i, 1);
  }
}

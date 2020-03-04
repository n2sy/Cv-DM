import { Injectable } from '@angular/core';
import { Personne } from './model/personne';

@Injectable({
  providedIn: 'root'
})
export class RecrueService {
  listeRecrues : Personne[] = [];
  constructor() { }

  addRecrue(p) {
    if(this.listeRecrues.indexOf(p)>=0)
      alert('Cette personne a déjà été recruté')
    else
      this.listeRecrues.push(p);
  }
}

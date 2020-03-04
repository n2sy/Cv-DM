import { Component, OnInit } from '@angular/core';
import { ListepersonneService } from '../listepersonne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']

})
export class SecondChildComponent implements OnInit {

  constructor(private listeService : ListepersonneService) { }

  ngOnInit() {
    console.log(this.listeService.getListePersonne());
    this.listeService.addPersonne(
      new Personne(10, "foulen", "ben foulen", 30, "Ingenieur")
    )
  }

}

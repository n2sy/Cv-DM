import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne';
import { ListepersonneService } from '../listepersonne.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']

})
export class ListeComponent implements OnInit {
  @Input() listePersonne : Personne[];
  @Output() sendPers = new EventEmitter();
  constructor(private listeService : ListepersonneService ) { }

  ngOnInit() {
    
  }

  sendPersonne(p : Personne) {
    this.sendPers.emit(p);
  }

 

}

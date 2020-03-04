import { Component, OnInit } from '@angular/core';
import { ListepersonneService } from '../listepersonne.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color : string = "yellow";
  hd : boolean = false;
  constructor(private listeService : ListepersonneService) { }

  ngOnInit() {
    console.log("ngOnInit : ");
    console.log(this.listeService.getListePersonne());
  }

  ShowPers() {
    console.log(this.listeService.getListePersonne());
  }

  swipeHd() {
    this.hd = !this.hd;
  }

  TraitementDuParent(p) {
    alert(p);
  }



}

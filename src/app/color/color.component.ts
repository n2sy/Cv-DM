import { Component, OnInit } from '@angular/core';
import { ListepersonneService } from '../listepersonne.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  color : string = "yellow";
  hd : boolean = false;
  
  constructor(private listeService : ListepersonneService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (p: Params) => {
        this.color = p['cl']; 
      }
    )
    
  }

  ShowPers() {
  }

  swipeHd() {
    this.hd = !this.hd;
  }

  TraitementDuParent(p) {
    alert(p);
  }



}

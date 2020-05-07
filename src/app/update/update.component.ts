import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ListepersonneService } from '../listepersonne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute:  ActivatedRoute,
    private router : Router,
    private cvService : ListepersonneService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (p: Params) => {
        this.pers = this.cvService.getPersonneById(p['id']);
      }
    )
  }

  updatePersonne() {
    this.cvService.updatePersonne(this.pers);
    this.router.navigate(['cv']);
  }

}

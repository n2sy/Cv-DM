import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ListepersonneService } from '../listepersonne.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {
  pers : Personne;
  constructor(private activatedRoute : ActivatedRoute,
    private router : Router,
    private cvService : ListepersonneService) { }

  ngOnInit() {
    // let i = this.activatedRoute.snapshot.params['id'];
    // this.pers = this.cvService.getPersonneById(i);

    this.activatedRoute.params.subscribe(
      (p : Params) => {
        this.cvService.getPersonneByIdAPI(p['id']).subscribe(
          (response) => {
            this.pers = response;
          },
          (error) => {
            console.log('Error with GetPersonneById()');     
          }
        )
      },
      (error) => {
        console.log('Error with Route Params !');
        
      }
    )
  }

  goToUpdate() {
    this.router.navigate(['cv/edit', this.pers.id])
  }

}

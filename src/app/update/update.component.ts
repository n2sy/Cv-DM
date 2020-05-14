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

  updatePersonne() {
    //this.cvService.updatePersonne(this.pers);
    this.cvService.updatePersonneAPI(this.pers).subscribe(
      (response) => {
        this.router.navigate(['cv']);
      },
      (error) => {
        console.log('Error with Update !');      
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { Personne } from '../model/personne';
import { ListepersonneService } from '../listepersonne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  SearchPersons : Personne[];

  constructor(private cvService : ListepersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  searchResult(input) {
    let name = input.value.trim();
    this.cvService.getListePersonneByNameAPI(name).subscribe(
      (response) => {
        this.SearchPersons = response;
      },
      (error) => {
        console.log('Error with getListePersonneByNameAPI');
      }
    )
  }

  selectPerson(p) {
    this.SearchPersons = [];
    this.router.navigate(['cv', p['id']]);
  }

}

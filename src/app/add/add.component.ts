import { Component, OnInit } from '@angular/core';
import { ListepersonneService } from '../listepersonne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private cvService : ListepersonneService,
    private router : Router) { }

  ngOnInit() {
  }

  addPersonne(newPers) {
    this.cvService.addPersonne(newPers);
    this.router.navigate(['cv'])

  }

}

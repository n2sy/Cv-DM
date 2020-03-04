import { Component, OnInit } from '@angular/core';
import { RecrueService } from '../recrue.service';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
  listeRecrue : Personne[];
  constructor(private recrueService : RecrueService) { }

  ngOnInit() {
    this.listeRecrue = this.recrueService.listeRecrues;
  }

}

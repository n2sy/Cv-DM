import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() persSelected : Personne;
  constructor(private recrueService : RecrueService,
    private router : Router) { }

  ngOnInit() {
  }

  RecruterPers() {
    this.recrueService.addRecrue(this.persSelected);
    console.log(this.recrueService.listeRecrues)
  }

  afficherInfos() {
    this.router.navigate(['cv', this.persSelected.id])
  }

}

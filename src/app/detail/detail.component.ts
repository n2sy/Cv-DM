import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../model/personne';
import { RecrueService } from '../recrue.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() persSelected : Personne;
  constructor(private recrueService : RecrueService) { }

  ngOnInit() {
  }

  RecruterPers() {
    this.recrueService.addRecrue(this.persSelected);
    console.log(this.recrueService.listeRecrues)
  }

}

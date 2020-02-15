import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcv',
  templateUrl: './testcv.component.html',
  styleUrls: ['./testcv.component.css']
})
export class TestcvComponent implements OnInit {
  nom : string;
  prenom : string;
  age : number;
  metier : string;
  
  constructor() { }

  ngOnInit() {
  }

}

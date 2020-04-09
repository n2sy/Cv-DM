import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrls: ['./ms-word.component.css']
})
export class MsWordComponent implements OnInit {
  listeFonts = ["Impact", "Garamond", "Comic Sans MS"];
  bgColor : string;
  txtColor : string;
  size : string;
  font : string;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  changeSize(s) {
    this.size = s.value+'px';
  }

  Reload() {
    this.router.navigate(['msword']);
  }

  

}

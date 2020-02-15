import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  changeSize(s) {
    this.size = s.value+'px';
  }

  

}

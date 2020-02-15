import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() couleur : string = "pink";
  @Output() sendMsg = new EventEmitter();

  bgColor = "pink";
  cl = "grey";
  font = "Garamond";

  class1 : Boolean = true;
  class2 : Boolean = false;
  class3 : Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  changeStyle() {
    if(this.class1) {
      this.class1 = false;
      this.class2 = true;
    }
    else if(this.class2) {
      this.class2 = false;
      this.class3 = true;
    }
    else {
      this.class3 = false;
      this.class1 = true;
    }

  }

  sendFonction() {
    this.sendMsg.emit('Message reçu du fils '+this.couleur);
  }

}

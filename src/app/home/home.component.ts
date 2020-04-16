import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listeComponents = ['', 'cv', 'msword', 'color'];
  constructor(private router : Router) { }

  ngOnInit() {
  }

  goToCv() {
    this.router.navigate(['cv']);
  }

  changeRoute(rt) {
    this.router.navigate([rt.value]);
  }

}

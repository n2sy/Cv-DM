import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  link = "https://jsonplaceholder.typicode.com/xxxusers"
  constructor(private httpClient : HttpClient) { }

  ngOnInit() {
    this.callGet().subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log('Error with HTTP test'+error);     
      },
      () => {
        console.log("Flux terminé"); 
      }
    )
  }

  callGet() : Observable<any>{
    return this.httpClient.get(this.link);
  }

}

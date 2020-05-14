import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  link = "http://localhost:3000/api/Users/login";

  constructor(private http: HttpClient) { }

  login(identifiants): Observable<any> {
    return this.http.post(this.link, identifiants);
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLogged() {
    let myToken = localStorage.getItem('token');
    // if (myToken)
    //   return true;
    // else
    //   return false;
    return (!!myToken);
  }


}

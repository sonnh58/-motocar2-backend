import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../config'
import { tokenNotExpired, AUTH_PROVIDERS } from 'angular2-jwt'

@Injectable()
export class AuthService{
  authToken: any;
  user: any;

  constructor(private  http:Http) { }

  authenticateUser(user){
    let header = new Headers();
    header.append('Content-Type','application/json');
    return this.http.post(Config.apiUrl+'users/auth', user, {headers: header})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getData(){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'getCars',{},{headers: header})
      .map(res => res.json());
  }

  pushNotification(id){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'pushNotification',{_id:id},{headers: header})
      .map(res => res.json());
  }

  loggedIn(){
    return tokenNotExpired();
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}

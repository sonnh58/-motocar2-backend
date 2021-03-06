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

  registerUser(user){
    let header = new Headers();
    header.append('Content-Type','application/json');
    return this.http.post(Config.apiUrl+'users/register', user, {headers: header})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  storeProfileData(user){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getProfile(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
    return user;
  }

  updateProfile(user){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'users/updateProfile',user,{headers: header})
      .map(res => res.json());
  }

  getUsers(){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'users/getUsers',{},{headers: header})
      .map(res => res.json());
  }

  deleteUser(id){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'users/deleteUser',{_id:id},{headers: header})
      .map(res => res.json());
  }

  getData(){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'getCars',{},{headers: header})
      .map(res => res.json());
  }

  requestCars(){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'requestCars',{},{headers: header})
      .map(res => res.json());
  }

  updateData(id){
    let header = new Headers();
    this.loadToken();
    header.append('Content-Type','application/json');
    header.append('Authorization', this.authToken);
    return this.http.post(Config.apiUrl+'updateOneCar',{_id:id},{headers: header})
      .map(res => res.json());
  }

  getDevices(){
    this.getProfile();

    let header = new Headers();
    this.loadToken();

    header.append('Content-Type','application/json');
    header.append('Authorization', 'Basic ' + this.user.apiKey);

    return this.http.get('https://onesignal.com/api/v1/players?app_id='+ this.user.appId, {headers: header})
      .map(res => res.json());
  }

  getNotifications(){
    this.getProfile();

    let header = new Headers();
    this.loadToken();

    header.append('Content-Type','application/json');
    header.append('Authorization', 'Basic ' + this.user.apiKey);

    return this.http.get('https://onesignal.com/api/v1/notifications?app_id='+ this.user.appId, {headers: header})
      .map(res => res.json());
  }

  pushNotification(id){
    let header = new Headers();
    this.getProfile();

    header.append('Content-Type','application/json');
    header.append('Authorization', 'Basic ' + this.user.apiKey);

    let message = {
      app_id: this.user.appId,
      template_id : this.user.templateId,
      data: {_id: id},
      included_segments: ["All"]
    };
    console.log(message);

    return this.http.post('https://onesignal.com/api/v1/notifications',message,{headers: header})
      .map(res => res.json());
  }

  createNotification(value){
    let header = new Headers();
    this.getProfile();

    header.append('Content-Type','application/json');
    header.append('Authorization', 'Basic ' + this.user.apiKey);

    let message = {
      app_id: this.user.appId,
      included_segments: ["All"],
      headings: {"en" : value.title},
      contents: {"en" : value.message}
    };

    return this.http.post('https://onesignal.com/api/v1/notifications',message,{headers: header})
      .map(res => res.json());
  }

  loggedIn(){
    return tokenNotExpired();
  }

  isAdmin(){
    return this.getProfile().isAdmin;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {};
  constructor(
    private authService:AuthService,
    private flashMessagesService: FlashMessagesService ) { }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.user = this.authService.getProfile();
  }

  onUpdateSubmit(){
    let user = {
      username: this.user['username'],
      name: this.user['name'],
      apiKey: this.user['apiKey'],
      appId: this.user['appId'],
      templateId: this.user['templateId'],
      sourceData : this.user['sourceData']
    };

    this.authService.updateProfile(user).subscribe(data => {
      if(data.success){
        this.authService.storeProfileData(data.user);
        this.getProfile();
        this.flashMessagesService.show('Your information has been updated!', {
          cssClass: 'alert-success',
          timeout:3000});
      } else {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout:5000});
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  source: LocalDataSource;
  settings = {
    columns: {
      record_id: {
        title: 'Record ID',
        filter: false,
        editable: false
      },
      title: {
        title: 'Title',
        filter: false,
        editable: false
      },
      make: {
        title: 'Brand',
        filter: false,
        editable: false
      },
      year: {
        title: 'Year',
        filter: false,
        editable: false
      },
      url: {
        title: 'Url',
        filter: false,
        editable: false
      },
      notified: {
        title: 'Push Notification',
        editable: false
      }
    },
    actions: {
      add : false,
      delete: false,
      position: 'right'
    },
    attr:{
      id: '_id'
    },
    edit: {
      editButtonContent: 'PUSH',
      saveButtonContent: 'CONFIRM',
      confirmSave: true,
    },
    paper: {
      display: true,
      perPage: 20
    }
  };

  constructor(private authService:AuthService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.source = new LocalDataSource();
    this.authService.getData().subscribe(data => {
        this.source.load(data);
        this.source.setPaging(0,20, true);
    },
    err => {
      console.log(err);
      return false;
    })
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to push notification to user?')) {
      this.authService.pushNotification(event.newData['_id'])
        .subscribe(data => {
          this.flashMessagesService.show('Notification has been delivered!', {
            cssClass: 'alert-success',
            timeout: 3000
          });
          this.authService.getData().subscribe(data => {
            this.source.load(data);
            this.source.setPaging(0, 20, true);
          })
        }, error => {
          this.flashMessagesService.show("An error has occurred!", {
            cssClass: 'alert-danger',
            timeout: 5000
          })
        });

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

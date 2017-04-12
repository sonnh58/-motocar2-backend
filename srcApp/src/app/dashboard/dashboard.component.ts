import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalDataSource } from 'ng2-smart-table';

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

  constructor(private authService:AuthService) { }

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
      this.authService.pushNotification(event.newData['_id']).subscribe(data => {
        console.log(data);
        this.authService.getData().subscribe(data => {
          this.source.load(data);
          this.source.setPaging(0,20, true);
        });
      });

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}

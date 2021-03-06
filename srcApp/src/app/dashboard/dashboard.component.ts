import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LocalDataSource } from 'ng2-smart-table';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PromptComponent } from './prompt.component';
import { DialogService } from "ng2-bootstrap-modal";
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  source: LocalDataSource;
  settings: any;

  constructor(private authService:AuthService,
              private flashMessagesService: FlashMessagesService,
              private validateService: ValidateService,
              private dialogService:DialogService) { }

  ngOnInit() {
    if(this.authService.isAdmin()){
      this.settings = {
        columns: {
          username: {
            title: 'Username',
            filter: false,
            editable: false
          },
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
          position: 'right',
          add: false,
          edit: false
        },
        attr:{
          id: '_id'
        },
        paper: {
          display: true,
          perPage: 20
        }
      };
    } else {
      this.settings = {
        columns: {
          username: {
            title: 'Username',
            filter: false,
            editable: false
          },
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
          edit: true,
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
    }

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

  refresh() {
    this.authService.requestCars()
      .subscribe(
        data=>{
        if(data.success) {
          this.flashMessagesService.show("Getting data.....!", {
            cssClass: 'alert-success',
            timeout: 5000
          })
          this.authService.getData().subscribe(data => {
              this.source.load(data);
              this.source.setPaging(0,20, true);
            },
            err => {
              console.log(err);
              return false;
            })
        } else {
          this.flashMessagesService.show(data.msg, {
            cssClass: 'alert-danger',
            timeout: 5000
          })
        }
      },error=>{
          this.flashMessagesService.show(error.msg, {
            cssClass: 'alert-danger',
            timeout: 5000
          })
      })
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to push notification to user?')) {
      let _id =  event.newData['_id'];
      this.authService.pushNotification(_id)
        .subscribe(data => {
          this.authService.updateData(_id)
            .subscribe(data => {
              if (data.success) {
                this.flashMessagesService.show('Notification has been delivered!', {
                  cssClass: 'alert-success',
                  timeout: 3000
                });
                this.authService.getData().subscribe(data => {
                  this.source.load(data);
                  this.source.setPaging(0, 20, true);
                })
              } else {
                this.flashMessagesService.show("Failed to update Db!", {
                  cssClass: 'alert-danger',
                  timeout: 5000
                })
              }
            }, error => {
              this.flashMessagesService.show("An error has occurred! (db)!", {
                cssClass: 'alert-danger',
                timeout: 5000
              })
            })
        }, error => {
          this.flashMessagesService.show("An error has occurred! Please check API Key, App ID, Template ID.", {
            cssClass: 'alert-danger',
            timeout: 5000
          })
        });

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  showPrompt() {
    this.dialogService.addDialog(PromptComponent)
      .subscribe((result)=>{

        //required fields
        if(!this.validateService.validateMessage(result)) {
          this.flashMessagesService.show('Please fill in all fields',{cssClass: 'alert-danger', timeout: 3000});
          console.log(this.validateService.validateMessage(result));
          return false;
        }

        //We get dialog result
        this.authService.createNotification(result)
          .subscribe(data=>{
            this.flashMessagesService.show('Notification has been delivered to '+data.recipients+' user(s)!', {
              cssClass: 'alert-success',
              timeout: 5000
            });
        }, error => {
            this.flashMessagesService.show("An error has occurred! Please check API Key, App ID", {
              cssClass: 'alert-danger',
              timeout: 3000
            })
          })
      });
  }

}

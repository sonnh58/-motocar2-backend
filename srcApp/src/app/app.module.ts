import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ValidateService } from './services/validate.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { CustomRenderPasswordComponent, CustomRenderDateComponent, CustomRenderObjectComponent } from './pipes/custom-render.component';
import { DevicesComponent } from './devices/devices.component';
import { NotificationsComponent } from './notifications/notifications.component'

const appRoutes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'devices', component: DevicesComponent, canActivate: [AuthGuard] },
  {path:'notifications', component: NotificationsComponent, canActivate: [AuthGuard] },
  {path:'users', component: UserComponent, canActivate: [AdminGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    RegisterComponent,
    UserComponent,
    CustomRenderPasswordComponent,
    CustomRenderDateComponent,
    CustomRenderObjectComponent,
    DevicesComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    Ng2SmartTableModule
  ],
  entryComponents: [CustomRenderPasswordComponent, CustomRenderDateComponent, CustomRenderObjectComponent],
  providers: [
    AuthService, AuthGuard, AdminGuard, ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

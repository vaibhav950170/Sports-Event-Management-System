import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsComponent } from './sports/sports.component';
import { ShowSpoComponent } from './sports/show-spo/show-spo.component';
import { AddEditSpoComponent } from './sports/add-edit-spo/add-edit-spo.component';
import { EventComponent } from './event/event.component';
import { ShowEveComponent } from './event/show-eve/show-eve.component';
import { AddEditEveComponent } from './event/add-edit-eve/add-edit-eve.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { AddEditPlyComponent } from './players/add-edit-ply/add-edit-ply.component';
import { ShowPlyComponent } from './players/show-ply/show-ply.component';
import { ParticipationComponent } from './participation/participation.component';
import { ShowPartiComponent } from './participation/show-parti/show-parti.component';
import { AddEditPartiComponent } from './participation/add-edit-parti/add-edit-parti.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    ShowSpoComponent,
    AddEditSpoComponent,
    EventComponent,
    ShowEveComponent,
    AddEditEveComponent,
    LoginComponent,
    HomeComponent,
    PlayersComponent,
    AddEditPlyComponent,
    ShowPlyComponent,
    ParticipationComponent,
    ShowPartiComponent,
    AddEditPartiComponent,
    RegisterComponent,
    AdminloginComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

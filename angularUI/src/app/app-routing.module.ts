import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EventComponent} from './event/event.component';
import {SportsComponent} from './sports/sports.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationGuard} from './authentication.guard'
import { PlayersComponent } from './players/players.component';
import { ParticipationComponent } from './participation/participation.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

const routes: Routes = [

{path:'' ,redirectTo:"/login",pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'admin',component:AdminloginComponent},
{path:'home',component:HomeComponent,canActivate:[AuthenticationGuard],children:[
  {path:'event',component:EventComponent},
  {path:'sports',component:SportsComponent},
  {path:'players',component:PlayersComponent},
  {path:'participation',component:ParticipationComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

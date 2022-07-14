import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  deleteDepartment(DepartmentId: any) {
    throw new Error('Method not implemented.');
  }

  getAllSportsNames() {
    throw new Error('Method not implemented.');
  }
  updateSport(val: { SportsId: string; SportsName: string; }) {
    throw new Error('Method not implemented.');
  }
  readonly APIUrl="https://localhost:7134";
  readonly APIIUrl="https://localhost:7134";
  readonly APIIIUrl="https://localhost:7134";
  

  constructor(private http:HttpClient) { }

  getSpoList():Observable<any[]>{
    return this.http.get<any>(this.APIIUrl+'/sports');
  }
  
  getPartiList():Observable<any[]>{
    return this.http.get<any>(this.APIIIUrl+'/getParticipations');
  }

  getPlyList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/players');
  }

  addUser(val:any){
    return this.http.post(this.APIUrl+'/api/Auth/register',val);
  }

  addParticipation(val:any){
    return this.http.post(this.APIIIUrl+'/addparticipation',val);
  }
  addPlayers(val:any){
    return this.http.post(this.APIUrl+'/addPlayer',val);
  }

  updateParticipation(val:any){
    return this.http.put(this.APIIIUrl+'/updateparticipant',val);
  }
  deleteParticipation(val:any){
    return this.http.delete(this.APIIIUrl+'/Participation/'+val);
  }
  deletePlayers(val:any){
    return this.http.delete(this.APIUrl+'/deletePlayer?email='+val);
  }

getdeclineList() :Observable<any[]>{
  return this.http.get<any>(this.APIIIUrl+'/getDeclinedParticipations');
}
getapproveList() :Observable<any[]>{
  return this.http.get<any>(this.APIIIUrl+'/getApprovedParticipations');
}
getpendingList() :Observable<any[]>{
  return this.http.get<any>(this.APIIIUrl+'/getPendingParticipations');
}
  getEveList():Observable<any[]>{
    return this.http.get<any>(this.APIIUrl+'/events');
  }

  addEvent(val:any){
    return this.http.post(this.APIUrl+'/addEvent',val);
  }

  deleteEvent(val:any){
    return this.http.delete(this.APIIUrl+'/deleteEvent?EventId='+val);
  }
  signin(val:any){
    return this.http.post(this.APIUrl+'/api/Auth/login',val);
  }
  adminlogin(val:any){
    return this.http.post(this.APIIIUrl+'/api/Auth/Adminlogin',val);
  }
}

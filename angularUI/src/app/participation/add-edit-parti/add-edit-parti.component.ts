import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-parti',
  templateUrl: './add-edit-parti.component.html',
  styleUrls: ['./add-edit-parti.component.css']
})
export class AddEditPartiComponent implements OnInit {
  [x: string]: any;
  user = localStorage.getItem('user');
  constructor(private service:SharedService,private router:Router) { }

  @Input() parti:any;
  participationId!: number;
  playerId!: number;
  playerName!: string;
  eventId!: number;
  eventName!: string;
  sportsId!: number;
  sportsName!: string;
  status!: string;
  


 

  ngOnInit(): void {
    if(this.parti.participationId==0){
    this.participationId=this.parti.participationId;
    this.status=this.parti.status;}
    else{
      this.participationId=this.parti.participationId,
      this.playerId=this.parti.playerId,
      this.playerName=this.parti.playerName,
      this.eventId=this.parti.eventId,
      this.eventName=this.parti.eventName,
      this.sportsId=this.parti.sportsId,
      this.sportsName=this.parti.sportsName,
      this.status=this.parti.status
    }
  }
  
  
 

  addParticipation(){
    if(this.sportsName=='chess' || this.sportsName=='Chess'){
      this.sportsId=1;
    }
    else if(this.sportsName=='carrom' || this.sportsName=='Carrom'){
      this.sportsId=2;
    }else if(this.sportsName=='Cricket' || this.sportsName=='cricket'){
      this.sportsId=3;
    }else if(this.sportsName=='Hockey' || this.sportsName=='hockey'){
      this.sportsId=4;
    }
    var val = {participationId:this.participationId,
      playerId:this.playerId,
      playerName:this.playerName,
      eventId:this.eventId,
      eventName:this.eventName,
      sportsId:this.sportsId,
      sportsName:this.sportsName,
      status:'Pending'};
    this.service.addParticipation(val).subscribe(res=>{
      alert(res.toString());
      
    });
  }
 

  updateParticipation(){
    var val = {participationId:this.participationId,
      playerId:this.playerId,
      playerName:this.playerName,
      eventId:this.eventId,
      eventName:this.eventName,
      sportsId:this.sportsId,
      sportsName:this.sportsName,
      status:this.status,};
    this.service.updateParticipation(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  

}

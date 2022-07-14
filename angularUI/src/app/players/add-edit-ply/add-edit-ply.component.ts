import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-ply',
  templateUrl: './add-edit-ply.component.html',
  styleUrls: ['./add-edit-ply.component.css']
})
export class AddEditPlyComponent implements OnInit {
  string: any;

  constructor(private service:SharedService) { }

  @Input() ply:any;
  playerId!: string;
  playerName!: string;
  age!: string;
  contactNumber!: string;
  email!: string;
  gender!: string;
  sportsName!: string;
  

 

  ngOnInit(): void {
    this.playerId=this.ply.PlayerId;
    this.email=this.ply.Playeremail;
    this.playerName=this.ply.PlayerName;
    
   
 
  }
  addPlayers(){
    var val = {PlayerId:this.playerId,
                PlayerName:this.playerName,
                Age:this.age,
                ContactNumber:this.contactNumber,
                Email:this.email,
                Gender:this.gender,
                SportsName:this.sportsName,};
    this.service.addPlayers(val).subscribe(res=>{
      alert(res.toString());
      
    });
  }
 

 

  

}

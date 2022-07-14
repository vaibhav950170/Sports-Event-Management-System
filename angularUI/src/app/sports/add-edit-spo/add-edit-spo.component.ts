import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-spo',
  templateUrl: './add-edit-spo.component.html',
  styleUrls: ['./add-edit-spo.component.css']
})
export class AddEditSpoComponent implements OnInit {
  [x: string]: any;

  constructor(private service:SharedService) { }

  @Input() spo:any;
  SportsId!: string;
  SportsName!: string;
  SportsType!: string;
  NoOfPlayers!: string;
  

 

  ngOnInit(): void {
    this.SportsId=this.spo.SportsId;
    this.SportsName=this.spo.SportsName;
    
   
 
  }
  
  



 


  

}

import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-eve',
  templateUrl: './add-edit-eve.component.html',
  styleUrls: ['./add-edit-eve.component.css']
})
export class AddEditEveComponent implements OnInit {
  [x: string]: any;

  constructor(private service:SharedService) { }

  @Input() eve:any;
  eventId!: string;
  eventDate!: string;
  eventName!: string;
  noofslot!: number;
  sportname!: string;
  

 

  ngOnInit(): void {
    this.eventId=this.eve.EventId;
    this.eventName=this.eve.EventName;
    
   
 
  }
  
  


  addEvent(){
    var val = {eventId:this.eventId,
                eventDate:this.eventDate,
                eventName:this.eventName,
                noofslot:this.noofslot,
                sportname:this.sportname};
    this.service.addEvent(val).subscribe(res=>{
      alert(res.toString());
    });
  }
 

 

  

}

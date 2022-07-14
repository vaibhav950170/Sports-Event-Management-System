import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-eve',
  templateUrl: './show-eve.component.html',
  styleUrls: ['./show-eve.component.css']
})
export class ShowEveComponent implements OnInit {
  EventListWithoutFilter: any;

  constructor(private service:SharedService) { }

  EventList:any=[];

  ModalTitle!: string;
  ActivateAddEditEveComp:boolean=false;
  eve:any;

  
  EventNameFilter:string="";
  user=localStorage.getItem('user');
  

  ngOnInit(): void {
    this.refreshList();
    if(this.user=='1'){
      console.log("Normal User");
    }
  }

  addClick(){
    this.eve={
      EventId:0,
      EventDate:"",
      EventName:"",
      NoOfSlots:"",
      SportsName:""
    }
    this.ModalTitle="Add Event";
    this.ActivateAddEditEveComp=true;
    this.refreshList();
    

  }

  editClick(item: any){
    this.eve=item;
    this.ModalTitle="Edit Event";
    this.ActivateAddEditEveComp=true;
  }

  deleteClick(item: { eventId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteEvent(item.eventId).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEveComp=false;
    this.refreshList();
  }
  refreshEveList() {
    throw new Error('Method not implemented.');
  }


  refreshList(){
    this.service.getEveList().subscribe(data=>{
      this.EventList=data;
    
    });
  }



  sortResult(prop: string | number,asc: any){
    this.EventList = this.EventListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
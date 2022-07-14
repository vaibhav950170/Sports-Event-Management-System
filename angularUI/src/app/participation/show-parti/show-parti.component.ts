import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-parti',
  templateUrl: './show-parti.component.html',
  styleUrls: ['./show-parti.component.css']
})
export class ShowPartiComponent implements OnInit {
  ParticipationListWithoutFilter: any;
  user = localStorage.getItem('user');
  constructor(private service:SharedService) { }

  ParticipationList:any=[];

  ModalTitle!: string;
  ActivateAddEditPartiComp:boolean=false;
  parti:any;

  
  StatusFilter:string="";


  ngOnInit(): void {
    this.refreshList();
  }

  addClick(){
    this.parti={
      participationId:0,
      status:""
    }
    this.ModalTitle="Add Participation";
    this.ActivateAddEditPartiComp=true;
    this.refreshList();
    
 
  }

  editClick(item: any){
    this.parti=item;
    this.ModalTitle="Edit Partipation";
    this.ActivateAddEditPartiComp=true;
    this.refreshList();

  }

  deleteClick(item: { ParticipationId: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteParticipation(item.ParticipationId).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }
  declineClick(){
    this.service.getdeclineList().subscribe(data=>{
      this.ParticipationList=data;
    })
  }
  approveClick(){
    this.service.getapproveList().subscribe(data=>{
      this.ParticipationList=data;
    })
  }
  pendingClick(){
    this.service.getpendingList().subscribe(data=>{
      this.ParticipationList=data;
    })
  }
  closeClick(){
    this.ActivateAddEditPartiComp=false;
    this.refreshList();
  }
  refreshSpoList() {
    throw new Error('Method not implemented.');
  }


  refreshList(){
    this.service.getPartiList().subscribe(data=>{
      this.ParticipationList=data;
    
    });
  }



  sortResult(prop: string | number,asc: any){
    this.ParticipationList = this.ParticipationListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

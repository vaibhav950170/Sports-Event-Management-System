import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-show-ply',
  templateUrl: './show-ply.component.html',
  styleUrls: ['./show-ply.component.css']
})
export class ShowPlyComponent implements OnInit {

  constructor(private service:SharedService) { }

  PlayersList:any=[];
  username=localStorage.getItem('userid');
  ModalTitle!: string;
  ActivateAddEditPlyComp:boolean=false;
  ply:any;
  user=localStorage.getItem('user');
  ngOnInit(): void {
    this.refreshList();
    
  }


  addClick(){
    this.ply={
      PlayerId:0,
      PlayerName:""
    }
    this.ModalTitle="Add Players";
    this.ActivateAddEditPlyComp=true;
    this.refreshList();
  }

  editClick(item: any){
    this.ply=item;
    this.ModalTitle="Edit Players";
    this.ActivateAddEditPlyComp=true;
  }

  closeClick(){
    this.ActivateAddEditPlyComp=false;
    this.refreshList();
  }
  refreshPlyList() {
    throw new Error('Method not implemented.');
  }


  deleteClick(item: { email: any; }){
    if(confirm('Are you sure??')){
      this.service.deletePlayers(item.email).subscribe(data=>{
        alert(data.toString());
        this.refreshList();
      })
    }
  }

  refreshList(){
    this.service.getPlyList().subscribe(data=>{
      this.PlayersList=data;
    });
  }

}

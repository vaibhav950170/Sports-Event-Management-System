import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SharedService,private router:Router) { }
  
  
  username=localStorage.getItem('userid');
 user=localStorage.getItem('user');
  ngOnInit(): void {
    if(this.username==null){
      this.router.navigate(['../login']);
    }
  }

}

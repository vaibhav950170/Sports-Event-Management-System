import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  errorMessage!:string;
  constructor(private service:SharedService,private router:Router) { }
  @Input() login:any;
  userName!:string;
  password!:string;
  ngOnInit(): void {
    localStorage.removeItem('user');
  }

  signin(){
    var val={
      userName:this.userName,
      password:this.password
    };
    this.service.adminlogin(val).subscribe(
      res=>{
        if(res=="login"){
    localStorage.setItem('userid',this.userName);
          localStorage.setItem('user','0');
          this.router.navigate(['/home']);
        }
        else{
          this.errorMessage="Invalid Credentials";
        }
      }
    )
  }
}

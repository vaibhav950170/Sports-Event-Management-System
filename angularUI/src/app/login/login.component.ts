import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user='1'
  model: any={};
  errorMessage!: string;
  constructor(private service:SharedService,private router:Router) { }

  @Input() login:any;
  userName!:string;
  password!:string;


  ngOnInit() {
localStorage.removeItem('userid');
localStorage.clear();
  }

  signin(){
    localStorage.setItem('userid',this.userName);
    var val={
      userName:this.userName,
      password:this.password
    };
    this.service.signin(val).subscribe(
      
      datas=>{
        if(datas == "User not found"){
          this.errorMessage="User not Found.";
          
        }
        else if(datas=="Invalid Password"){
          this.errorMessage="Invalid Password.";
        }
        else{
          localStorage.setItem('user','1');
          this.router.navigate(['/home']);
        }
      }
    )
  }
}

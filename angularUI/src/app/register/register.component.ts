import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
string: any;
errormessage!:string;

  constructor(private service:SharedService,private router:Router) { }
  @Input() user:any;
  userName!:string;
  password!:string;

  ngOnInit(): void {
  }

  registration(){
    var val= {
      userName:this.userName,
      password:this.password
    };
    this.service.addUser(val).subscribe(
      res=>{
      if(res=="Invalid username"){
        this.errormessage="Invalid Username.";
      }
      else if(res=='Invalid Password'){
        this.errormessage="Invalid Password.";
      }
      else if(res=='Username already exists'){
        this.errormessage="Username already exists.";
      }
      else{
        this.router.navigate(['/login']);
      }
    })
  }
}

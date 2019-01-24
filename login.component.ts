import { Component } from '@angular/core';
import {Router} from '@angular/router';
import{User} from "../user.model";

import{Service} from "../service/service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
  
})
export class LoginComponent {
    user:User=new User();
    userData = [];
  constructor(private router:Router,private service:Service){
  
  }
  go(){
    this.router.navigate(['./b']);
}
  login() {
    this.service.login(this.user).subscribe(x => {
        if (x.userResponse.message != "warning") {
            this.router.navigate(['./b']);
        }
        else {
            alert('User is not Valid!!');
        }
    })
}
//getAllData() {
 //   this.service.getAllData().subscribe(x => {
      //  if (x.userResponse.message == "success") {
          //  this.userData = x.userResponse.userData;
        }
       // else {
  //s          alert(x.userResponse.message);
       // }
    //})
////}
//}

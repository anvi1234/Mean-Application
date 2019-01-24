import { Component } from '@angular/core';
import{Router} from "@angular/router";
import{User} from "../user.model";
import{Service} from "../service/service.service";

@Component({
    selector:'app-root',
    templateUrl:'./employee.component.html',
 
    
})
export class EmployeeComponent{
    title='Registeration Form';
 user:User=new User();
 
    routes: any;
 constructor(private router:Router,private service:Service){
    
 }
 saveData(){
     this.service.saveData(this.user).subscribe(y=>{
         if(y.userResponse.message!="warning"){
            this.router.navigate(['./b']);
         }
         else{
             alert("y.userResponse.message");
         }
     })
 }
}
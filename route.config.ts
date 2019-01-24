import{Routes} from "@angular/router";
import{LoginComponent} from "../loginform/login.component";
import{EmployeeComponent} from "../employee/employee.component";
import{WelcomeComp} from "../welcome/welcome.component";
import { StartComponent } from "../router/start.component";
export const routes:Routes=[
    {path:'',component:LoginComponent},
    {path:'start',component:StartComponent},
    {path:'a',component:EmployeeComponent},
    {path:'b',component:WelcomeComp},
    {path:'**',component:LoginComponent}
]
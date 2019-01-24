import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee/employee.component";
import{LoginComponent} from "./loginform/login.component";
import { BrowserModule } from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import{RouterModule} from "@angular/router";
import{WelcomeComp} from "./welcome/welcome.component";
import { routes } from "./router/route.config";
import{StartComponent} from "./router/start.component";
import{Service} from "./service/service.service";
import{HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [
        EmployeeComponent,LoginComponent,WelcomeComp,StartComponent
    ],
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule
    ],
    providers: [Service],
    bootstrap: [StartComponent]
})
export class ProjectModule { }


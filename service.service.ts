import{Injectable}from "@angular/core";
import{HttpClient} from "@angular/common/http";
import{map} from "rxjs/operators";
import { Observable, throwError } from 'rxjs';



@Injectable()
export class Service{
    URL="http://localhost:8000/api/user/";
   
    constructor(private http:HttpClient){
     
    }
    login(obj): Observable<any> {
        return this.http.post<any>(this.URL + 'login', obj).pipe(map(x=>{
          return x;
        }))
      }

    saveData(obj):any{
      return this.http.post(this.URL + 'createUser',obj).pipe(map(y=>{
        return y;
      }))
    }
    }
         
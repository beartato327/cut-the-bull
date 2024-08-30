import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { User } from "../../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

   /*  private userUrl = 'api/users';
    private http = inject(HttpClient);
    
    getUser(){
        return this.http.get<User[]>(this.userUrl);
    } */
}

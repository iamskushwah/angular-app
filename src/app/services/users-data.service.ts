import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http : HttpClient) {

   }

   getUserData(){
    let apiUrl = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get<any>(apiUrl);
   }

   getStudentData(){
    let apiUrl = "https://jsonplaceholder.typicode.com/posts/1/comments";
    return this.http.get<any>(apiUrl);
   }
}

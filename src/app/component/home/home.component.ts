import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData:any= [];

  constructor(private userdataService:UsersDataService) {} 


  ngOnInit(): void {
  }

apicall(){
  this.userdataService.getUserData().subscribe(data =>{
   this.userData = data;
   });
  }



}

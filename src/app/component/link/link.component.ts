import { Component, OnInit } from '@angular/core';

import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
studentdata:any=[];
  constructor(private userdataservice:UsersDataService) { }

  ngOnInit(): void {
  }
datacall(){
this.userdataservice.getStudentData().subscribe(data =>{
  this.studentdata = data;
  // console.log(data)
})

}
}

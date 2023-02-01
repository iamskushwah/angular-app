import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { UsersDataService } from 'src/app/services/users-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

requestBody : any;
  constructor(private service : UsersDataService) { }

  ngOnInit(): void {
  }


  users= {
    id : "",
    name : "",
    title: "",
   
  }
  ContactForm =new FormGroup({
   id : new FormControl(''), 
   name : new FormControl(''),
   title: new FormControl(''),
  });

  formSubmit(value:any){
    var id = value.id;
    var name = value.name;
    var title = value.title;
    this.requestBody = {
      "userId" : id,
      "title" : title,
      "body" : name
    }
  }
 data:any
  postUserData(){
    this.service.postUserData(this.requestBody).subscribe(res=>{
      console.log(res);
    })
  }
postCompanyData(){
  this.service.postCompanyData(this.requestBody).subscribe(data=>{
    console.log(data);
  })
}


  }


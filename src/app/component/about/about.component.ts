import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  users= {
    id : "",
    userid:"",
    title: "",
    body: "",
    name: "",
  }
  ContactFrom =new FormGroup({
   id : new FormControl(''), 
   usersid: new FormControl(''),
   body: new FormControl(''),
   title: new FormControl(''),
   name: new FormControl(''),

  });

  formSubmit(value:any){

    var id = value.id;
    
    var userid = value.userid;
    var body= value.body;
    var title = value.title;
    var name = value.name;

    console.log(id+"," +userid+"," +body+"," +title+"," +name);

  }
 


  }


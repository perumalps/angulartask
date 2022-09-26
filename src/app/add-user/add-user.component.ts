import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
use:any
 name:any;
 email:any;
 message:any 
  constructor(private appservice:AppService) {
  }

  ngOnInit(): void {
  }
  addUser(){
    this.use={
   'name' :this.name,
  'email' : this.email,
  'message' : this.message

    }

    this.appservice.insertUser(this.use).subscribe(data =>{
      console.log(data);
      this.use=data;
    })
  }
}



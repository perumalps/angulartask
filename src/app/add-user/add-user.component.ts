import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }

  ngOnInit(): void {
  }
  addUser(){
    this.use={
   'name' :this.name,
  'email' : this.email,
  'message' : this.message
    }
  }
}



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userList:any;
  userId:number=0;
  constructor(private appService:AppService,private router:Router,private aRoute:ActivatedRoute ) { }

  ngOnInit() {
    this.getAllUser()
  }
  getAllUser(){
   this.appService.getAllUser().subscribe(data=>{
    console.log(data);
    this.userList = data;
   })
  }
  
  editUser(userId : number){
    this.router.navigate(['user',userId],{relativeTo:this.aRoute})
  }
  deleteUser(userId:number){
    this.userId=userId
    this.appService.deleteUser(this.userId).subscribe((userList)=>{
      this.getAllUser()
    })
  }
}


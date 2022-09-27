import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
 id:number=0;
 isEdit:boolean = false;
  constructor(private appservice:AppService,private route:ActivatedRoute,private router:Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      console.log(data)
      this.isEdit=data.hasOwnProperty('userId')?true:false;
      this.id=data['userId'];
      if(this.isEdit){
      this.getUserById()
      }
    })
  }
  addUser():void{
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
  getUserById(){
   this.appservice.getById(this.id).subscribe(data =>{
    console.log(data);
    this.use= data;
    this.name = this.use[0]['name']
      this.email = this.use[0]['email']
      this.message = this.use[0]['message']
   })
  }
  editUser():void{
    this.appservice.editUser({id:this.id,name:this.name,email:this.email,message:this.message}).subscribe((newUser)=>{
      console.log(newUser)
      this.router.navigate(['../'])
    })
}
}


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 @Input('userDetail') user:any;
 @Input() userIndex:any;
 @Output() removeUserEvent = new EventEmitter();
 
 userId :any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((userId)=>{
      console.log(userId)
      this.userId = userId['id']
    })
  }
  removeUser(){
    console.log(this.userIndex)
    this.removeUserEvent.emit(this.userIndex)
  }
  id(id:number){
    this.userId = id

     console.log(id);
     
  }
}
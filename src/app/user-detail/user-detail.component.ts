import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 @Input('userDetail') user:any;
 @Input() userIndex:any;
 @Output() removeUserEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  removeUser(){
    console.log(this.userIndex)
    this.removeUserEvent.emit(this.userIndex)
  }
}
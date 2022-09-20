import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() user:any;
  newUser=''
  @Output() addNewUser = new EventEmitter();

  @Input() input:string = '';
  constructor() { }

  ngOnInit() {
    console.log(`user`,this.user)
  }
  ngOnChanges(){
    console.log(`user updated`,this.user)
  }

  addUser(){
    this.addNewUser.emit(this.newUser)
    // console.log(this.newUser)
  }

}
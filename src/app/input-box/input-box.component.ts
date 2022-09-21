import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
  task='';
  @Output() addTaskEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addTask(){
    console.log(this.task)
    this.addTaskEvent.emit(this.task)
    this.task='';
  }

}

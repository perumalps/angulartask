import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checked-box',
  templateUrl: './checked-box.component.html',
  styleUrls: ['./checked-box.component.scss']
})
export class CheckedBoxComponent implements OnInit {
   @Input() line:any;
   isChecked=false;
  constructor() { }

  ngOnInit(): void {
    console.log(this.line);
    
  }
ngOnChenges():void{
  console.log("todo updated.....",this.line);
  
}
}

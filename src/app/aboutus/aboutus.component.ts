import { Component, VERSION, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(){}
  
 
  ngOnInit() {
  }
  click(event:any){
    console.log(event.target.value);
  }
}

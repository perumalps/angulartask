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
  navigate() : void{
    console.log("navigated");
  }
}

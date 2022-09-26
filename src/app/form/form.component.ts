import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userList:any;
  
  constructor(private appService:AppService) { }

  ngOnInit(): void {
   this.appService.getAllUser().subscribe(data=>{
    console.log(data);
    this.userList = data;
   })
  }

}

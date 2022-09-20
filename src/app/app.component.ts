import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';
  value = 'values';
  printEvent='';
  print (event:string){
    console.log(event);
    this.printEvent = event;
    
  }
}

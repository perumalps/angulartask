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
  taskList:Array<any>=[];
  print (event:string){
    console.log(event);
    this.printEvent = event;
    
  }
  addTasks(task:string){
    this.taskList.push({taskName:task,isChecked:false})
    console.log(this.taskList);
  }
  saveToBackend(){
    console.log(this.taskList);   
  }
}

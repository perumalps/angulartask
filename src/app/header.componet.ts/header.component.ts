import { Component } from "@angular/core";

@Component({
    selector:'btn-app',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent{

    isDisabled:boolean = false;
    value:string ='';
    isActive:boolean=false;
    colors:Array<string> = ["blue","red","white"];

    content='this is the first content'
     onclick(event:any){
        console.log(event.target.value);
        
     }
     toggle(){
        this.isDisabled = !this.isDisabled
     }
}

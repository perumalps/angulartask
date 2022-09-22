import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((paramsData)=>{
      console.log('paramsData',paramsData)
    })
}
}
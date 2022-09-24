import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewModuleRoutingModule } from './new-module-routing.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    NewModuleRoutingModule
  ]
})
export class NewModuleModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './header.componet.ts/footer.component.ts/footer.component';
import { HeaderComponent } from './header.componet.ts/header.component';
import { MainComponent } from './main.component.ts/main.component';
import { SlidbarComponent } from './slidbar.component.ts/slidbar.component';
import { ChildComponent } from './child/child.component';
import { UsersListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CheckedBoxComponent } from './checked-box/checked-box.component';
import { InputBoxComponent } from './input-box/input-box.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContectusComponent } from './contectus/contectus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import {HttpClientModule} from  '@angular/common/http';
import { AddUserComponent } from './add-user/add-user.component'
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';

import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidbarComponent,
    MainComponent,
    ChildComponent,
    UsersListComponent,
    UserDetailComponent,
    CheckedBoxComponent,
    InputBoxComponent,
    AboutusComponent,
    Component1Component,
    Component2Component,
    ContectusComponent,
    PageNotFoundComponent,
    FooterComponent,
    AddUserComponent,
    FormComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidbarComponent,
    MainComponent,
    ChildComponent,
    UsersListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

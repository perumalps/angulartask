import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './header.componet.ts/footer.component.ts/footer.component';
import { HeaderComponent } from './header.componet.ts/header.component';
import { MainComponent } from './main.component.ts/main.component';
import { SlidbarComponent } from './slidbar.component.ts/slidbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContectusComponent } from './contectus/contectus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path :'',
    redirectTo : 'aboutus',
    pathMatch : 'full'
  },
  {
    path:'aboutus',
    component:AboutusComponent,
    children : [{
      path : 'component1',
      component : Component1Component
    },{
      path : 'user-list',
      component : UsersListComponent
    },
    {
      path : ':user',
      component : Component1Component
    } 
  ] 
  },
  {
    path : 'contectus',
    component : ContectusComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

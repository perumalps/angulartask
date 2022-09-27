import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddUserComponent } from './add-user/add-user.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ContectusComponent } from './contectus/contectus.component';
import { FormComponent } from './form/form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersListComponent } from './user-list/user-list.component';

const routes: Routes = [
  // {
  //   path :'',
  //   redirectTo : 'aboutus',
  //   pathMatch : 'full'
  // },
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
  },{
      path :'form',
      component : FormComponent
  },
      {
        path : 'add-user',
        component : AddUserComponent
      },
      {
        path : 'form/user/:userId',
        component : AddUserComponent
      },
  {
    path : 'contectus',
    component : ContectusComponent
  },
  {
    path : '**',
    component : PageNotFoundComponent
  },
  {
    path : 'module',
    loadChildren:()=> import('./new-module/new-module-routing.module').then(data =>data.NewModuleRoutingModule)
    
    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

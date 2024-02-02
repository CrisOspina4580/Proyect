import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PrincipalComponent } from './modulos/principal.component';
import { DasboardComponent } from './modulos/dasboard/dasboard.component';
import { LoginComponent } from './modulos/login/login.component';


const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
     children: [
      { path: 'dasboard', component: DasboardComponent },
      { path: '', redirectTo: '/dasboard', pathMatch: 'full'}
    ]
  },
  { path: 'login', component: LoginComponent },
];

//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

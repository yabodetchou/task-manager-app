import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { Router } from 'express';

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'tasklist', component:TasklistComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

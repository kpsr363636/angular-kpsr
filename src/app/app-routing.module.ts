import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAllComponent } from './employee-all/employee-all.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';

const routes: Routes = [
  {path:'', redirectTo:'add', pathMatch:'full'},
  {path: 'add', component:EmployeeRegisterComponent},
  // {path:'', redirectTo:'add', pathMatch:'full'},
  // { path: 'add', component: EmployeeRegisterComponent },
   { path: 'list', component: EmployeeAllComponent },
   { path: 'edit/:id', component: EmployeeEditComponent }
  
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

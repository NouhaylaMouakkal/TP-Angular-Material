import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { PaymentsComponent } from './payments/payments.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoadStudentsComponent } from './load-students/load-students.component';
import { LoadPaymentsComponent } from './load-payments/load-payments.component';
const routes: Routes = [
  {path: "home" , component: HomeComponent, },
  {path: "profile" , component: ProfileComponent, },
  {path: "login" , component: LoginComponent, },
  {path: "students" , component: StudentsComponent, },  
  {path: "payments" , component: PaymentsComponent, },
  {path: "dashboard" , component: DashboardComponent, },
  {path: "load-students" , component: LoadStudentsComponent, },
  {path: "load-payments" , component: LoadPaymentsComponent, },
  {path: "" , redirectTo: "/home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

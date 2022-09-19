import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeinfoComponent } from './employeeinfo/employeeinfo.component';
 

const routes: Routes = [
 { path:"",redirectTo:"home-page",pathMatch:"full"},
 { path: 'home-page', component: HomeComponent },
 { path: 'about-page', component: AboutusComponent },
 { path: 'services-page', component: ServicesComponent },
 { path: 'contact-page', component: ContactComponent },
 { path: 'employee-page', component: EmployeeinfoComponent },
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

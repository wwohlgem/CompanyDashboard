import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { HomeAnnouncementsComponent } from './home-announcements/home-announcements.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'select-company', component: SelectCompanyComponent },
  { path: 'announcements', component: HomeAnnouncementsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

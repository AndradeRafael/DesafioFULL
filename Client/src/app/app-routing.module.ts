import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleDetailsComponent } from './title/title-details/title-details.component';
import { TitleFormComponent } from './title/title-form/title-form.component';
import { TitleListComponent } from './title/title-list/title-list.component';


const routes: Routes = [
  {path: '', component: TitleListComponent},
  {path: 'new', component: TitleFormComponent},
  {path: 'details/:id', component: TitleDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

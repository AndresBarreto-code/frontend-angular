import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowGroupComponent } from './show-group/show-group.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'ver-grupo/:nombre', component: ShowGroupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

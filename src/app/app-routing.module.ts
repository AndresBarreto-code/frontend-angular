import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ShowGroupComponent } from './show-group/show-group.component';
import { CardsComponent } from './cards/cards.component';
import { GroupComponent } from './group/group.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'new-task', component: NewTaskComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'group/:nombre', component: ShowGroupComponent},
  { path: 'groups', component: GroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

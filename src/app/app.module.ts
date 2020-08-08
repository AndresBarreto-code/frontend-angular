import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavProfileComponent } from './nav-profile/nav-profile.component';
import { PhotoProfileComponent } from './photo-profile/photo-profile.component';
import { GroupTasksComponent } from './group-tasks/group-tasks.component';
import { TaskTodayComponent } from './task-today/task-today.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavProfileComponent,
    PhotoProfileComponent,
    GroupTasksComponent,
    TaskTodayComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

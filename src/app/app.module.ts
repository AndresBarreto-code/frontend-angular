import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { GroupComponent } from './group/group.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { PhotoProfileComponent } from './photo-profile/photo-profile.component';
import { TaskTodayComponent } from './task-today/task-today.component';
import { TasksComponent } from './tasks/tasks.component';
import { ShowGroupComponent } from './show-group/show-group.component';
import { CheckFechaPipe } from './check-fecha.pipe';
import { CardsComponent } from './cards/cards.component';

import { HttpService } from './http.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GroupComponent,
    HomeComponent,
    NavComponent,
    NewTaskComponent,
    PhotoProfileComponent,
    TaskTodayComponent,
    TasksComponent,
    ShowGroupComponent,
    CheckFechaPipe,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    HttpClientModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

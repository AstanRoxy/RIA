import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import du module de routage
import { TaskListComponent } from './features/tasks/components/task-list/task-list.component';

import { TaskFormComponent } from './task-form/task-form.component';
import { CoreModule } from './core/core.module'; // Import du CoreModule
import { RegisterComponent } from '@features/auth/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule // CoreModule gère HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

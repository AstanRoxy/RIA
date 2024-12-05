import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';

import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/Shared Module/shared.module';
import { TaskFormComponent } from 'src/app/task-form/task-form.component';


@NgModule({
  declarations: [TaskListComponent, TaskFormComponent],
  imports: [CommonModule, TasksRoutingModule, SharedModule]
})
export class TasksModule {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '@features/tasks/model/task.model';
import { TaskService } from '@features/tasks/service/task.service';


@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {
  task!: Task;
  

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadTask();
  }

  loadTask(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.taskService.getTask(id).subscribe(task => this.task = task);
    } else {
      console.error('No task ID found in the route');
      this.router.navigate(['/tasks']); // Redirection en cas d'erreur
    }
  }
  

  deleteTask(): void {
    this.taskService.deleteTask(this.task.id).subscribe(() => {
      this.router.navigate(['/tasks']);
    });
  }

  cancel(): void {
    this.router.navigate(['/tasks']);
  }
}

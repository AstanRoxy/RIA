import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@features/categories/models/category.model';
import { TaskService } from 'src/app/features/tasks/service/task.service'; // Assurez-vous que le chemin est correct
import { Task } from '../features/tasks/model/task.model'; // Assurez-vous que ce chemin est correct

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  task: Task = {} as Task;  // Utilisation d'une initialisation vide conforme à l'interface Task
  categories: Category[] = []; // Liste des catégories (si nécessaire)

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.taskService.getTaskById(taskId).subscribe((task) => {
        this.task = task;
      });
    }

    // Charger les catégories si nécessaire
    this.taskService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSubmit(form: any): void {
    if (form.valid) {
      this.taskService.updateTask(this.task).subscribe(
        (updatedTask) => {
          this.router.navigate(['/tasks']); // Rediriger vers la liste des tâches après la mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la tâche:', error);
        }
      );
    }
  }
}

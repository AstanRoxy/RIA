// src/app/features/categories/models/category.model.ts

import { Task } from "@features/tasks/model/task.model";

export interface Category {
    id: number;      // L'id de la catégorie
    name: string;    // Le nom de la catégorie
    tasks?: Task[];  // Un tableau optionnel de tâches
  }
  
  
  
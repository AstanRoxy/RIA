import { Category } from "@features/categories/models/category.model";
import { User } from "@features/users/services/user.service";

export interface Task {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    version: number;
    user: User;
    category: Category;
  }
  
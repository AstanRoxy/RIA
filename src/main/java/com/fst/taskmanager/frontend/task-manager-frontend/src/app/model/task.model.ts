export interface Task {
    id: number;
    name: string;
    description: string;
    status: string;  // Vous pouvez modifier le type si vous avez une liste de statuts plus précise
    dueDate: string;  // Vous pouvez utiliser un type Date selon vos besoins
  }
  
import { Injectable } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';

// Définir l'interface User
export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) {}

  // Changer le type de retour pour un tableau d'utilisateurs
  getUsers(): Observable<User[]> {
    return this.apiService.get('users');
  }

  getUser(id: number): Observable<User> {
    return this.apiService.get(`users/${id}`);
  }
}


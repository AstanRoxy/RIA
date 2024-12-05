import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
 // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://api.example.com/categories';  // Remplacez par votre URL d'API

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);  // Attendez un tableau d'objets de type Category
  }
}

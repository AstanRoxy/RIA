import { Component, OnInit } from '@angular/core';
import { Category } from '@features/categories/models/category.model';
import { CategoryService } from '@features/categories/services/category.service';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];  // Déclarez le type comme un tableau de Category

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;  // Assurez-vous que la réponse est de type Category[]
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list.component';

import { CategoriesRoutingModule } from './categories-routing.module';
import { SharedModule } from 'src/app/Shared Module/shared.module';
import { CategoryFormComponent } from './components/category-form.component';


@NgModule({
  declarations: [CategoryListComponent, CategoryFormComponent],
  imports: [CommonModule, CategoriesRoutingModule, SharedModule]
})
export class CategoriesModule {}

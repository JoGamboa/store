import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/models/category.model';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);
  getAll() {
    return this.http.get<Category[]>(
      `${environment.API_URL}/api/v1/categories`
    );
  }
}

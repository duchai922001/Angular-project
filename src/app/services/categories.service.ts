import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Category } from "../models/category.model";

@Injectable({
    providedIn: 'root'
  })

  export class CategoryService {
    private apiUrl = 'http://localhost/ecom/index.php/api'
  constructor(private http:HttpClient) { }

   getAll(): Observable<Category[]> {
      return this.http.get<{ data: Category[] }>(`${this.apiUrl}/category/getAll`).pipe(map(res => res.data))
    }
  }
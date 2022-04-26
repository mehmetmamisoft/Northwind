import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

/* enjekte edilen class */
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  apiUrl = 'https://localhost:44335/api/products/getall';

  constructor(private httpClient: HttpClient) {}

  getProducts():Observable<ListResponseModel<Product>> {
   return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
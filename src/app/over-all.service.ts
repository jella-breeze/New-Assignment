import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Users, Product} from './user';
import {MatDialog} from '@angular/material';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverAllService {

  currentData: Product = {
    id: null,
    name: '',
    price: ''
  };

  constructor(private http: HttpClient, private  dialog: MatDialog) {

  }
  register(userData) {
    return this.http.post<any>( 'http://localhost:3000/details', userData);
  }

  update(order): Observable<Product[]> {
    return this.http.put<Product[]>('http://localhost:3000/products' + '/' + order.id, order);
  }

  addUser(registerLogin) {
    return this.http.post('http://localhost:3000/users', registerLogin);
  }

  addProduct(order) {
    return this.http.post('http://localhost:3000/products', order);
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:3000/users');
  }

  get user() {
    return JSON.parse(localStorage.getItem('user'));
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:3000/users/${{id}}`);
  }

}

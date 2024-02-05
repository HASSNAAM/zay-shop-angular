import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  products: any[] = [];
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(
    private shopService: ShopService,
    private router: Router,
    private http: HttpClient,
    private cartService: CartService
  ) {}
  cartItems: any[] = [];
  ngOnInit(): void {
    this.shopService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  viewProduct(product: any): void {
    this.router.navigate(['/proinfo/:id']);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}

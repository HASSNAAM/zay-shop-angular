import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
    this.cartItemsSubject.next([...this.cartItems]);
  }

  getCartItemsSubject(): BehaviorSubject<any[]> {
    return this.cartItemsSubject;
  }
}

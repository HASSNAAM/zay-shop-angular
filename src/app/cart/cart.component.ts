// cart.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust the path
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  private cartItemsSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItemsSubscription = this.cartService
      .getCartItemsSubject()
      .subscribe((cartItems) => {
        this.cartItems = cartItems;
      });
  }

  ngOnDestroy(): void {
    this.cartItemsSubscription.unsubscribe();
  }
}

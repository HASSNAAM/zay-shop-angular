import { CarticonComponent } from './../carticon/carticon.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  cartItemCount: number = 0;
  constructor(private router: Router, private cartService: CartService) {}

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }
  ngOnInit(): void {
    this.cartService.getCartItemsSubject().subscribe((cartItems) => {
      this.cartItemCount = cartItems.length;
    });
  }
}

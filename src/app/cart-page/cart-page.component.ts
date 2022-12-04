import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartServicce: CartService) {
    this.setCart();
   }

  ngOnInit(): void {
  }
  setCart() {
    this.cart = this.cartServicce.getCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartServicce.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartServicce.changeQuantity(quantity, cartItem.food.id);
    this.setCart();
  }

}

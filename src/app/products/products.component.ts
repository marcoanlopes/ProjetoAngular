import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';

// import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {
  products = products;

  
  constructor(
    private route: ActivatedRoute,
    // private cartService: CartService
  ) { }

    // addToCart(product){
      // this.cartService.addToCart(product);
      // window.alert('Seu produto foi adicionado!')
    // }

  ngOnInit(
    
  ) {
  }

}

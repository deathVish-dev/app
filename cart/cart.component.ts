import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { Customer } from 'src/services/customer';
import { Cart } from 'src/services/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartitems:Array<Cart>=new Array();
  customer:Customer;
  constructor(private route:ActivatedRoute,
    private cartser:CartService
    ) { }

  ngOnInit() {
    this.customer= JSON.parse(localStorage.getItem('currentuser'));
    this.cartser.allCartItems(this.customer.id).subscribe(data=>{
      this.cartitems=data,error=>console.error(error);
      console.log(this.cartitems);
    }

    );
    /*this.route.paramMap.subscribe(params=>{
      let id=+params.get('id');
      console.log(id);
      });*/
  }

}

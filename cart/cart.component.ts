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

  cartitems:Cart[];
  customer:Customer;
  total:number;
  constructor(private route:ActivatedRoute,
    private cartser:CartService) {
      this.total=0;
     }

  ngOnInit() {
    this.customer= JSON.parse(localStorage.getItem('currentuser'));
    this.cartser.allCartItems(this.customer.id).subscribe(data=>{
      this.cartitems=data,error=>console.error(error);
      console.log(this.cartitems);

      for (let index = 0; index < this.cartitems.length; index++) {
        this.total+=(this.cartitems[index].quantity*this.cartitems[index].inven.rent);
      }

    });
    /*this.route.paramMap.subscribe(params=>{
      let id=+params.get('id');
      console.log(id);
      });*/
  }

}

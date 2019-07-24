import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/services/cart';
import { Customer } from 'src/services/customer';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/services/cart.service';
@Component({
  selector: 'app-bookproduct',
  templateUrl: './bookproduct.component.html',
  styleUrls: ['./bookproduct.component.css']
})
export class BookproductComponent implements OnInit {

  public dateTimeRange: Date[];
  cartitems:Array<Cart>=new Array();
  customer:Customer;
  total:number;
  price:number;
  addr:String;
  timeDiff:number;
  dayDifference:number;
  public startAt = new Date(2019, 7, 25, 10, 30, 30);
  constructor(private route:ActivatedRoute,
    private cartser:CartService
    ) { }

  ngOnInit() {
    this.addr='';
    this.total=0;

    this.customer= JSON.parse(localStorage.getItem('currentuser'));
    this.cartser.allCartItems(this.customer.id).subscribe(data=>{
      this.cartitems=data,error=>console.error(error);
      console.log(this.cartitems);
    });


    for (let i = 0; i < this.cartitems.length; i++) {
     this.price= (this.cartitems[i].prod.rent)*(this.cartitems[i].quantity)
     this.total+=this.price;
    }
    console.log(this.total);
    
  }
  
  OnConfirm()
  {
    this.timeDiff = Math.abs(this.dateTimeRange[1].getTime() - this.dateTimeRange[0].getTime());
    this.dayDifference = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
    console.log(this.dayDifference);
    console.log(this.addr);
  }
}

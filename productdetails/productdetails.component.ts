import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';
import { CartService } from 'src/services/cart.service';
import { Customer } from 'src/services/customer';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product:Product;
  count:number;
  msg:String;
  customer:Customer;
  var:any;
  constructor(private route:ActivatedRoute,
    private productser:ProductService,
    private cartser:CartService) { }

  ngOnInit() {
    this.customer= JSON.parse(localStorage.getItem('currentuser'));
    console.log('In Product Details On Init');
    console.log(this.customer);
    this.count=0;
    this.msg='';
    this.product=new Product(null,'','','',null,null,'');
    this.route.paramMap.subscribe(params=>{
    let id=+params.get('id');
    console.log(id);
    this.productser.getProduct(id)
    .subscribe(data=>{
      this.product=data,
      error => console.log('Product Nahi');
                this.cartser.selectedProdCart(this.customer.cid,id)
                      .subscribe(cart=>{
                            this.var=cart,error => console.log('error');
                            let cnt=+this.var['quantity'];
                            this.count=cnt;
      });
    
    });
    });
  }

  OnAdd()
  {
    if(this.count<5)
    {
    this.count++;
    }
    else
    {
      this.msg="Cannot Add More Than 5 Items";
    }
  }
  OnRemove()
  {
    if(this.count>0)
    {
    this.count--;
    }
    else
    {
      this.msg="No items in cart";
    }
  }

}

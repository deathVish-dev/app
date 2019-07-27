import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/services/cart';
import { Customer } from 'src/services/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/cart.service';
import { AddressService } from 'src/services/address.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Address } from 'src/services/address';
import { CardDetails } from 'src/services/cardDetails';
import { Order } from 'src/services/order';
import { CardDetailService } from 'src/services/cardDetails.service';
import { InventoryService } from 'src/services/inventory.service';
import { OrderService } from 'src/services/order.service';
@Component({
  selector: 'app-bookproduct',
  templateUrl: './bookproduct.component.html',
  styleUrls: ['./bookproduct.component.css']
})
export class BookproductComponent implements OnInit {

  newaddr:Address;
  public dateTimeRange: Date[];
  cartitems:Array<Cart>=new Array();
  customer:Customer;
  total:number;
  price:number;
 // addr:String;
  timeDiff:number;
  dayDifference:number;
  totaldaysrent:number;
  enableAddAddress:Boolean;
  form: FormGroup;
  addrs:Address[];
  addr:Address;
  enableAddressForm:Boolean;
  formaddr:Address;
  enableFormAddAddress:Boolean;
  enableEditAddress:Boolean;
  carddtls:CardDetails;
  order:Order;
  hidecard:Boolean;


  public startAt = new Date(2019, 7, 25, 10, 30, 30);
  constructor(private route:ActivatedRoute,
    private cartser:CartService,
    private addrser:AddressService,
    private formBuilder: FormBuilder,
    private cardservice:CardDetailService,
    private inven:InventoryService,
    private orderser:OrderService,
    private router:Router
    ) {   
      this.newaddr=new Address();
      this.hidecard=true;
      this.addr=new Address();
      this.carddtls=new CardDetails();
      this.order=new Order();
      this.enableAddAddress=true;
      this.enableAddressForm=false;
      this.enableFormAddAddress=true;
      this.enableEditAddress=false;
      this.form = this.formBuilder.group({
        addresss: ['']
      });
     /* this.customer=JSON.parse(localStorage.getItem("currentuser"));
      this.addrser.getAddress(this.customer.id).subscribe(data=>{
        if(data)
        {
          this.addrs=data;
          console.log(this.addrs);
          this.form.controls.addresss.patchValue(this.addrs[0].id);
         /* if(this.addrs.length<=5)
          {
            this.enableAddAddress=false;
          }
        }
      });*/
    }


    getAddresses()
    {
      this.addrser.getAddress(this.customer.id).subscribe(data=>{
        if(data)
        {
          this.addrs=data;
          console.log(this.addrs);
          this.form.controls.addresss.patchValue(this.addrs[0]);
          if(this.addrs.length<=5)
          {
            this.enableAddAddress=false;
          }
        }
      });
    }

  ngOnInit() {
    this.total=0;
    this.customer= JSON.parse(localStorage.getItem('currentuser'));
    this.cartser.allCartItems(this.customer.id).subscribe(data=>{
      this.cartitems=data,error=>console.error(error);
      console.log(this.cartitems);
      for (let i = 0; i < this.cartitems.length; i++) {
        this.price= (this.cartitems[i].inven.rent)*(this.cartitems[i].quantity)
        this.total+=this.price;
       }
       console.log(this.total);
       this.totaldaysrent=this.total;
    });
    this.addrser.getAddress(this.customer.id).subscribe(data=>{
      if(data)
      {
        this.addrs=data;
        console.log(this.addrs);
        this.form.controls.addresss.patchValue(this.addrs[0].id);
        if(this.addrs.length<=5)
        {
          this.enableAddAddress=true;
        }
      }
    });
    
  }

  calRent()
  {
    console.log("In Rent");
    this.timeDiff = Math.abs(this.dateTimeRange[1].getTime() - this.dateTimeRange[0].getTime());
    this.dayDifference = Math.ceil(this.timeDiff / (1000 * 3600 * 24));
    console.log(this.dayDifference);
    this.totaldaysrent=this.total*this.dayDifference;
    console.log("Total rent "+this.totaldaysrent);

  }
  


  onAddAddress()
  {
    console.log("Will Go Add Address Page");
   // this.formaddr=new Address();
    console.log("On Edit2 "+this.formaddr);
    this.enableAddressForm=true;
    this.enableFormAddAddress=true;
  }
  onEditAddress()
  {
    console.log("On Edit1 "+this.addr);
    this.formaddr=this.addr;
    console.log("On Edit2 "+this.formaddr);
    this.enableFormAddAddress=false;
    this.enableAddressForm=true;
    console.log("Will Go To Edit Address Page");
  }

  AddAddress()
  {
    this.formaddr.cust=this.addr.cust;
    this.addrser.addAddress(this.formaddr).subscribe(data=>{
      console.log(data);
    });
    this.enableAddressForm=false;
    this.getAddresses();
  }
  EditAddress()
  {
    this.addrser.updateAddress(this.formaddr).subscribe(data=>{
      console.log(data);
    });
    this.enableAddressForm=false;
  }

  selectChangeHandler (add:Address) {
    console.log("In Selected");
    this.addr = add;
    console.log(this.addr.cust);
    this.enableEditAddress=true;
  }

  storeDetails()
  {
    console.log(this.carddtls);
    this.cardservice.addCard(this.carddtls).subscribe(data=>{
      if(data)
      {
      this.hidecard=false;
      this.carddtls=data;
      console.log(this.carddtls);
      }
    });
  }



  OnConfirm()
  {
    for (let i = 0; i < this.cartitems.length; i++) 
    {     
    this.order.cust=this.customer;
    this.order.bdate=this.dateTimeRange[0];
    this.order.rdate=this.dateTimeRange[1];
    this.order.rent=this.totaldaysrent;
    this.order.card=this.carddtls;
    this.order.inven=this.cartitems[i].inven;
    this.order.quantity=this.cartitems[i].quantity;
    this.order.addr=this.addr;
    console.log(this.order);
    this.cartitems[i].inven.quantity=this.cartitems[i].inven.quantity-this.order.quantity;
    this.orderser.storeOrder(this.order).subscribe(data=>{
      console.log(data);
    });
    setTimeout( () => { console.log(i)}, 500 );
    this.inven.updateInventory(this.cartitems[i].inven).subscribe(data=>{
      console.log(data);
    });
    setTimeout( () => { console.log(i)}, 500 );
    this.cartser.deleteCartItems(this.cartitems[i].id).subscribe(data=>{
      console.log(data);
    });
    setTimeout( () => { console.log(i)}, 500 );
  }


    console.log("Submitted");
    this.router.navigate(['products']);
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/services/product';
import { Vendor } from 'src/services/vendor';

@Component({
  selector: 'app-addtoinventory',
  templateUrl: './addtoinventory.component.html',
  styleUrls: ['./addtoinventory.component.css']
})
export class AddtoinventoryComponent implements OnInit {

  public  products:Product[];
  ven:Vendor;
  
  constructor(public productser:ProductService){ }


  public getProducts()
  {
    this.ven=JSON.parse(localStorage.getItem("currentuser"));
    this.productser.getAllProductsnotininven(this.ven.id).subscribe(data =>{this.products=data,error => console.log(error);
      console.log(this.products);
    });  
  }

  ngOnInit() {
    this.getProducts();
  }

}

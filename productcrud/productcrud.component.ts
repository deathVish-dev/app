import { Component, OnInit } from '@angular/core';
import { Product } from 'src/services/product';
import { ProductService } from 'src/services/product.service';
import { ConcatSource } from 'webpack-sources';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  public  products:Product[];
  
  constructor(public productser:ProductService,private router:Router){ }


  public getProducts()
  {
    this.productser.getAllProduct().subscribe(data =>{this.products=data,error => console.log(error);
      console.log(this.products);
    });  
  }

  ngOnInit() {
    this.getProducts();
  }

  public deleteProd(prod: Product): void {  
    console.log("In Delete");
   /* this.productser.deleteProduct(prod.id).subscribe(data=>{
      console.log(data);
    });*/
 
  }  
  public editProd(prod: Product): void {
    console.log("In Edit");  
    //localStorage.removeItem('editEmpId');  
    //localStorage.setItem('editEmpId', employee.id.toString());  
   this.router.navigate(['addprod', prod.id]);  
  }


}

import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCatalogComponent } from '../product-catalog/product-catalog.component';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/services/product';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  empformlabel: string = 'Add Product';  
  empformbtn: string = 'Save';  
  pid:number;
  constructor(private formBuilder: FormBuilder, private router: Router,
     private prodser:ProductService,
     private route:ActivatedRoute) {  
  }  
  
  addForm: FormGroup;  
  btnvisibility: boolean = true;  
  prod:Product;
  ngOnInit() {  
  
    this.addForm = this.formBuilder.group({  
      id: [],  
      name: ['', Validators.required],  
      description: ['', [Validators.required, Validators.minLength(10)]],  
      category: ['', [Validators.required, Validators.maxLength(10)]],
      price:['', [Validators.required, Validators.maxLength(7)]],
      rent:['', [Validators.required, Validators.maxLength(4)]],
      img  :['', [Validators.required, Validators.maxLength(30)]],
    });  
  
    this.route.paramMap.subscribe(params=>{
      let prodid=+params.get('id');
      this.pid=prodid;
      console.log(this.pid);
    });
    if (this.pid > 0) {  
      this.prodser.getProduct(this.pid).subscribe(data => {  
        this.addForm.patchValue(data);  
      })  
      this.btnvisibility = false;  
      this.empformlabel = 'Edit Product';  
      this.empformbtn = 'Update';  
    }  
  }  
  onSubmit() {  
    console.log('Create fire');  
    this.prodser.addProduct(this.addForm.value)  
      .subscribe(data => {  
        let str=data;
        console.log(str);  
        this.router.navigate(['productcrud']);  
      },  
      error => {  
        console.log(error);
        this.router.navigate(['productcrud']);  
      });  
  }  
  onUpdate() {  
    console.log('Update fire');  
    this.prodser.updateProduct(this.addForm.value).subscribe(data => {
      let str=data;
      console.log(str);  
      this.router.navigate(['productcrud']);  
    },  
      error => {  
        console.log(error);  
        this.router.navigate(['productcrud']); 
      });  
  }  

}

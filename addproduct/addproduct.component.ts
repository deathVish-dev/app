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
  

  constructor(){}

  ngOnInit() {
  }

}

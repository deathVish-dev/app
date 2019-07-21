import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  data:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>{
      let id=+params.get('id');
      console.log(id);
      });
  }

}

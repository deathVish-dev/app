import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/services/vendor';
import { VendorService } from 'src/services/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-reg',
  templateUrl: './vendor-reg.component.html',
  styleUrls: ['./vendor-reg.component.css']
})
export class VendorRegComponent implements OnInit {

  emails:String[];
  shopids:String[];
  ven:Vendor;
  continue:Boolean;
  msg:String;
  constructor(private venservice:VendorService,private route:Router) {
    this.ven=new Vendor(null,'','','',null,null,'','No','');
    this.continue=false;
    this.msg='';
   }

  ngOnInit() {
    this.venservice.getMails().subscribe(data=>{this.emails=data,error=>console.error(error);
    });
    this.venservice.getShopId().subscribe(data=>{this.shopids=data,error=>console.error(error);
    });
  }

  onSubmit()
  {
  console.log("In Save");
  if(this.continue){
  console.log(this.ven);
  this.venservice.regVendor(this.ven).subscribe(data=>{console.log(data),error=>console.error(error);
  });
  this.route.navigate(['login']);
  }
  }

  onMailChange()
  {
    if(this.emails)
    {
    console.log(this.ven.mail);
    console.log(this.emails.indexOf(this.ven.mail));
    if(this.emails.indexOf(this.ven.mail)!=-1)
    {
      this.continue=false;
      this.msg='Mail Already In Use';
    }
    else{
      this.msg='';
      this.continue=true;
    }
  }
  else
  {
    this.continue=true;
  }
  }

  onIDChange()
  {
    if(this.shopids)
    {
    console.log(this.ven.shopid);
    console.log(this.shopids.indexOf(this.ven.shopid));
    if(this.shopids.indexOf(this.ven.shopid)!=-1)
    {
      this.continue=false;
      this.msg='Shop ID not valid, Already In Use.';
    }
    else{
      this.msg='';
      this.continue=true;
    }
  }
  else
  {
    this.continue=true;
  }
  }

}

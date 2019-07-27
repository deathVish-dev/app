import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/services/customer';
import { CustomerService } from 'src/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cust-reg',
  templateUrl: './cust-reg.component.html',
  styleUrls: ['./cust-reg.component.css']
})
export class CustRegComponent implements OnInit {

  emails:String[];
  cust:Customer;
  continue:Boolean;
  msg:String;
  constructor(private custser:CustomerService,private route:Router) {
    this.cust=new Customer(null,'','','',null,'');
    this.continue=false;
    this.msg='';
   }

  ngOnInit() {
    this.custser.getMails().subscribe(data=>{this.emails=data,error=>console.error(error);
    });
  }

  onSubmit()
  {
  console.log("In Save");
  if(this.continue){
  console.log(this.cust);
  this.custser.regUser(this.cust).subscribe(data=>{console.log(data),error=>console.error(error);
  });
  this.route.navigate(['login']);
  }
  }

  onChange()
  {
    console.log(this.cust.mail);
    console.log(this.emails.indexOf(this.cust.mail));
    if(this.emails.indexOf(this.cust.mail)!=-1)
    {
      this.continue=false;
      this.msg='Mail Already In Use';
    }
    else{
      this.msg='';
      this.continue=true;
    }
  }

}

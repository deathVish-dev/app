import { Component, OnInit } from '@angular/core';
import { Login } from 'src/services/login';
import { LoginService } from 'src/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/services/alert.service';
import { Customer } from 'src/services/customer';
import { CustomerService } from 'src/services/customer.service';
import { VendorService } from 'src/services/vendor.service';
import { Vendor } from 'src/services/vendor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public msg:String;
  public login:Login;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  cust:Customer;
  ven:Vendor;
  constructor( private loginser:LoginService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private custser:CustomerService,
        private venser:VendorService) { 
		if (localStorage.getItem('currentuser')) { 
            this.router.navigate(['/products']);
			}
        }
		
		
		
  ngOnInit() {
    this.msg='';
    this.login=new Login(null,'','','');
            this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
  }

  getData()
  {
    console.log(this.login.uname);
    console.log(this.login.pass);
    this.loginser.getDetails(this.f.username.value, this.f.password.value)
    .subscribe(data=>{
      this.login=data,error => {
              this.alertService.error(error);
              this.loading = false;
              }
      if(!this.login)
      {
        console.log("Null");
        this.msg='Wrong Credentials';
        this.loading = false;
        this.login=new Login(null,'','','');
        this.router.navigate(['login']);
      }
      else if(this.login.role=='Customer')
      {
        console.log("Login Successful");
        this.custser.getDetails(this.f.username.value, this.f.password.value)
        .subscribe(obj=>{this.cust=obj,
          error =>{console.log('Error')};
          localStorage.setItem('currentuser',JSON.stringify(this.cust));
          console.log(this.cust);
        });
        this.router.navigate(['products']);
      }
      else if(this.login.role=='Vendor')
      {

        console.log("Login Successful");
        this.venser.getDetails(this.f.username.value, this.f.password.value)
        .subscribe(obj=>{this.ven=obj,
          error =>{console.log('Error')};
          localStorage.setItem('currentuser',JSON.stringify(this.ven));
          console.log(this.ven);
        });
        this.router.navigate(['dash']);
      }
      else{
        this.router.navigate(['admindash']);
      }
    
    });
      

  }

  get f() { return this.loginForm.controls; }
  onSubmit()
  {
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
         this.loading = true;
    this.getData();
  }


}

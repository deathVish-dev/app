import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent A Trip Kit';
  status:Boolean;
   
  constructor(){
  if (localStorage.getItem('currentuser')) { 
      this.status=false;
  }
  else
  {
    this.status=false;
  }
}

OnConfirm()
{
  localStorage.clear();
  console.log("Session Destroyed");
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  name : string ="";
  surname : string ="";

  username : string ="";
  password : string ="";
  show: boolean= false;
  submit(){
  console.log(this.name);
  console.log(this.surname);
  console.log(this.username);
  console.log(this.password);

  
  this.clear();
  }
  clear(){
  this.name ="";
  this.surname ="";

  this.username ="";
  this.password = "";
  this.show = true;
  }
  

}

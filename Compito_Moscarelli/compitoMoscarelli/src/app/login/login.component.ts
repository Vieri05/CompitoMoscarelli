import { Component , OnInit } from '@angular/core';
import { Registered } from '../user/registered';
import { LoginService } from '../login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Login } from '../user/login';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

registeredMode : boolean = false; 
loginedMode : boolean = false;
message : any ;
response: String = "";
registeredResponse : String = "";

newAccess : Login = {  
 password: "",
 username: ""

}


newRegistered : Registered = {
  password:"",
  username:"",
  email:"",
 name:"",
 surname:""

};

constructor(private logineService : LoginService) {}


registra = () => {
this.logineService.registra(this.newRegistered).subscribe(() =>{

})
this.registeredResponse = "Registrazione effettuata con successo";

this.newRegistered = {
  password:"",
  username:"",
  email:"",
 name:"",
 surname:""

}


}


accesso = () => {
  
this.logineService.accedi(this.newAccess).subscribe((message)=>{
  if(message.valid == true) {
    this.response = " Credenziali corrette... Accesso effettuato correttamente ";
  }else if(message.valid == false) {
    this.response = " Credenziali errate... Accesso NON effettuato ";
  }
})
  this.newAccess = {
    password:"",
  username:"" 
  }
}


registerMode = () =>{
  this.registeredMode = true;
}

loginMode = () => {

  this.loginedMode = true;
}


}

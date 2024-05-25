import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) {}
  
  username: string = "";
  password: string = "";
  type: string = "";
  errorMessage: string = "";

  login(){
    if(this.username == ""){
      this.errorMessage = "Korisnicko ime je obavezno polje"
      return;
    } else if(this.password == ""){
      this.errorMessage = "Lozinka je obavezno polje"
      return;
    }else if(this.type == ""){
      this.errorMessage = "Tip je obavezno polje"
      return;
    }

    this.loginService.login(this.username).subscribe(data =>
      {
        if(!data){
          this.errorMessage = "Ne postoji korisnik sa tim korisnickim imenom"
          return;
        } else if(data.password != this.password){
          this.errorMessage = "Korisnicko ime i lozinka se ne poklapaju"
          return;
        } else if(data.type != this.type){
          this.errorMessage = "Tip korisnika nije odgovarajuci"
          return;
        }

        if(data.type == "GUEST"){
          this.router.navigate(['/homeguest'])
        } else if(data.type == "WAITER"){
          this.router.navigate(['/homewaiter'])
        }
      }
    )
  }
}

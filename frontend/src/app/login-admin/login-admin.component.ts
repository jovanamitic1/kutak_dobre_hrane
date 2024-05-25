import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private loginService: LoginService,
              private router: Router
  ) {}

  username: string = ""
  password: string = ""
  errorMessage: string = ""
  
  login(){
    if(this.username == ""){
      this.errorMessage = "Korisnicko ime je obavezno polje"
      return;
    } else if(this.password == ""){
      this.errorMessage = "Lozinka je obavezno polje"
      return;
    }

    this.loginService.login(this.username).subscribe(data => {
      if(!data){
        this.errorMessage = "Ne postoji korisnik sa tim korisnickim imenom"
        return;
      } else if(data.password != this.password){
        this.errorMessage = "Korisnicko ime i lozinka se ne poklapaju"
        return;
      } else if(data.type != 'ADMIN'){
        this.errorMessage = "Korisnik nema odgovarajuca prava pristupa"
        return;
      }

      this.router.navigate(['/homeadmin']);
      
    })

  }
}

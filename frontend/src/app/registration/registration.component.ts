import { Component } from '@angular/core';
import { User } from '../models/user';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private regService: RegistrationService, private router: Router){}

  firstname: string = ""
  lastname: string = ""
  username: string = ""
  password: string = ""
  email: string = ""
  sex: string = ""
  phone: string = ""
  address: string = ""
  question: string = ""
  answer: string = ""
  creditcard: string = ""
  errorMessage: string = ""
  regexExpr = /^(?=[a-zA-Z])(?=.*[A-Z])(?=(?:[^a-z]*[a-z]){3})(?=.*\d)(?=.*[!@#$%^&*()_+{}|:;<>,.?/~`-]).{6,10}$/;


  registration(){
    if(!this.checkPassword()){
      return;
    }

    this.regService.getAllUsernames().subscribe(data => {
      if(this.checkIfExists(data)) return;

      let user = new User()
      user.firstname = this.firstname
      user.lastname = this.lastname
      user.username = this.username
      user.password = this.password
      user.question = this.question
      user.answer = this.answer
      user.sex = this.sex
      user.address = this.address
      user.creditcard = this.creditcard
      user.email = this.email
      user.phone = this.phone
      user.type = "GUEST"

      this.regService.registration(user).subscribe(data => {
        if(data != null){
          this.router.navigate(['/homeguest'])
        }
      })
    })
  }

  checkPassword(){
    if(!/^(?=[a-zA-Z])/.test(this.password)){
      this.errorMessage = "Lozinka ne pocinje slovom"
      return false;
    } else if(!/(?=.*[A-Z])/.test(this.password)){
      this.errorMessage = "Lozinka ne sadrzi ni jedno veliko slovo"
      return false;
    } else if(!/(?=(?:[^a-z]*[a-z]){3})/.test(this.password)){
      this.errorMessage = "Lozinka ne sadrzi tri mala slova"
      return false;
    } else if(!/(?=.*\d)/.test(this.password)){
      this.errorMessage = "Lozinka ne sadrzi ni jedan broj"
      return false;
    } else if(!/(?=.*[!@#$%^&*()_+{}|:;<>,.?/~-])/.test(this.password)){
      this.errorMessage = "Lozinka ne sadrzi ni jedan specijalan karakter"
      return false;
    } else if(!/.{6,10}/.test(this.password)){
      this.errorMessage = "Lozinka nije odgovarajuce duzine"
      return false;
    }

    return true;
  }

  checkIfExists(data: User[]){
    let users = data
    let usernames: string[] = []
    let emails: string[] = []
    users.forEach(user => {
      usernames.push(user.username)
      emails.push(user.username)
    });

    if(emails.includes(this.email)){
      this.errorMessage = "Postoji nalog sa tom email adresom"
      return true;
    } else if(usernames.includes(this.username)){
      this.errorMessage = "Korisnicko ime je zauzeto"
      return true;
    }

    return false;
  }
}

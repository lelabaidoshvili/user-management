import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


function adminValidator(control: import("@angular/forms").AbstractControl): { [key: string]: any } | null {
  const value = control.value;
  if (value !== 'admin') {
    return { 'adminRequired': true };
  }
  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit{
  errorMessage: string = '';

  constructor( private  router: Router) {
  }

  form: FormGroup = new FormGroup ( {
    username: new FormControl('', [Validators.required, adminValidator]),
    password: new FormControl('', [Validators.required, adminValidator])
  })
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.errorMessage = 'Username or password is incorrect';
      return;
    } else {
      this.router.navigate(['/user-list'])
    }
  }
  AddUsername() {

  }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private routes: Router, private login: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  sendFormLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.login.login({ email, password }).subscribe(res => {
        sessionStorage.setItem('token', res.access_token);
        sessionStorage.setItem('id_physio', res.user.id_physio.toString()); 
        sessionStorage.setItem('name', res.user.name);
           this.routes.navigate(['/dashboard']);
      }, error => {
        console.error('Error en el login', error);
      });
    } else { 
      console.error('Error al enviar el formulario de login');
    }
  }
}

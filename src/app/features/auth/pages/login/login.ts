import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm: FormGroup;
  isLoading = signal(false);
  errorMessage = signal('');

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  sendFormLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const { email, password} = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        sessionStorage.setItem('token', res.access_token);
        sessionStorage.setItem('id_physio', res.user.id_physio.toString());
        sessionStorage.setItem('name', res.user.name);

        this.isLoading.set(false);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error en el login', error);
        this.isLoading.set(false);

        if (error.status === 401) {
          this.errorMessage.set('Email o contraseña incorrectos');
        } else {
          this.errorMessage.set('Error al iniciar sesión. Inténtalo de nuevo.');
        }
      },
    });
  }
}

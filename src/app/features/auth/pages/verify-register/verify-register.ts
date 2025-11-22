import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-verify-register',
  imports: [],
  templateUrl: './verify-register.html',
  styleUrl: './verify-register.scss',
})
export class VerifyRegister {
  constructor(
    private routes: Router,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
          if (token) {
          } this.authService.verifyEmail(token).subscribe({
            next: () => {
              this.router.navigate(['/login'], { queryParams: { verified: 'true' } });
            },
            error: (err) => {
              console.error('Verification failed', err);
              this.router.navigate(['/login'], { queryParams: { verified: 'false' } });
            },
          });   
    });
  }

  goToLogin() {
    this.routes.navigate(['/login']);
  }
}

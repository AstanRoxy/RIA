import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/components/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/']);  // Navigue vers la page d'accueil
      },
      (error) => {
        this.errorMessage = 'Invalid username or password';  // Affiche un message d'erreur
        console.error('Login failed:', error);
      }
    );
  }
}

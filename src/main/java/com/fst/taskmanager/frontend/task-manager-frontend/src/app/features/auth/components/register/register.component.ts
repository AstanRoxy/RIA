import { Component } from '@angular/core';
import { AuthService } from '@features/auth/components/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { email: '', password: '', confirmPassword: '' };
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    this.authService.register(this.user).subscribe(
      response => {
        console.log('Utilisateur enregistré avec succès', response);
      },
      error => {
        this.errorMessage = 'Erreur lors de l’enregistrement.';
        console.error(error);
      }
    );
  }
}

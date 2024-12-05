import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UserService } from '@users/services/user.service'; // Assurez-vous d'avoir le bon chemin pour UserService

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user!: User; // Déclaration de l'utilisateur

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Récupérer l'ID depuis la route ou de manière statique, par exemple ici pour l'ID 1
    const userId = 1;
    this.loadUserProfile(userId);
  }

  loadUserProfile(id: number): void {
    this.userService.getUser(id).subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);  // Pour voir les données récupérées
      },
      (error) => {
        console.error('Error loading user profile:', error);
      }
    );
  }
}

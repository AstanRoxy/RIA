import { Component, OnInit } from '@angular/core';
import { UserService } from '@features/users/services/user.service';

// Définir une interface ou importer l'interface User si elle existe déjà
export interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];  // Type explicite pour users

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }
}

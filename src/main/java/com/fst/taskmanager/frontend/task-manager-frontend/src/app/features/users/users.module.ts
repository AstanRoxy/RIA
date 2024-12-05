import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/Shared Module/shared.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [UserListComponent, UserProfileComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule]
})
export class UsersModule {}

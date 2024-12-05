import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '@features/auth/components/register/register.component';
import { UserProfileComponent } from '@features/users/components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Route par défaut
    // Autres routes ici
  { path: 'tasks', loadChildren: () => import('@features/tasks/tasks.module').then(m => m.TasksModule) },


  { path: '**', redirectTo: '/tasks' }, // Redirection pour routes inexistantes
  { path: 'register', component: RegisterComponent },
  { path: 'user/:id', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '@features/auth/components/register/register.component';
import { UserProfileComponent } from '@features/users/components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Route par défaut
  { path: 'tasks', loadChildren: () => import('@features/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'register', component: RegisterComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: '**', redirectTo: '/tasks' }, // Redirection pour routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Configuration des routes
  exports: [RouterModule]  // Exportation pour pouvoir les utiliser ailleurs
})
export class AppRoutingModule {}

// Exporter la variable routes pour pouvoir l'utiliser dans d'autres fichiers
export { routes };

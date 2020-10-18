import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from './user/auth.guard';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'todo', 
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

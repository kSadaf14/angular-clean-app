import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { 
    path: '', 
    loadChildren: () => import('./common/common.module').then(m => m.CommonPagesModule) 
  },
  { 
    path: 'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
  },
  { 
    path: 'professional', 
    loadChildren: () => import('./professional/professional.module').then(m => m.ProfessionalModule) 
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

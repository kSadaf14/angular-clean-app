import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { CommonRoutingModule } from './common-routing.module';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    SplashComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AngularCommonModule,
    ReactiveFormsModule,
    CommonRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})
export class CommonPagesModule { }

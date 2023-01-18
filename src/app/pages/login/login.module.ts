import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRotas } from './login.routes';
import { SpotifyService } from 'src/app/services/spotify-service.service';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LoginRotas)
  ],
  providers: [
    SpotifyService
  ]
})
export class LoginModule { }

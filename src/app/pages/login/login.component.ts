import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _spotifyService: SpotifyService,
              private _router: Router) {}

  ngOnInit(): void {
    this._verifyTokenUrlCallback();
  }

  private _verifyTokenUrlCallback() {
    const token = this._spotifyService.obterTokenUrlCallback();
    if (!!token) {
      this._spotifyService.definirAccessToken(token);
      this._router.navigate(['/player']);
    } 
  }

  abrirPageLogin() {
    window.location.href = this._spotifyService.obterUrlLogin();
  }
}

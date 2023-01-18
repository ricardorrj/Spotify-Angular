import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify-service.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticadoGuard implements CanLoad {

  constructor(private _router: Router,
              private _spotifyService: SpotifyService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = localStorage.getItem('token');
    if (!token) {
      return this._naoAutenticado();
    }

    return new Promise((res) => {
      const usuarioCriado = this._spotifyService.inicializarUsuario();
      if (usuarioCriado) {
        res(true);
      } else {
        res(this._naoAutenticado());
      }
    });
  }

  private _naoAutenticado() {
    localStorage.clear();
    this._router.navigate(['/login']);
    return false;
  }
}

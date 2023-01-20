import { AfterContentChecked, Component } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from 'src/app/interfaces/IUsuario';
import { SpotifyService } from 'src/app/services/spotify-service.service';

@Component({
  selector: 'rodape-usuario',
  templateUrl: './rodape-usuario.component.html',
  styleUrls: ['./rodape-usuario.component.scss']
})
export class RodapeUsuarioComponent implements AfterContentChecked {

  sairIcon = faSignInAlt;
  usuario: IUsuario = null;

  constructor(private _spotifyService: SpotifyService) {}

  ngAfterContentChecked(): void {
    if (!!!this.usuario) {
      this.usuario = this._spotifyService.usuario;
    }
  }

  logout() {
    this._spotifyService.logout();
  }
}

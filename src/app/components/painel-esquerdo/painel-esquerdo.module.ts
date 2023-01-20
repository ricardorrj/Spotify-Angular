import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelEsquerdoComponent } from './painel-esquerdo.component';
import { BotaoMenuModule } from '../botao-menu/botao-menu.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SpotifyService } from 'src/app/services/spotify-service.service';



@NgModule({
  declarations: [
    PainelEsquerdoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BotaoMenuModule
  ], 
  exports: [
    PainelEsquerdoComponent
  ], 
  providers: [
    SpotifyService
  ]
})
export class PainelEsquerdoModule { }

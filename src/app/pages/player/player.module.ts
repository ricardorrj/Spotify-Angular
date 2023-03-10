import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';
import { RouterModule } from '@angular/router';
import { PainelEsquerdoComponent } from 'src/app/components/painel-esquerdo/painel-esquerdo.component';
import { BotaoMenuComponent } from 'src/app/components/botao-menu/botao-menu.component';
import { RodapeUsuarioComponent } from 'src/app/components/rodape-usuario/rodape-usuario/rodape-usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas),
    FontAwesomeModule
  ]
})
export class PlayerModule { }

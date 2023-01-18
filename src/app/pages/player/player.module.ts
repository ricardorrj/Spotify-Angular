import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRotas } from './player.routes';
import { RouterModule } from '@angular/router';
import { PainelEsquerdoModule } from 'src/app/components/painel-esquerdo/painel-esquerdo.module';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PainelEsquerdoModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }

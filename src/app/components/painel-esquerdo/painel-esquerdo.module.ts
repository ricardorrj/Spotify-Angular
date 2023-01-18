import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelEsquerdoComponent } from './painel-esquerdo.component';



@NgModule({
  declarations: [
    PainelEsquerdoComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    PainelEsquerdoComponent
  ]
})
export class PainelEsquerdoModule { }

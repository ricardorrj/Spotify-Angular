import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'botao-menu',
  templateUrl: './botao-menu.component.html',
  styleUrls: ['./botao-menu.component.scss']
})
export class BotaoMenuComponent {

  @Input()
  descricaoButton: string = 'Home';

  @Input()
  selecionado: boolean = false;

  @Output()
  click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }

}

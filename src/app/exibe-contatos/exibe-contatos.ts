import { Component, inject } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { Contato } from '../model/contato';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-exibe-contatos',
  imports: [DatePipe],
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss',
})
export class ExibeContatos {

  #agendaService = inject(AgendaService);

  obterContatos() {
    return this.#agendaService.obterTodos();
  }

  remover(contato: Contato) {
    this.#agendaService.remover(contato);
  }

}

import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  readonly #contatos: Contato[];

  constructor() {
    this.#contatos = [];
  }

  // Verifica se o contato já existe
  existe(c: Contato): boolean {
    return this.#contatos.find(contato => contato.email === c.email) !== undefined;
  }

  // Adiciona um contato
  adicionar(c: Contato): boolean {
    if (!c || this.existe(c)) {
      return false;
    }

    this.#contatos.push(c);
    return true;
  }

  // Remove um contato
  remover(c: Contato): boolean {
    const indice = this.#contatos.indexOf(c);

    if (indice === -1) {
      return false;
    }

    this.#contatos.splice(indice, 1);
    return true;
  }

  // Retorna todos os contatos
  obterTodos(): Contato[] {
    return [...this.#contatos];
  }
}
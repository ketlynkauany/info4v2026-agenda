import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  readonly #contatos: Contato[];

  constructor() {
    this.#contatos = []
  }

  /** Adiciona um novo contato na agenda 
   * @param cc o contato a ser adicionado
   * @return true se o contato foi adicionado, false caso contrário.
  */
  adicionar(cc: Contato): boolean {
    if (cc) {
      this.#contatos.push(cc)
      return true
    }
    return false
  }

  /** Devolve todos os contatos da agenda */
  obterTodos(): Contato[] {
    return [...this.#contatos]
  }
}

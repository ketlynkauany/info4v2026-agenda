import { Component, inject } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { TipoContato } from '../model/contato';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})
export class AdicionaContato {

  #agendaService = inject(AgendaService);
  #fb = inject(FormBuilder);

  protected formContato: FormGroup;

  constructor() {
    this.formContato = this.#fb.group({
      nome: [''],
      telefone: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail\\.com$')
        ]
      ],
      aniversario: [new Date()],
      tipo: [TipoContato.AMIGO]
    });
  }

  adicionar() {

    if (this.formContato.invalid) {
      alert('Digite um e-mail válido (@gmail.com).');
      return;
    }

    const contato = this.formContato.value;

    if (this.#agendaService.adicionar(contato)) {

      this.formContato.reset({
        nome: '',
        telefone: '',
        email: '',
        aniversario: new Date(),
        tipo: TipoContato.AMIGO
      });

    } else {
      alert('Já existe um contato com esse e-mail.');
    }
  }
}

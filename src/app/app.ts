import { Component, signal } from '@angular/core';
import { ExibeContatos } 
from "./exibe-contatos/exibe-contatos";
import { AdicionaContato } 
from "./adiciona-contato/adiciona-contato";

@Component({
  selector: 'app-root',
  imports: [ExibeContatos, AdicionaContato],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agenda');
}

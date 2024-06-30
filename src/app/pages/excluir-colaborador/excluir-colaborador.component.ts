import { Component } from '@angular/core';

import { Colaborador } from '../colaborador/colaborador';

@Component({
  selector: 'app-excluir-colaborador',
  standalone: true,
  imports: [],
  templateUrl: './excluir-colaborador.component.html',
  styleUrl: './excluir-colaborador.component.css',
})
export class ExcluirColaboradorComponent {
  colaborador: Colaborador = { id: 0, nome: '', cargo: '' };

  constructor() {}
}

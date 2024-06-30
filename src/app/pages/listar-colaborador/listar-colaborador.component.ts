import { Colaborador } from './../colaborador/colaborador';

import { Component } from '@angular/core';

import { HeaderComponent } from '../../components/header/header.component';
import { ColaboradorComponent } from '../colaborador/colaborador.component';
import { ColaboradorService } from '../colaborador/colaborador.service';

@Component({
  selector: 'app-listar-colaborador',
  standalone: true,
  imports: [HeaderComponent, ColaboradorComponent],
  templateUrl: './listar-colaborador.component.html',
  styleUrl: './listar-colaborador.component.css',
})
export class ListarColaboradorComponent {
  constructor(private service: ColaboradorService) {}
  listarColaboradores: Colaborador[] = [];
  colaborador: Colaborador = { nome: '', cargo: '' };

  ngOnInit(): void {
    this.service.listar().subscribe((colaboradores) => {
      this.listarColaboradores = colaboradores;
    });
  }
}

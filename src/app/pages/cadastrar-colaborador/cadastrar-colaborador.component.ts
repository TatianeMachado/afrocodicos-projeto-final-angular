import { Colaborador } from './../colaborador/colaborador';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ColaboradorService } from '../colaborador/colaborador.service';

@Component({
  selector: 'app-cadastrar-colaborador',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-colaborador.component.html',
  styleUrl: './cadastrar-colaborador.component.css',
})
export class CadastrarColaboradorComponent {
  constructor(private router: Router, private service: ColaboradorService) {}
  colaborador: Colaborador = { nome: '', cargo: '' };
  cadastrarColaborador() {
    this.service.criar(this.colaborador).subscribe(() => {
      this.router.navigate(['/listarColaborador']);
    });
  }
  cancelar() {
    this.router.navigate(['/listarColaborador']);
  }
}

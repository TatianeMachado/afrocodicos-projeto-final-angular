import { Colaborador } from './../colaborador/colaborador';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ColaboradorService } from '../colaborador/colaborador.service';

@Component({
  selector: 'app-editar-colaborador',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './editar-colaborador.component.html',
  styleUrl: './editar-colaborador.component.css',
})
export class EditarColaboradorComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ColaboradorService
  ) {}

  ngOnInit(): void {
    const id = this['route'].snapshot.paramMap.get('id');
    this['service']
      .buscarPorId(parseInt(id!))
      .subscribe((colaborador: Colaborador) => {
        this.colaborador = colaborador;
      });
  }

  colaborador: Colaborador = {
    id: 0,
    nome: '',
    cargo: '',
  };

  editarColaborador() {
    this.service.editar(this.colaborador).subscribe((colaborador) => {
      this.router.navigate(['/listarColaborador']);
    });
  }
  cancelar() {
    this.router.navigate(['/listarColaborador']);
  }
}

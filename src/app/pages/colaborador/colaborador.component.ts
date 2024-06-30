import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Colaborador } from './colaborador';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router';
import { ColaboradorService } from './colaborador.service';

@Component({
  selector: 'app-colaborador',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css'], // Corrigido para 'styleUrls'
})
export class ColaboradorComponent {
  @ViewChild('myModal') myModal!: ElementRef;
  @Input() colaborador: Colaborador = { nome: '', cargo: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ColaboradorService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service.buscarPorId(parseInt(id)).subscribe((colaborador) => {
        this.colaborador = colaborador;
      });
    }
  }

  excluirColaborador(): void {
    if (this.colaborador.id != null) {
      console.log(`Excluindo colaborador com id: ${this.colaborador.id}`);
      this.service.excluir(this.colaborador.id).subscribe(
        () => {
          console.log('Colaborador excluído');
          this.hideModal();
          this.router.navigate(['/excluirColaborador']);
        },
        (error) => {
          console.error('Erro ao excluir colaborador:', error);
        }
      );
    }
  }

  hideModal(): void {
    if (this.myModal) {
      console.log('Escondendo modal');
      this.myModal.nativeElement.style.display = 'none';
    }
  }
}

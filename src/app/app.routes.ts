import { Routes } from '@angular/router';
import { ListarColaboradorComponent } from './pages/listar-colaborador/listar-colaborador.component';
import { CadastrarColaboradorComponent } from './pages/cadastrar-colaborador/cadastrar-colaborador.component';
import { EditarColaboradorComponent } from './pages/editar-colaborador/editar-colaborador.component';
import { ExcluirColaboradorComponent } from './pages/excluir-colaborador/excluir-colaborador.component';
import { ContatoComponent } from './pages/contato/contato.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarColaborador',
    pathMatch: 'full',
  },
  { path: 'listarColaborador', component: ListarColaboradorComponent },
  { path: 'cadastrarColaborador', component: CadastrarColaboradorComponent },
  { path: 'atualizarColaborador/:id', component: EditarColaboradorComponent },
  { path: 'excluirColaborador/:id', component: ExcluirColaboradorComponent },
  { path: 'excluirColaborador', component: ExcluirColaboradorComponent },
  { path: 'home', component: ListarColaboradorComponent },
  { path: 'voltar', component: ListarColaboradorComponent },
  { path: 'contatoColaborador', component: ContatoComponent },
];

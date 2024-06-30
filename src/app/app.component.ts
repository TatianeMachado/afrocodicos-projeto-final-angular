import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ColaboradorService } from './pages/colaborador/colaborador.service';
import { Colaborador } from './pages/colaborador/colaborador';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'projetoFinal-angular';

  constructor(private router: Router, private service: ColaboradorService) {}
  ngOnInit(): void {}
  colaborador: Colaborador = { nome: '', cargo: '' };
}

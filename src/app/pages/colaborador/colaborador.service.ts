import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Colaborador } from './colaborador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColaboradorService {
  private readonly API = 'http://localhost:3000/colaboradores';
  constructor(private httpClient: HttpClient) {}
  listar(): Observable<Colaborador[]> {
    return this.httpClient.get<Colaborador[]>(this.API);
  }
  criar(colaborador: Colaborador): Observable<Colaborador> {
    return this.httpClient.post<Colaborador>(this.API, colaborador);
  }
  editar(colaborador: Colaborador): Observable<Colaborador> {
    const url = `${this.API}/${colaborador.id}`;
    return this.httpClient.put<Colaborador>(url, colaborador);
  }
  excluir(id: number): Observable<Colaborador> {
    const url = `${this.API}/${id}`;
    return this.httpClient.delete<Colaborador>(url);
  }
  buscarPorId(id: number): Observable<Colaborador> {
    const url = `${this.API}/${id}`;
    return this.httpClient.get<Colaborador>(url);
  }
}

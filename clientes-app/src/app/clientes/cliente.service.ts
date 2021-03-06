import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
private urlEndpoint:string ='http://localhost:8080/api/clientes';

private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]>{
    //return of (CLIENTES);
    return this.http.get<Cliente[]>(this.urlEndpoint);
  }

  create(cliente:Cliente) : Observable<Cliente>{

    return this.http.post<Cliente>(this.urlEndpoint, cliente, {headers:this.httpHeaders})
  }

  getCliente(id): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`)  
  }

  update(cliente:Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.urlEndpoint}/${cliente.id}`, cliente,{headers: this.httpHeaders});
  }
}

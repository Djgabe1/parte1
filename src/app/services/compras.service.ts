import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Compras } from "../models/compras";

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  baseURL = environment.apiURL + '/compras/';
  clienteUrl = environment.apiURL + '/clientes/';
  constructor( private http: HttpClient) { }

  getCompras(date: string): Observable<Compras>{
    const url = this.baseURL + date;
    return this.http.get<Compras>(url);
  };

  getClientes(clientId: string): Observable<Compras>{
    const url = this.clienteUrl + clientId;
    return this.http.get<Compras>(url);
  }


}

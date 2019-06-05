import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Valor } from '../models/valor';

@Injectable({
  providedIn: 'root'
})
export class ValorService {

  selectedValor: Valor;
  valor: Valor[];
  readonly URL_API = 'http://localhost:3000/api/valor'

  constructor(private http: HttpClient) {
    this.selectedValor = new Valor();
  }

  getValores(){
    return this.http.get(this.URL_API);
  }

  postValor(valor: Valor){
    return this.http.post(this.URL_API, valor);
  }

  putValor(valor: Valor){
    return this.http.put(this.URL_API+`/${valor._id}`, valor);
  }

  deleteValor(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}

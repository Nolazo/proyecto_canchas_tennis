import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoCancha } from '../models/tipoCancha/tipo-cancha';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoCanchaService {

  selectedTipo: TipoCancha;
  tipos: TipoCancha[];
  readonly URL_API = 'http://localhost:3000/api/tipoCancha'

  constructor(public http: HttpClient) {
    this.selectedTipo = new TipoCancha();
  }
  getTipos(){
    return this.http.get(this.URL_API);
      // .pipe(map( data =>{
      //   return data['tipoCanchas'].items;
      // }));
  }

  postTipos(tipoCancha: TipoCancha){
    return this.http.post(this.URL_API, tipoCancha);
  }


}

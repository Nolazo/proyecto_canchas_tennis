import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancha } from '../models/cancha';


@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  selectedCancha: Cancha; // para crear una nueva cancha
  canchas: Cancha[]; //para obtener los datos de la bd
  readonly URL_API = 'http://localhost:3000/api/cancha';

  constructor(private http: HttpClient) { 
    this.selectedCancha = new Cancha();
  }

  getCanchas(){
    return this.http.get(this.URL_API);
  }

  postCancha(cancha: Cancha){
    return this.http.post(this.URL_API, cancha);
  }

  putCancha(cancha: Cancha){
    return this.http.put(this.URL_API+`/${cancha._id}`, cancha);
  }

  deleteCancha(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}
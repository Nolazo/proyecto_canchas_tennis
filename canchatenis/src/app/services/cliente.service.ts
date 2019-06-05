import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  selectedCliente: Cliente;
  clientes: Cliente[];
  readonly URL_API = 'http://localhost:3000/api/cliente';
  url_q1 = 'http://localhost:3000/api/cliente';

  constructor(private http: HttpClient) { 
    this.selectedCliente = new Cliente();
  }

  noAuthHeader = {headers: new HttpHeaders({'NoAuth': 'True'}) };

  getClientes(){
    return this.http.get(this.URL_API);
  }

  getClientesSinUsername(){
    return this.http.get(this.URL_API + '/test');
  }

  postCliente(cliente: Cliente){
    return this.http.post(this.URL_API, cliente);
  }

  putCliente(cliente: Cliente){
    return this.http.put(this.URL_API+`/${cliente._id}`, cliente);
  }

  deleteCliente(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }

  postUser(cliente: Cliente){
    return this.http.post(this.URL_API + '/register', cliente, this.noAuthHeader);
  }

  //---------LOGICA DEL LOGIN---------
  login(authCredentials){
    return this.http.post(this.URL_API + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile(){
    return this.http.get(this.URL_API + '/p/profile');
  }

  setToken(token: string){
    localStorage.setItem('token', token);
  }

  //---------HELPERS---------

  getToken(){
    return localStorage.getItem('token');
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    let token = this.getToken();
    if(token){
      let userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }else{
      return null;
    }
  }

  isLoggedIn(){
    let userPayload = this.getUserPayload();
    if(userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
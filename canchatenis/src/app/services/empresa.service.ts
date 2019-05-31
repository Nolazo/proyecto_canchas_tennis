import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  selectedEmpresa: Empresa;
  empresas: Empresa[];
  readonly URL_API = 'http://localhost:3000/api/empresa';

  constructor(private http: HttpClient) { 
    this.selectedEmpresa = new Empresa();
  }

  getEmpresas(){
    return this.http.get(this.URL_API);
  }

  postEmpresa(empresa: Empresa){
    return this.http.post(this.URL_API, empresa);
  }

  putEmpresa(empresa: Empresa){
    return this.http.put(this.URL_API+`/${empresa._id}`, empresa);
  }

  deleteEmpresa(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}

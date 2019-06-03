import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Cliente } from '../../models/cliente';
import { Empresa } from '../../models/empresa';
import { ClienteService} from '../../services/cliente.service';
import { EmpresaService } from '../../services/empresa.service';





@Component({
  selector: 'app-gestioncliente',
  templateUrl: './gestioncliente.component.html',
  styleUrls: ['./gestioncliente.component.css']
})
export class GestionclienteComponent implements OnInit {

  empresaId: any;

  constructor(private clienteService: ClienteService,
              private empresaService: EmpresaService,
              ) { }

  ngOnInit() {
    this.getEmpresas();
  }

  addCliente(form?: NgForm){
    this.clienteService.postCliente(form.value)
    .subscribe(res =>{
      console.log(res);
    });
  }
  getEmpresas(){
    this.empresaService.getEmpresas()
    .subscribe(res =>{
      this.empresaService.empresas = res as Empresa[];
    });
  }

  editEmpresa(empresa: Empresa) {
    this.empresaService.selectedEmpresa = empresa;
  }

  onEmpresaSelected(val:any){
  }
///////////////////////////////////////////////////////////////
  rut(){

  }
///////////////////////////////////////////////////////////////
}

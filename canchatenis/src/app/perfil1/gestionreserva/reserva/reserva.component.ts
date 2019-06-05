import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import {MatListModule} from '@angular/material/list';
import { ClienteService} from '../../../services/cliente.service';
import { ValorService } from '../../../services/valor.service';
//import { } from '../../../services/';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private valorService: ValorService,
              ) { }

  searchTerm = '';
  clientes : any;
  clienteId: any;

  //booleanos para los formularios
  nufActive: boolean;
  ueActive: boolean;
  showClientes: boolean;

  //metodos para los formularios
  nuf(){this.nufActive = true;this.ueActive = false;}
  ue(){this.nufActive = false;this.ueActive = true;}
  sc(){this.showClientes = true;}

  ngOnInit() {
    this.getClientes();
  }
  //metodos para el formulario
  addCliente(form?: NgForm){
    this.clienteService.postCliente(form.value)
    .subscribe(res =>{
      //this.resetForm(form);
      console.log(res);
    });
  }

  addValor(form?: NgForm){
      this.valorService.postValor(form.value)
        .subscribe(res =>{
          console.log(res);
        })
  }

  getClientes(){
    this.clienteService.getClientesSinUsername()
      .subscribe(res => {
        this.clienteService.clientes = res as Cliente[];
        console.log(res);
        //AQUI LE DI EL VALOR DE LA RESPUESTA A UNA VARIABLES
        this.clientes = res;
        let aux = [];
        console.log(this.clientes.nombre);
      })
  }

  onClick(){
    this.clienteId = event.srcElement.id; //para tomar el valor de la wea que se le hace click la wa opi
    console.log(event);
    this.showClientes = false;
    console.log(this.clienteId);
  }



}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router";
import {MatListModule} from '@angular/material/list';
import { ClienteService} from '../../../services/cliente.service';
import { Cliente } from '../../../models/cliente';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }

  searchTerm = '';
  clientes : any;

  ngOnInit() {
    this.getClientes();
  }

  getClientes(){
    this.clienteService.getClientes()
      .subscribe(res => {
        this.clienteService.clientes = res as Cliente[];
        console.log(res);
        this.clientes = res;
        console.log(this.clientes);
      })
  }

}

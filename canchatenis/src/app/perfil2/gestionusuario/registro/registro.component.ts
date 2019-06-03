import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService} from '../../../services/cliente.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  constructor(private clienteService: ClienteService) { }
  vPass : boolean;

  ngOnInit() {
    
  }

  addUser(form?: NgForm){
    this.clienteService.registerCliente(form.value)
    .subscribe(res =>{
      if(res == "kh3 wea?"){
        this.vPass = true;
        console.log(this.vPass);
      }else{
        this.vPass = false;
        console.log(res);
      }
    });
  }   

}

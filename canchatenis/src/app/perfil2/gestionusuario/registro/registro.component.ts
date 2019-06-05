import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService} from '../../../services/cliente.service';
import { Cliente} from '../../../models/cliente';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  

  constructor(private clienteService: ClienteService) { }
  vPass : boolean;
  showSucessMessage: boolean;
  serverErrorMessage: string;

  ngOnInit() {
    // this.clienteService.selectedCliente ={
    //   username: 'hidden'}
    // de esta manera podemos asignarles valores por defectos a los campos del formulario, para si asociarle las ID's correspondiente segun la relacion que tenga
  }

  addUser(form?: NgForm){
    this.clienteService.postUser(form.value)
      .subscribe(
        res =>{
          this.showSucessMessage = true;
          setTimeout(()=> this.showSucessMessage = false, 5000);
          this.resetForm(form);
          console.log(res);
        },
        err =>{
          if(err.status == 422){
            this.serverErrorMessage = err.error.join('<br/>');
          }else{
            this.serverErrorMessage = 'Algo anda mal, por favor contacta al administrador'
          }
        }
      );
  }
  
  resetForm(form?: NgForm){
    this.clienteService.selectedCliente ={
      username: '',
      correo: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

}

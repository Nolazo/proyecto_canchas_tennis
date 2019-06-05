import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private router: Router) { }

  serverErrorMsjs: string;
  perfil: any;
  auxPerfil: any;

  ngOnInit() {
    // if(this.clienteService.isLoggedIn())
    //   this.router.navigateByUrl('/');
  }

  //comprueba el perfil
  login(form?: NgForm){ 
  //GENERA EL TOKEN
    this.clienteService.login(form.value)
      .subscribe(res =>{
        this.clienteService.setToken(res['token']);
        this.router.navigateByUrl('/perfil1');
      },
      err =>{
        this.serverErrorMsjs = err.error.message;
        console.log(err);
      });      
  }

}

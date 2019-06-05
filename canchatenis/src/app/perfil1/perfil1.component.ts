import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ClienteService } from "../services/cliente.service";

@Component({
  selector: 'app-perfil1',
  templateUrl: './perfil1.component.html',
  styleUrls: ['./perfil1.component.css']
})
export class Perfil1Component implements OnInit {

  userDetalle;
  constructor(private clienteService: ClienteService,
              private router: Router) { }

  ngOnInit() {
    this.clienteService.getUserProfile()
      .subscribe(res=>{
        this.userDetalle = res['cliente'];
      },err =>{

      })
  }

  onLogout(){
    this.clienteService.deleteToken();
    this.router.navigate(['/login']);
  }
  
}

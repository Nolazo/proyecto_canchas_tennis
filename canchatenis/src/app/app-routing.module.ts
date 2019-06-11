import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Perfil1Component} from '../app/perfil1/perfil1.component'
import {GestionclienteComponent} from '../app/perfil1/gestioncliente/gestioncliente.component'
import {CierrecajaComponent} from '../app/perfil1/cierrecaja/cierrecaja.component'
import {GestionreservaComponent} from '../app/perfil1/gestionreserva/gestionreserva.component'
import {ReportesComponent} from '../app/perfil1/reportes/reportes.component'
import {GestionusuarioComponent} from '../app/perfil2/gestionusuario/gestionusuario.component'
import {GestioncanchaComponent} from '../app/perfil2/gestioncancha/gestioncancha.component'
import {Reportes2Component} from '../app/perfil2/reportes2/reportes2.component'
import {Perfil2Component} from '../app/perfil2/perfil2.component'
import {ClientenosocioComponent} from '../app/perfil1/gestioncliente/clientenosocio/clientenosocio.component'
import {ListarusuariosComponent} from '../app/perfil2/gestionusuario/listarusuarios/listarusuarios.component'
import {LoginComponent} from '../app/login/login.component'
import { ReservaComponent } from './perfil1/gestionreserva/reserva/reserva.component';
import {RegistroComponent} from './perfil2/gestionusuario/registro/registro.component';

import { AuthGuard } from './auth/auth.guard';

import { TestComponent } from './components/test/test.component';

const routes: Routes = [
{path: 'perfil1', component:Perfil1Component},
{path: 'perfil1/gestioncliente', component:GestionclienteComponent},
{path: 'perfil1/cierrecaja', component:CierrecajaComponent},
{path: 'perfil1/gestionreserva', component:GestionreservaComponent},
{path: 'perfil1/reportes', component:ReportesComponent},
{path: 'perfil2/gestionusuario', component:GestionusuarioComponent},
{path: 'perfil2/gestioncancha', component:GestioncanchaComponent},
{path: 'perfil2/reportes2', component:Reportes2Component},
{path: 'perfil2', component:Perfil2Component},
{path: 'perfil1/gestioncliente/clientenosocio', component:ClientenosocioComponent},
{path: 'perfil2/gestionusuario/listarusuarios', component:ListarusuariosComponent},
{path: 'perfil2/gestionusuario/registro', component:RegistroComponent},
{path: 'login', component:LoginComponent},
{path: 'perfil1/gestionreserva/reserva', component:ReservaComponent},
{path: 'test', component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

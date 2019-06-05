import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Perfil1Component } from './perfil1/perfil1.component';
import { GestionclienteComponent } from './perfil1/gestioncliente/gestioncliente.component';
import { CierrecajaComponent } from './perfil1/cierrecaja/cierrecaja.component';
import { ReportesComponent } from './perfil1/reportes/reportes.component';
import { GestionreservaComponent } from './perfil1/gestionreserva/gestionreserva.component';
import { Perfil2Component } from './perfil2/perfil2.component';
import { GestionusuarioComponent } from './perfil2/gestionusuario/gestionusuario.component';
import { LoginComponent } from './login/login.component';
import { GestioncanchaComponent } from './perfil2/gestioncancha/gestioncancha.component';
import { Reportes2Component } from './perfil2/reportes2/reportes2.component';
import { ClientenosocioComponent } from './perfil1/gestioncliente/clientenosocio/clientenosocio.component';
import { ListarusuariosComponent } from './perfil2/gestionusuario/listarusuarios/listarusuarios.component';

//services
import { ReservaComponent } from './perfil1/gestionreserva/reserva/reserva.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RegistroComponent } from './perfil2/gestionusuario/registro/registro.component';

//otros
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Perfil1Component,
    GestionclienteComponent,
    CierrecajaComponent,
    ReportesComponent,
    GestionreservaComponent,
    Perfil2Component,
    GestionusuarioComponent,
    LoginComponent,
    GestioncanchaComponent,
    Reportes2Component,
    ClientenosocioComponent,
    ListarusuariosComponent,
    ReservaComponent,
    FilterPipe,
    RegistroComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [{//weas para el intercepter
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

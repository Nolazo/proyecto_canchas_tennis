import { Component, OnInit, Pipe } from '@angular/core';
import { CanchaService } from '../../services/cancha.service';
import { TipoCanchaService } from '../../services/tipo-cancha.service'
import { NgForm } from '@angular/forms';
import { Cancha } from '../../models/cancha/cancha';
import { TipoCancha } from '../../models/tipoCancha/tipo-cancha'
import { subscribeOn, map } from 'rxjs/operators';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  

  constructor(public canchaService: CanchaService,
              private tipoService: TipoCanchaService ) { }


  ngOnInit() {
    this.getCanchas();
  //this.getTipo();

  }



  addCancha(form?: NgForm){
    this.canchaService.postCancha(form.value)
    .subscribe(res =>{
      //this.resetForm(form);
      console.log(res);
    });
  }

  getCanchas(){
    this.canchaService.getCanchas()
    .subscribe(res =>{
      this.canchaService.selectedCancha = res as Cancha;
      console.log(res);
    });
  }


   resetForm(form?: NgForm){
     if (form){
       form.reset();
       this.canchaService.selectedCancha = new Cancha();
     }
   }

}

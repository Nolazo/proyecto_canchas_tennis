import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { CanchaService } from '../../services/cancha.service';
import { NgForm } from '@angular/forms';
import { Cancha } from '../../models/cancha';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  
  constructor(private canchaService: CanchaService ) { }


  ngOnInit() {
    this.getCanchas();
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
      this.canchaService.canchas = res as Cancha[];
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

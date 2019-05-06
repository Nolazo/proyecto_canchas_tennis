import { Component, OnInit } from '@angular/core';
import { TestService } from '../../services/test.service';
import { NgForm } from '@angular/forms';
import { Cancha } from 'src/app/models/cancha';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getCanchas();
  }

  addCancha(form?: NgForm){
    this.testService.postCancha(form.value)
    .subscribe(res =>{
      //this.resetForm(form);
      console.log(res);
    });
  }

  getCanchas(){
    this.testService.getCanchas()
    .subscribe(res =>{
      this.testService.canchas = res as Cancha[];
      console.log(res);
    });
  }

   resetForm(form?: NgForm){
     if (form){
       form.reset();
       this.testService.selectedCancha = new Cancha();
     }
   }

}

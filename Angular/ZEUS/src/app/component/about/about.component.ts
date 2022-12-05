import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { empleadoModel } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent implements OnInit {

  empleado=new empleadoModel();


  usuario = {
    nombre:'',
    appellido:'',
    date: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm) {

    console.log(forma)

    if(forma.invalid){
      Object.values(forma.controls).forEach(control =>{
        control.markAllAsTouched();
      })
      return;
    }

  }

}

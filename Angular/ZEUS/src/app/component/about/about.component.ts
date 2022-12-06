import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { empleadoModel } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',

})
export class AboutComponent implements OnInit {

  usuario=new empleadoModel();


 

  constructor(private servicioEmpleados:EmpleadosService) { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm) {


    console.log(this.usuario)

    if(forma.invalid){
      Object.values(forma.controls).forEach(control =>{
        control.markAllAsTouched();
      })
      return;
    }else{
      this.servicioEmpleados.crearEmpleado(this.usuario).subscribe(resp=>{
        console.log(resp)
      });
    }

  }

}

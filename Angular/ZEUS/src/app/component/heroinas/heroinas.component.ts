import { Component, OnInit } from '@angular/core';
import { HeroinasService, Heroina} from '../../servicios/heroinas.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroinas',
  templateUrl: './heroinas.component.html',
 
})
export class HeroinasComponent implements OnInit {

 empleados : any []=[];
  constructor( private http:HttpClient) {
    this.http.get('https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/analeinalegorretajulio')
    .subscribe((respuesta:any)=>{
      this.empleados=respuesta.data.employees;
      console.log( this.empleados);
      console.log(respuesta);
    })
   }

  ngOnInit(): void {



     
  }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empleadoModel } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url='https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/ana'

  constructor(private http: HttpClient) { }

  crearEmpleado(empleado:empleadoModel){
    return this.http.post(this.url,empleado)

  }
}

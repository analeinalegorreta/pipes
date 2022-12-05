import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empleadoModel } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  crearEmpleado(empleado:empleadoModel){

  }
}

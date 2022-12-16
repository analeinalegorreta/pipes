import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'AnaLeina';
  nombre2: string = 'CarLoS qUinTAna';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  PI: number = Math.PI;
  porcentaje: number = 0.123;
  salario: number = 12345.5;
  fecha: string = '2020/01/10';
  idioma:string='es';
  video:string='https://www.youtube.com/embed/POe9SOEKotk';
  activar:boolean=true;
  prueba:string='AnaLeina';


  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('LLego la data');

    }, 4500);

  })

  sailor = {
    nombre: 'mercury',
    edad: 18,
    poder: 'agua',
    direccion: {
      calle: 'principal calle',
      numero: 12,
      colonia: 'colonia heroinas de sailor',
    }
  }

 lenguas(params:string) {
  this.idioma=params
  
}

incognito(){
  this.activar=!this.activar
  let total:string=''

if(this.activar==false){
 this.prueba= this.nombre.replace(this.nombre, "x")
 for(let i=0;i<this.nombre.length;i++){
  total+='*'
 }
 this.prueba=total

}else{
  this.prueba=this.nombre
}

  
}

}

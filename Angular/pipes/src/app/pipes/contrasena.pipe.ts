import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

   
      
      let total: string = ''
      let prueba = value.replace(value, "x")
      if (activar == false) {

        for (let i = 0; i < value.length; i++) {
          total += '*'
        }
        prueba = total

      } else {
        prueba = value
      }


    
    return prueba;
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  forma:FormGroup;

  tipoCombo=['hola','mundo','1','2'];
  selected=-1
  selectedIndex=-1

  constructor(private fb:FormBuilder){

    this.crearFormulario();

  }

  ngOnInit(): void {
    
  }

  selectItem( evento: any){
    console.log(evento.target.value)
  }

  selectItemLayout( evento: any){
    console.log(evento.target.value)
  }

  get tipoValido(){
   let respuesta= this.forma.get('tipo')?.invalid && this.forma.get('tipo')?.touched
    return respuesta
  }
  
  get nombreValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched
  }

  get emailValido(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched
  }
  get telefonoValido(){
    return this.forma.get('telefono')?.invalid && this.forma.get('telefono')?.touched
  }

  get puestoValido(){
    return this.forma.get('puesto')?.invalid && this.forma.get('puesto')?.touched
  }

  get leyautValido(){
    return this.forma.get('layout')?.invalid && this.forma.get('layout')?.touched
  }

  // get pruebaValido2(){
  //   return this.forma.get('prueba2')?.invalid && this.forma.get('prueba2')?.touched
  // }

  // getvalidador(campo:string){
  //   return this.forma.get(campo)?.invalid && this.forma.get(campo)?.touched
  // }

  crearFormulario(){
    this.forma=this.fb.group({
      tipo:['',[Validators.required, Validators.maxLength(50)]],
      nombre:['',[Validators.required, Validators.maxLength(50)]],
      email:['',[Validators.required, Validators.email]],
      telefono:['',[Validators.required, Validators.maxLength(50)]],
      puesto:['',[Validators.required, Validators.maxLength(50)]],
      layout:['',[Validators.required]],
      // prueba:['',Validators.required, Validators.max(50)],
      // prueba2:['',Validators.required, Validators.max(50)],
    });
  }

  guardar(){
    console.log(this.forma)

    if(this.forma.invalid){
      
      Object.values(this.forma.controls).forEach(control=>{
        control.markAsTouched();
        //control.updateValueAndValidity()
      })
      console.log(this.forma)
    }
    console.log(this.forma.value)
  }


  verificarValides(){
    return this.forma.invalid
  }

}

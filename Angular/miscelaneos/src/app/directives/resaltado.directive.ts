import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( private el:ElementRef) { 
    console.log('directiva creada')
  // el.nativeElement.style.backgroundColor="yellow"
  
  }

  @HostListener('mouseenter') mouseEntro(){
    // this.el.nativeElement.style.backgroundColor="pink"
    // console.log(this.nuevoColor)
    this.resaltar(this.nuevoColor || 'pink')
  }
  @HostListener('mouseleave') mouseSalio(){
    // this.el.nativeElement.style.backgroundColor="yellow"
    this.resaltar(null);
  }

  @Input("appResaltado") nuevoColor:any;

  private resaltar (color:any){
    this.el.nativeElement.style.backgroundColor=color
  }

}



// ElementRef =>para el formato style
//HostListener => para cuando pasa el mouse encima del elemento this.el.nativeElement.style.backgroundColor=null tambien puede ser null
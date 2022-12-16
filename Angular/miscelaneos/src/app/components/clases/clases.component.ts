import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',

})
export class ClasesComponent implements OnInit {

  alerta: string = 'alert-danger'
  alertinfo: string = 'alert-success'
  negro: string = 'alert-dark'
  loading:boolean=false;

  propiedades: any = {
    color: true
  }

  constructor() { }

  ngOnInit(): void {
  }


  ejecutar(){
    this.loading=true;
    setTimeout(()=>this.loading=false,3000)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `

  <app-clases></app-clases>

  <p [appResaltado]="'orange'">
  Hola a Todos2
  </p>

    <app-ng-switch></app-ng-switch>

  `,
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

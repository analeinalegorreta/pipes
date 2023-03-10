import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { OnlyNumbeDirective } from './only-numbe.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    OnlyNumbeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

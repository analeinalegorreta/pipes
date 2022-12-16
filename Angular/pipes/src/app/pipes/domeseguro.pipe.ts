import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domeseguro'
})
export class DomeseguroPipe implements PipeTransform {
  constructor (private domSanitazer:DomSanitizer) {
    
  }

  transform(value: string, ...args: unknown[]): SafeResourceUrl {
    return this.domSanitazer.bypassSecurityTrustResourceUrl(value);
  }

}

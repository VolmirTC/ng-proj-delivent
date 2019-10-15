import { UrlService } from './url.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'retornaVersao'
})
export class RetornaVersaoPipe implements PipeTransform {

  transform(value: any): any {
    let value2 = value + ' - Fire';
    return value2;
  }

}

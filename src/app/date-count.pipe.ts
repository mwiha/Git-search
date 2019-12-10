import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'trimStr2'})
export class TrimStrTwo implements PipeTransform {
  transform(str: string): string {
    const takeFirst1 = str.substring(0,1);
    return takeFirst1;
  }
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return 2022 - +value.split('-')[0] + ' yrs';
  }
}

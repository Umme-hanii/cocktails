import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.length < 3) {
      return value;
    }

    const reg = new RegExp('(' + value + ')', 'gi');
    return value.replace(reg, '<span class="font-weight-bold">$1</span>');
  }

}

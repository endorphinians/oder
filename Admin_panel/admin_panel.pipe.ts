import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appAdminPanel',
})
export class AdminPanelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}

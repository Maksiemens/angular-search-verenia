import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformPhoneNumber'
})
export class TransformPhoneNumberPipe implements PipeTransform {

  transform(phoneNumber: string, ...args: any[]) {
    return phoneNumber.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  }
}
@NgModule({
  declarations: [TransformPhoneNumberPipe],
  exports: [TransformPhoneNumberPipe],
})
export class TransformPhoneNumberPipeModule {}

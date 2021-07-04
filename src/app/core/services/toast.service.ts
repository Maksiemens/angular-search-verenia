import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  // constructor(private toastrService: ToastrService) {}

  // private multipleErrorToast(error: any): void {
  //   Object.keys(error).forEach((prop: string) =>
  //     this.toastrService.error(error[prop]),
  //   );
  // }

  // error(error: any): void {
  //   if (error.errors) {
  //     this.multipleErrorToast(error.errors);
  //   }

  //   if (error.message) {
  //     this.multipleErrorToast(error.message);
  //     this.toastrService.error(error.message);
  //   }

  //   if (typeof error === 'string') {
  //     this.toastrService.error(error);
  //   }
  // }

  // success(success: any): void {
  //   this.toastrService.success(success.message);
  // }
}

import {
  NgModule,
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {
  constructor(
    private eRef: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('error', ['$event', '$event.target'])
  loadFallbackOnError(event: Event) {
    const img: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    this.renderer.setAttribute(img, 'src', '/assets/img/user_placeholder.svg');
    this.renderer.setAttribute(img.previousElementSibling, 'srcset', '/assets/img/user_placeholder.svg');
  }
}
@NgModule({
  declarations: [ImgFallbackDirective],
  exports: [ImgFallbackDirective],
})
export class ImgFallbackDirectiveModule {}

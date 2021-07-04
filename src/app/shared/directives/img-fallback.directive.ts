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
    this.renderer.setAttribute(img, 'src', 'https://via.placeholder.com/150');
    this.renderer.setAttribute(img.previousElementSibling, 'srcset', 'https://via.placeholder.com/150');
  }
}
@NgModule({
  declarations: [ImgFallbackDirective],
  exports: [ImgFallbackDirective],
})
export class ImgFallbackDirectiveModule {}

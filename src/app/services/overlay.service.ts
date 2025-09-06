import { ConnectedPosition, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { ElementRef, Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { PopupConfig } from '../interfaces/popup-config.interface';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  
  constructor(private overlay: Overlay) { }

  open(
    template: TemplateRef<any>,
    vcr: ViewContainerRef,
    origin: ElementRef,
    config?: PopupConfig
  ): OverlayRef {

    const positions: ConnectedPosition[] = [
      {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
        offsetY: 8,
      },
      {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom',
        offsetY: -8,
      },
    ];

    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions(config?.positions || positions);
  
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: config?.hasBackdrop ?? true,
      width: 'auto',
      height: 'auto',
      scrollStrategy: config?.closeOnScroll
        ? this.overlay.scrollStrategies.close()
        : this.overlay.scrollStrategies.reposition(),
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
  
    overlayRef.attach(new TemplatePortal(template, vcr));
  
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  
    return overlayRef;
  }
  
}

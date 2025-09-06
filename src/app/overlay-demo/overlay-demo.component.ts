import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import { OverlayService } from '../services/overlay.service';
@Component({
  selector: 'app-overlay-demo',
  templateUrl: './overlay-demo.component.html',
  styleUrls: ['./overlay-demo.component.scss']
})
export class OverlayDemoComponent {
 
  @ViewChild('triggerBtn', { read: ElementRef }) trigger!: ElementRef;
@ViewChild('dropdownMenu') dropdownMenu!: TemplateRef<any>;

constructor(private overlayService: OverlayService,
            private vcr: ViewContainerRef) {}

overlayRef: OverlayRef | null = null;

toggleDropdown() {
  if (this.overlayRef && this.overlayRef.hasAttached()) {
    this.overlayRef.dispose();
    this.overlayRef = null;
  } else {
    this.overlayRef = this.overlayService.open(
      this.dropdownMenu,
      this.vcr,
      this.trigger,
      {
        hasBackdrop: true,
        closeOnScroll: false,
      }
    );
  }
}

}

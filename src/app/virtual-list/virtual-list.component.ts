import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-virtual-list',
  templateUrl: './virtual-list.component.html',
  styleUrls: ['./virtual-list.component.scss']
})
export class VirtualListComponent<T = unknown> implements OnInit {
@Input() items: ReadonlyArray<T> =[];
@Input() itemHeight = 56; //in px for one item
@Input() visibleCount = 5; //visible items at a time.
@Input() minBufferPx = 200; //to preload some item beyond viewport for smooth scrolling
@Input() maxBufferPx = 400; //max buffer before cdk recycles, higher means fewer dom updates. 
@Input() trackByKey?: keyof T;
@ContentChild(TemplateRef) itemTemplate?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
    // trackBy function for *cdkVirtualFor — uses item[trackByKey] if provided, else index
    trackByIndex = (i: number, item: T) =>
    this.trackByKey ? (item as any)[this.trackByKey as any] : i;

  // Computed viewport height in pixels so exactly `visibleCount` items are shown
  get viewportPx(): number {
    return this.visibleCount * this.itemHeight;
  }

}

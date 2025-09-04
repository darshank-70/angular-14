import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-virtual-list',
  templateUrl: './virtual-list.component.html',
  styleUrls: ['./virtual-list.component.scss']
})
export class VirtualListComponent<T> {
  @Input() items: T[] = [];
  @Input() itemHeight = 50;
  @Input() visibleItemCount = 5;
  @Input() startIndex = 0;
  @Input() maxViewportHeight = 400;
  @ContentChild(TemplateRef) itemTemplate?: TemplateRef<any>;
  
}

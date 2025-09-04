import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-custom-virtual-scroll',
  templateUrl: './custom-virtual-scroll.component.html',
  styleUrls: ['./custom-virtual-scroll.component.scss']
})
export class CustomVirtualScrollComponent<T = any> implements OnInit {
@Input() items: T[] = [];
@Input() itemHeight = 50;
@Input() visibleItemCount = 5;
@Input() startIndex = 0;
@ContentChild(TemplateRef) itemTemplate?: TemplateRef<any>;
hello: string='';

  constructor() { }

  ngOnInit(): void {
  }

  get containerHeight(): number{
    return this.visibleItemCount * this.itemHeight;
  }
  get visibleItems(): T[] {
    return this.items.slice(this.startIndex, this.startIndex + this.visibleItemCount)
  }


import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVirtualScrollComponent } from './custom-virtual-scroll.component';

describe('CustomVirtualScrollComponent', () => {
  let component: CustomVirtualScrollComponent;
  let fixture: ComponentFixture<CustomVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomVirtualScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

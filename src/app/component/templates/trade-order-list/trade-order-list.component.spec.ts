import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeOrderListComponent } from './trade-order-list.component';

describe('TradeOrderListComponent', () => {
  let component: TradeOrderListComponent;
  let fixture: ComponentFixture<TradeOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

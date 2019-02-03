import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeTradeListComponent } from './trade-trade-list.component';

describe('TradeTradeListComponent', () => {
  let component: TradeTradeListComponent;
  let fixture: ComponentFixture<TradeTradeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradeTradeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradeTradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

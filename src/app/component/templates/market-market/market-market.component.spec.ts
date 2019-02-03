import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketMarketComponent } from './market-market.component';

describe('MarketMarketComponent', () => {
  let component: MarketMarketComponent;
  let fixture: ComponentFixture<MarketMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

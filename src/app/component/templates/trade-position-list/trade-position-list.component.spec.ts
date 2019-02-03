import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradePositionListComponent } from './trade-position-list.component';

describe('TradePositionListComponent', () => {
  let component: TradePositionListComponent;
  let fixture: ComponentFixture<TradePositionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradePositionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradePositionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

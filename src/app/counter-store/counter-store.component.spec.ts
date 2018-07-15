import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterStoreComponent } from './counter-store.component';

describe('CounterStoreComponent', () => {
  let component: CounterStoreComponent;
  let fixture: ComponentFixture<CounterStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

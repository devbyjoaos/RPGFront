import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaleComponent } from './dale.component';

describe('DaleComponent', () => {
  let component: DaleComponent;
  let fixture: ComponentFixture<DaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

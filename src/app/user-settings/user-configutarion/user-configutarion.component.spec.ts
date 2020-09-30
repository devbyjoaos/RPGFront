import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfigutarionComponent } from './user-configutarion.component';

describe('UserConfigutarionComponent', () => {
  let component: UserConfigutarionComponent;
  let fixture: ComponentFixture<UserConfigutarionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConfigutarionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConfigutarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

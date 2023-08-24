import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail9Component } from './cardetail9.component';

describe('Cardetail9Component', () => {
  let component: Cardetail9Component;
  let fixture: ComponentFixture<Cardetail9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail9Component]
    });
    fixture = TestBed.createComponent(Cardetail9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail8Component } from './cardetail8.component';

describe('Cardetail8Component', () => {
  let component: Cardetail8Component;
  let fixture: ComponentFixture<Cardetail8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail8Component]
    });
    fixture = TestBed.createComponent(Cardetail8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

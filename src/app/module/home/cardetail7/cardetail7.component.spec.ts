import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail7Component } from './cardetail7.component';

describe('Cardetail7Component', () => {
  let component: Cardetail7Component;
  let fixture: ComponentFixture<Cardetail7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail7Component]
    });
    fixture = TestBed.createComponent(Cardetail7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

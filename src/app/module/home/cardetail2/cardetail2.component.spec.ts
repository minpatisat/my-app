import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail2Component } from './cardetail2.component';

describe('Cardetail2Component', () => {
  let component: Cardetail2Component;
  let fixture: ComponentFixture<Cardetail2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail2Component]
    });
    fixture = TestBed.createComponent(Cardetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

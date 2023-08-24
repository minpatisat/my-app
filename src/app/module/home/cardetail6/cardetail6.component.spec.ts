import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail6Component } from './cardetail6.component';

describe('Cardetail6Component', () => {
  let component: Cardetail6Component;
  let fixture: ComponentFixture<Cardetail6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail6Component]
    });
    fixture = TestBed.createComponent(Cardetail6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

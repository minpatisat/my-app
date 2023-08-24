import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail3Component } from './cardetail3.component';

describe('Cardetail3Component', () => {
  let component: Cardetail3Component;
  let fixture: ComponentFixture<Cardetail3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail3Component]
    });
    fixture = TestBed.createComponent(Cardetail3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

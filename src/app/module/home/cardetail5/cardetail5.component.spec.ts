import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail5Component } from './cardetail5.component';

describe('Cardetail5Component', () => {
  let component: Cardetail5Component;
  let fixture: ComponentFixture<Cardetail5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail5Component]
    });
    fixture = TestBed.createComponent(Cardetail5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

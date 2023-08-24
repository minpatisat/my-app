import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetail4Component } from './cardetail4.component';

describe('Cardetail4Component', () => {
  let component: Cardetail4Component;
  let fixture: ComponentFixture<Cardetail4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardetail4Component]
    });
    fixture = TestBed.createComponent(Cardetail4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

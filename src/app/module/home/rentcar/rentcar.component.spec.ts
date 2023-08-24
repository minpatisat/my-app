import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarComponent } from './rentcar.component';

describe('RentcarComponent', () => {
  let component: RentcarComponent;
  let fixture: ComponentFixture<RentcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentcarComponent]
    });
    fixture = TestBed.createComponent(RentcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

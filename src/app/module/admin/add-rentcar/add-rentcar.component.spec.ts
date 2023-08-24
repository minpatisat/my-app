import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRentcarComponent } from './add-rentcar.component';

describe('AddRentcarComponent', () => {
  let component: AddRentcarComponent;
  let fixture: ComponentFixture<AddRentcarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddRentcarComponent]
    });
    fixture = TestBed.createComponent(AddRentcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

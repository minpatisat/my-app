import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentcarAdminComponent } from './rentcar-admin.component';

describe('RentcarAdminComponent', () => {
  let component: RentcarAdminComponent;
  let fixture: ComponentFixture<RentcarAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentcarAdminComponent]
    });
    fixture = TestBed.createComponent(RentcarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

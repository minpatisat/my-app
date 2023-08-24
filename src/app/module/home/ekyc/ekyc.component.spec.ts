import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkycComponent } from './ekyc.component';

describe('EkycComponent', () => {
  let component: EkycComponent;
  let fixture: ComponentFixture<EkycComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EkycComponent]
    });
    fixture = TestBed.createComponent(EkycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

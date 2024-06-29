import { ComponentFixture, TestBed } from '@angular/core/testing';

import { hotelcomponent } from './hotel.component';

describe('hotel.componentt', () => {
  let component: hotelcomponent;
  let fixture: ComponentFixture<hotelcomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [hotelcomponent]
    });
    fixture = TestBed.createComponent(hotelcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetParkingComponent } from './get-parking.component';

describe('GetParkingComponent', () => {
  let component: GetParkingComponent;
  let fixture: ComponentFixture<GetParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

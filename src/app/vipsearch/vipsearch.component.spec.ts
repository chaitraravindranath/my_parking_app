import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipsearchComponent } from './vipsearch.component';

describe('VipsearchComponent', () => {
  let component: VipsearchComponent;
  let fixture: ComponentFixture<VipsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

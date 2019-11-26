import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsearchComponent } from './guestsearch.component';

describe('GuestsearchComponent', () => {
  let component: GuestsearchComponent;
  let fixture: ComponentFixture<GuestsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

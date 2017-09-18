import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HarrisonFordComponent } from './harrison-ford.component';

describe('HarrisonFordComponent', () => {
  let component: HarrisonFordComponent;
  let fixture: ComponentFixture<HarrisonFordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarrisonFordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarrisonFordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartoonsComponent } from './cartoons.component';

describe('CartoonsComponent', () => {
  let component: CartoonsComponent;
  let fixture: ComponentFixture<CartoonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartoonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartoonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

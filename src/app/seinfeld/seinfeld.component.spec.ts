import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeinfeldComponent } from './seinfeld.component';

describe('SeinfeldComponent', () => {
  let component: SeinfeldComponent;
  let fixture: ComponentFixture<SeinfeldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeinfeldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeinfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

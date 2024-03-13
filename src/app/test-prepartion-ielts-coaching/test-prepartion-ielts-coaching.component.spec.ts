import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrepartionIELTSCoachingComponent } from './test-prepartion-ielts-coaching.component';

describe('TestPrepartionIELTSCoachingComponent', () => {
  let component: TestPrepartionIELTSCoachingComponent;
  let fixture: ComponentFixture<TestPrepartionIELTSCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPrepartionIELTSCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPrepartionIELTSCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

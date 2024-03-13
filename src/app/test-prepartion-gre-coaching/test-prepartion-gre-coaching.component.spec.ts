import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrepartionGreCoachingComponent } from './test-prepartion-gre-coaching.component';

describe('TestPrepartionGreCoachingComponent', () => {
  let component: TestPrepartionGreCoachingComponent;
  let fixture: ComponentFixture<TestPrepartionGreCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPrepartionGreCoachingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestPrepartionGreCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

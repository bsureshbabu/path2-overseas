import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationGuidanceComponent } from './application-guidance.component';

describe('ApplicationGuidanceComponent', () => {
  let component: ApplicationGuidanceComponent;
  let fixture: ComponentFixture<ApplicationGuidanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationGuidanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountSectionComponent } from './business-account-section.component';

describe('BusinessAccountSectionComponent', () => {
  let component: BusinessAccountSectionComponent;
  let fixture: ComponentFixture<BusinessAccountSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessAccountSectionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAccountSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

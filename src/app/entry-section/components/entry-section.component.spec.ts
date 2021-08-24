import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrySectionComponent } from './entry-section.component';

describe('EntrySectionComponent', () => {
  let component: EntrySectionComponent;
  let fixture: ComponentFixture<EntrySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

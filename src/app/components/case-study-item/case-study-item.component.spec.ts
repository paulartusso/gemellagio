import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyItemComponent } from './case-study-item.component';

describe('CaseStudyItemComponent', () => {
  let component: CaseStudyItemComponent;
  let fixture: ComponentFixture<CaseStudyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaseStudyItemComponent]
    });
    fixture = TestBed.createComponent(CaseStudyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

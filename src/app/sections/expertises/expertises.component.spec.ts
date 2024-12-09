import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertisesComponent } from './expertises.component';

describe('ExpertisesComponent', () => {
  let component: ExpertisesComponent;
  let fixture: ComponentFixture<ExpertisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertisesComponent]
    });
    fixture = TestBed.createComponent(ExpertisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

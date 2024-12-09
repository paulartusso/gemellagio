import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplaceManagementCardComponent } from './workplace-management-card.component';

describe('WorkplaceManagementCardComponent', () => {
  let component: WorkplaceManagementCardComponent;
  let fixture: ComponentFixture<WorkplaceManagementCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkplaceManagementCardComponent]
    });
    fixture = TestBed.createComponent(WorkplaceManagementCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

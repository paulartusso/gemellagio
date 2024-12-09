import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryProjectsComponent } from './temporary-projects.component';

describe('TemporaryProjectsComponent', () => {
  let component: TemporaryProjectsComponent;
  let fixture: ComponentFixture<TemporaryProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemporaryProjectsComponent]
    });
    fixture = TestBed.createComponent(TemporaryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

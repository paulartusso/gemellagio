import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsSelectionComponent } from './tools-selection.component';

describe('ToolsSelectionComponent', () => {
  let component: ToolsSelectionComponent;
  let fixture: ComponentFixture<ToolsSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsSelectionComponent]
    });
    fixture = TestBed.createComponent(ToolsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

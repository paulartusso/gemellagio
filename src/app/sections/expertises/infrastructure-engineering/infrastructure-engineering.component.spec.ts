import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrastructureEngineeringComponent } from './infrastructure-engineering.component';

describe('InfrastructureEngineeringComponent', () => {
  let component: InfrastructureEngineeringComponent;
  let fixture: ComponentFixture<InfrastructureEngineeringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrastructureEngineeringComponent]
    });
    fixture = TestBed.createComponent(InfrastructureEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFactoryCardComponent } from './digital-factory-card.component';

describe('DigitalFactoryCardComponent', () => {
  let component: DigitalFactoryCardComponent;
  let fixture: ComponentFixture<DigitalFactoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalFactoryCardComponent]
    });
    fixture = TestBed.createComponent(DigitalFactoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

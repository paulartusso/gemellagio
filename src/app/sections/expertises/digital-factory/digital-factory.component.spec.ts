import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFactoryComponent } from './digital-factory.component';

describe('DigitalFactoryComponent', () => {
  let component: DigitalFactoryComponent;
  let fixture: ComponentFixture<DigitalFactoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DigitalFactoryComponent]
    });
    fixture = TestBed.createComponent(DigitalFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

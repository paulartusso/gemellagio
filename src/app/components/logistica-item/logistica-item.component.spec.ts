import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaItemComponent } from './logistica-item.component';

describe('LogisticaItemComponent', () => {
  let component: LogisticaItemComponent;
  let fixture: ComponentFixture<LogisticaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaItemComponent]
    });
    fixture = TestBed.createComponent(LogisticaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

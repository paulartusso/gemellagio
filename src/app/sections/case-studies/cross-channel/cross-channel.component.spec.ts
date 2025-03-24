import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossChannelComponent } from './cross-channel.component';

describe('CrossChannelComponent', () => {
  let component: CrossChannelComponent;
  let fixture: ComponentFixture<CrossChannelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrossChannelComponent]
    });
    fixture = TestBed.createComponent(CrossChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

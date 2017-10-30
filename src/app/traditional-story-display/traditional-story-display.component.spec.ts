import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalStoryDisplayComponent } from './traditional-story-display.component';

describe('TraditionalStoryDisplayComponent', () => {
  let component: TraditionalStoryDisplayComponent;
  let fixture: ComponentFixture<TraditionalStoryDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalStoryDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalStoryDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

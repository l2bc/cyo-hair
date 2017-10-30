import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraditionalStoryComponent } from './traditional-story.component';

describe('TraditionalStoryComponent', () => {
  let component: TraditionalStoryComponent;
  let fixture: ComponentFixture<TraditionalStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraditionalStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

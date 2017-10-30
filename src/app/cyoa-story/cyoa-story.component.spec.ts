import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyoaStoryComponent } from './cyoa-story.component';

describe('CyoaStoryComponent', () => {
  let component: CyoaStoryComponent;
  let fixture: ComponentFixture<CyoaStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyoaStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyoaStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

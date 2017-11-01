import { TestBed, inject } from '@angular/core/testing';

import { TraditionalStoryService } from './traditional-story.service';

describe('TraditionalStoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TraditionalStoryService]
    });
  });

  it('should be created', inject([TraditionalStoryService], (service: TraditionalStoryService) => {
    expect(service).toBeTruthy();
  }));
});

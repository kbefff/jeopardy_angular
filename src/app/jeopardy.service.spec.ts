import { TestBed, inject } from '@angular/core/testing';

import { JeopardyService } from './jeopardy.service';

describe('JeopardyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeopardyService]
    });
  });

  it('should be created', inject([JeopardyService], (service: JeopardyService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { ReviewModalService } from './review-modal.service';

describe('ReviewModalService', () => {
  let service: ReviewModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

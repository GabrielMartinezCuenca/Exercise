import { TestBed } from '@angular/core/testing';

import { MultipleService } from './multiple.service';

describe('MultipleService', () => {
  let service: MultipleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
